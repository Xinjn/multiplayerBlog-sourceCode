<template>
  <div id="user">

    <section class="user-info">
      <img :src="user.avatar" alt="" class="avatar">
      <h3>{{user.username}}</h3>
    </section>

    <section v-for="blog in blogs" :key="blog.createdAt">
      <router-link class="item" :to="`/edit/${blog.id}`">
        <div class="date">
          <span class="day">{{splitDate(blog.createdAt).date}}</span>
          <span class="month">{{splitDate(blog.createdAt).month}}月</span>
          <span class="year">{{splitDate(blog.createdAt).year}}</span>
        </div>
        <h3>{{blog.title}}</h3>
        <p>{{blog.description}}</p>
        <div class="actions">
            <el-button href="#" @click.prevent="onDelete(blog.id)">删除</el-button>
            <router-Link :to="`/edit/${blog.id}`"><el-button>编辑</el-button></router-Link>
        </div>
      </router-link>
    </section>
    
    <span class="pagination">
      <el-pagination 
        layout="prev, pager, next"
        :total="total"
        @current-change="onPageChange"
        :current-page="page"
        :page-size=20
        >
      </el-pagination>
    </span>
    
  </div>
</template>

<script src="./template.js"></script>

<style src="../My/template.less" lang="less"></style>
