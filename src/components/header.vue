<template>
  <header :class="{login: isLogin, 'no-login': !isLogin}">
    <template v-if="!isLogin">
      <router-link to="/" class="title">Multiplayer Blog</router-link>
      <p>Transform your plain text into static websites and blogs.</p>
      <div class="btns">
        <router-link to="/login"><el-button ><b>立即登录</b></el-button></router-link>
        <router-link to="/register"><el-button><b>注册账号</b></el-button></router-link>
      </div> 
    </template>
    <template v-if="isLogin">
      <h1 class="title"><router-link to="/" >Multiplayer Blog</router-link></h1>
      <router-link to="/create"><i class="edit el-icon-edit" title="创建博客"></i></router-link>
      <div class="user">
        <img class="avatar" :src="user.avatar" :alt="user.username" :title="user.username">
        <ul>
          <li><router-link to="/my">我的</router-link></li>
          <li><a href="#" @click="onLogout">注销</a></li>
          <li><router-link to="/login">切换用户</router-link></li>
        </ul>
      </div>         
    </template>
  </header>
</template>

<script>
  import { Message } from 'element-ui';
  import auth from '@/api/auth'
  window.auth = auth

  import { mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {}
    },

    computed: {
      ...mapGetters([
        'isLogin',
        'user'
        ])
    },

    created() {
      this.checkLogin()
    },

    methods: {
      ...mapActions([
        'checkLogin',
        'logout'
        ]),

      onLogout() {
         this.logout().then(() => {
          this.$router.push('/')
            Message.success('注销成功')
        })
      }
       
        
     
    }

  }
</script>


<style lang="less">

@import "../assets/base.less";  

header.no-login {
  padding: 0 12% 30px 12%;
  background: @bgColor;
  // background-image:url("../assets/backgroundimg.jpg") ;
  // background-repeat:round;
  display: grid;
  justify-items: center;
  box-shadow:0 0 1px rgba(0,0,0,.21);
  
  .title {
    color: #fff;
    font-size: 70px;
    margin: 60px 0 0 0;
    text-transform: uppercase;
    font-weight:900;
  }

  p {
    margin: 15px 0 0 0;
    color: #fff;
    font-size: 20px;
    font-family:'initial'
  }
  
  .btns {
    margin-top: 20px;
  }

  button {
    margin: 20px 5px 0;
  }
} 


header.login {
  display: flex;
  align-items: center;
  background: @bgColor;
  
  .title {
    margin: 0;
    padding: 0;
    font-size: 40px;
    text-transform: uppercase;
    flex: 1;

    a {
      color: #fff;
    }
  }

  .edit {
    color: #fff;
    font-size: 30px;
  }

  .avatar {
    width: 40px;
    height: 40px;
    border: 1px solid #fff;
    border-radius: 50%;
    margin-left: 15px;
    
  }

  .user {
    position: relative;

    ul {
      display: none;
      width:100px;
      position: absolute;
      right: -30px;
      list-style: none;
      border:none;
      margin:0;
      padding: 0;
      background-color: #fff;
      border-radius: 5px;
      text-align: center;
      a {
        text-decoration: none;
        color: #333;
        font-size: 12px;
        display: block;
        padding: 5px 10px;
        
        &:hover {
          background-color: #fc0;
          border: none;
          border-radius: 5px;
        }
      }

    }

    &:hover ul {
      display: block;
      transition: 'display' 2s;
      
    }
  }
}



</style>