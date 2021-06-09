<template>
  <div id="edit">
    <h1>编辑文章</h1>
    <h3>文章标题</h3>
    <el-input v-model="title"></el-input>
        <p class="msg">{{title.length}}/10</span> 至少10个字</p>
    <h3>内容简介</h3>
    <el-input type="textarea" rows=3 v-model="description"></el-input>
    <p class="msg">{{description.length}}/100</span> 至少100个字</p>
    <h3>文章内容</h3>
    <el-input type="textarea" rows=20 v-model="content"></el-input>
    <p class="msg"><span>{{content.length}}/200</span> 至少200个字</p>

    <p class="atIndex">
      
    <el-switch
      v-model="atIndex"
      active-color="#13ce66"
      inactive-color="#ff4949">
    </el-switch>
    <span>展示到首页</span>
    </p>   

    <span class="onCreate"><el-button @click="onEdit" >确定</el-button></span>   
  </div>
</template>

<script src="./template.js"></script>

<style src="./template.less" lang="less"></style>
