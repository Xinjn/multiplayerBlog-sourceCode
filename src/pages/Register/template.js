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
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
          callback(new Error('两次输入的密码不一致! 请再输入一次您上面输入的密码'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass: '',
          username: ''
        },
        rules: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          username: [
            { validator: checkUsername, trigger: 'blur' }
          ]
        },
        
      };
    },
  methods: {
      ...mapActions(['register']),
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
              this.register({ username: this.ruleForm.username, password: this.ruleForm.checkPass })
                .then(() => {
                  this.$router.push({ path: '/' })
                  Message.success('注册成功')
                }).catch(err => {
                  Message.error(err.msg)
                })
            
          } else {
            Message.error('注册失败')
          }
        });
      },
      
    }
  }