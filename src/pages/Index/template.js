import blog from '@/api/blog';
import { Message } from 'element-ui';


export default {
    data() {
        return {
            blogs: [],
            page: 1,
            total: 0,
            currentPage: 1,
            input2: '',
            allBlogs: [],
            showTop:false,
        }
    },
    created() {
        let newPage = this.$route.query.page || 1
        blog.getIndexBlogs({ page: newPage }).then(res => {
            this.blogs = res.data
            this.total = res.total
            this.currentPage = parseInt(newPage);
        })
        blog.getBlogs({ page: 1 }).then(res => {
            this.allBlogs = res.data
        })
    },
    methods: {
        onPageChange(newPage) {
            this.page = newPage
            blog.getIndexBlogs({ page: this.page }).then(res => {
                this.blogs = res.data
                this.$router.push({
                    path: '/',
                    query:{page:newPage}
                })
            })
            
        },
        returnTop() {
             console.log(document.documentElement.scrollTop);
            // document.body.scrollTop = document.documentElement.scrollTop = 0;
            var timer  = null;
            cancelAnimationFrame(timer);
            timer = requestAnimationFrame(function fn(){
                var oTop = document.body.scrollTop || document.documentElement.scrollTop;
                if(oTop > 0){
                    document.body.scrollTop = document.documentElement.scrollTop = oTop - 50;
                    timer = requestAnimationFrame(fn);
                }else{
                    cancelAnimationFrame(timer);
                }    
            });
        },
        search() {
            const title = this.input2.trim()
            this.allBlogs.forEach(blog => { 
                if (blog.title === title) {
                    this.$router.push({path: `/detail/${blog.id}`})
                }    
            });
        },
        handleScroll() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || 
  document.body.scrollTop

            if (scrollTop > 500) {
                this.showTop = true
            } else {
                this.showTop = false
            }
        },
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll)
    },
}
