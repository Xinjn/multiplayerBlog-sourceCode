import  blog  from '@/api/blog';

export default {
    data() {
        return {
            user: '',
            blogs: [],
            total: 0,
            page:1
        }
    },
    created() {
        this.userId = this.$route.params.userId
        this.page = parseInt(this.$route.query.page) || 1
        blog.getBlogsByUserId(this.userId,{ page: this.page}).then(res => {
            if (res.data.length > 0) {
                this.user = res.data[0].user
            }
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
            blog.getBlogsByUserId(this.userId,{ page: newPage}).then(res => {
                this.blogs = res.data
                this.$router.push({
                    path:`/user/${this.userId}`,
                    query:{page:newPage}
                })
            })
        }
    },
}
