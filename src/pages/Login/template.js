import { mapActions } from 'vuex'
import { Message } from 'element-ui';


export default {
   
  data() {
    
      var checkUsername = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        setTimeout(() => {
          if (!/\w/.test(value)) {
            callback(new Error('只能是字母数字下划线'));
          } else if(value.length < 4 || value.length >10) {
            callback(new Error('长度为4~10个字符'));
          } else {
            callback();
          }
        }, 0);
      };
    var validatePass = (rule, value, callback) => {
        
      if (value === '') {
        callback(new Error('请输入密码'));
      } else if (value.length < 6 || value.length >16) {
        callback(new Error('长度为6~16个字符'));
      }else {
          if (this.ruleForm.checkPass !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
     
      return {
        ruleForm: {
          pass: '',
         
          username: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
        
          username: [
            { validator: checkUsername, trigger: 'blur' }
          ]
        }
      };
    },
  methods: {
      ...mapActions(['login']),
    submitForm(formName) {

        this.$refs[formName].validate((valid) => {
          if (valid) {
              this.login({ username: this.ruleForm.username, password: this.ruleForm.pass })
                .then(() => {
                  this.$router.push({ path: this.$route.query.redirect || '/' })
                  Message.success('登录成功')
                }).catch(err => {
                  Message.error('登录失败')
                })
            
          } else {
            Message.error('用户名/密码输入错误')
          }
        });
      },
      
    }
  }