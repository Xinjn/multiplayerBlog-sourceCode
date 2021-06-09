import  blog  from '@/api/blog';
import {mapGetters } from 'vuex'

export default {
    data() {
        return {
            blogs: [],
            total: 0,
            page:1
        }
    },
    computed: {
        ...mapGetters(['user'])
    },
    created() {
        this.page = parseInt(this.$route.query.page)  || 1
        blog.getBlogsByUserId(this.user.id,{ page: this.page}).then(res => {
            this.blogs = res.data
            this.total = parseInt(res.total)
            this.page = res.page
        })
    },
    methods: {
        splitDate(dateStr) {
            let dateObj = typeof dateStr === 'object' ? dateStr : new Date(dateStr)
            return {
                date : dateObj.getDate(), //日
                month :dateObj.getMonth()+1,//月
                year : dateObj.getFullYear() //年
            }
        },
        onPageChange(newPage) {
            blog.getBlogsByUserId(this.user.id,{ page: newPage}).then(res => {
                this.blogs = res.data
                this.$router.push({
                    path:"/my",
                    query:{page:newPage}
                })
            })
        },
        onDelete(blogId) {
            console.log(blogId);
            blog.deleteBlog({blogId}).then(() => {
                this.blogs = this.blogs.filter(blog => blog.id !== blogId) 
            })
        }
    },
}