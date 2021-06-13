

<template>
  <div id="login">
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm"  class="demo-ruleForm" >

  <el-form-item prop="username" >
    <h4>用户名</h4> 
    <el-input 
    v-model="ruleForm.username" 
    placeholder="请输入用户名"
    ></el-input>
  </el-form-item>

  <el-form-item  prop="pass">
    <h4>密码</h4>
    <el-input 
    type="password" 
    v-model="ruleForm.pass" 
    autocomplete="off" 
    placeholder="请输入密码" @keyup.enter.native="submitForm('ruleForm')"></el-input>
  </el-form-item>


  <el-button type="primary" @click="submitForm('ruleForm')" >立即登录</el-button>
  <p class="notice">没有账号？<router-link to="/register">注册新用户</router-link></p>
</el-form>

  </div>
</template>

<script src="./template.js"></script>

<style src="./template.less" lang="less"></style>
