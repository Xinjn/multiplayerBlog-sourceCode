<template>
  <header :class="{login: isLogin, 'no-login': !isLogin}">

    <template v-if="!isLogin" class="nav1">
      <router-link to="/" class="title">Multiplayer Blog</router-link>
      <p>The future of blog is multi person blog</p>
      <div class="btns">
        <router-link to="/login"><el-button ><b>立即登录</b></el-button></router-link>
        <router-link to="/register"><el-button><b>注册账号</b></el-button></router-link>
      </div> 
    </template>

    <template v-if="isLogin" class="nav2">
      <h1 class="title"><router-link to="/" >Multiplayer Blog</router-link></h1>
      <router-link to="/create" class="edit"><i class="el-icon-edit" title="创建博客"></i>写文章</router-link>
      <div class="user">
        <img class="avatar" :src="user.avatar" :alt="user.username" :title="user.username">
        <ul>
          <li><router-link to="/my">我的主页</router-link></li>
          <li><router-link to="/login">切换用户</router-link></li>
          <li><a href="#" @click="onLogout">退出</a></li>
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

//总容器：未登录
header.no-login {
  padding: 0 12% 30px 12%;
  background: @bgColor;
  display: grid;
  justify-items: center;
  box-shadow:0 0 1px rgba(0,0,0,.21);
  //大标题
  .title {
    color: #fff;
    font-size: 70px;
    margin: 60px 0 0 0;
    text-transform: uppercase;
    font-weight:900;
  }
  //小标题
  p {
    margin: 15px 0 0 0;
    color: #fff;
    font-size: 20px;
    font-family:'initial'
  }
  //登录注册
  .btns {
    margin-top: 20px;
  }
  //单个按钮
  .el-button {
    margin: 20px 5px 0;
  }
} 

//总容器：已登录
header.login {
  display: flex;
  align-items: center;
  background: @bgColor;
  //大标题
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
  //编辑
  .edit {
    text-align: center;
    color: #333;
    background: #fc0;
    font-size:15px;
    border-radius: 30px;
    padding: 6px 12px;
    font-family:-apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    font-weight: bold;
    box-shadow:0 3px 10px rgba(0, 0, 0, 0.1);
    >.el-icon-edit{
      margin-right: 5px;
    }
  }
  .edit:hover{
    color: #333;
    background: rgb(255, 166, 0);
    

  }

  //用户信息
  .user {
    position: relative;
    //头像
    .avatar {
      width: 40px;
      height: 40px;
      border: 2px solid #444;
      border-radius: 50%;
      margin-left: 15px;
    }
    //功能
    ul {
      // display: none;
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

      height: 0px;
      overflow: hidden;
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
          transition: all .5s;
        }
      }

    }
    &:hover ul {
      display: block;
      height: 87px;
      transition: all .5s;
    }
  }
}



</style>