

<template>
  <div id="register">
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="demo-ruleForm" >

  <el-form-item  prop="username" >
    <h4>用户名</h4> 
    <el-input v-model="ruleForm.username" ></el-input>
  </el-form-item>

  <el-form-item  prop="pass">
    <h4>密码</h4>
    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
  </el-form-item>

  <el-form-item prop="checkPass">
    <h4>确认密码</h4>
    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
  </el-form-item>

  <el-button type="primary" @click="submitForm('ruleForm')">立即注册</el-button>
  <p class="notice">已有账号？<router-link to="/login">立即登录</router-link></p>
</el-form>

  </div>
</template>


<script src="./template.js"></script>

<style src="../Login/template.less" lang="less"></style>
