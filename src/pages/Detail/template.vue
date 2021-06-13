<template>
  <div id="detail">

    <main>
      <section class="user-info">
        <img :src="user.avatar" :alt="user.avatar" class="avatar">
        <h3 class="title">{{title}}</h3>
        <p class="userinfo"><router-link :to="`/user/${user.id}`" class="username">{{user.username}}</router-link>发布于{{friendlyDate(createdAt)}}</p>
      </section>

      <section class="article" v-html="markdown"></section>
    </main>


    <div class="msg-Board">
      <h3>写下你的评论</h3>
      <el-input
        type="textarea"
        :rows="2"
        placeholder="请输入内容"
        v-model="textarea">
      </el-input>
    </div>

  </div>
</template>

<script src="./template.js"></script>

<style src="./template.less" lang="less"></style>
