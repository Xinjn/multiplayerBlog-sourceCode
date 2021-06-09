import blog from '@/api/blog';


export default {
    data() {
        return {
            blogs: [],
            page: 1,
            total: 0,
            currentPage:1
        }
    },
    created() {
        let newPage = this.$route.query.page || 1
        blog.getIndexBlogs({ page: newPage }).then(res => {
            this.blogs = res.data
            this.total = res.total
            this.currentPage = parseInt(newPage);
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
         returnTop(){
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
    }

    },
}
