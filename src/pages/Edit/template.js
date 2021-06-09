import  blog  from '@/api/blog';
import marked from 'marked';
import { Message } from 'element-ui';

export default {
    data() {
        return {
            blogId:null,
            title: '',
            content: '',
            description: '',
            atIndex:false,
        }
    },
    
    created() {
        this.blogId = this.$route.params.blogId
        blog.getDetail({ blogId: this.blogId }).then(res => {
            this.title = res.data.title
            this.content = marked(res.data.content)
            this.description = res.data.description
            this.atIndex = res.data.atIndex
        })
    },
    methods: {
        onEdit() {
            blog.updateBlog({ blogId: this.blogId }, { title: this.title, content: this.content, description: this.description, atIndex: this.atIndex })
                .then(() => {
                    this.$router.push({
                        path:`/detail/${this.blogId}`
                    })
                    Message.success('更新成功')
                })
        }   
    },
}