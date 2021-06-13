<template>
  <div id="index">
    <div class="wrapper">
      <div class="list"> 
        <div id="box" class="box" @click="returnTop" :class= "showTop ? 'showReturnTop' : ''" >
            <div class="box-in"></div>
        </div>

        <!-- <div class="imgWrapper">

          <img src="https://z3.ax1x.com/2021/06/11/2hv3NQ.png" alt="2hv3NQ.png"/>
        </div> -->

        <section class="blog-posts" >
          <router-link class="item" v-for="blog in blogs" :to="`/detail/${blog.id}`" :key="blog.createdAt">
            <figure class="avatar">
              <img :src="blog.user.avatar"/>
              <figcaption>{{blog.user.username}}</figcaption> 
            </figure>
            <h3 class="titleWrapper"><span class="title">{{blog.title}}</span> <span class="createDate">发布于{{friendlyDate(blog.createdAt)}}</span></h3> 
            <p class="description">{{blog.description}} </p>
          </router-link>
        </section>

      </div>
    
    <aside>
      <div class="Hot-articles">
        <h3><span class="el-icon-guide"></span>热门文章</h3>
        <article>
          <p><router-link to="/detail/394">浅析Js中const,let,var的区别及作用域</router-link>
          <p><router-link to="/detail/1">一次性彻底弄懂 this</router-link></p>
          <p><router-link to="/detail/141">300ms延时是什么?</router-link></p>
          <p><router-link to="/detail/212">再见命令行！K8S傻瓜式安装，图形化管理真香</router-link></p>
          <p><router-link to="/detail/213">github国内加速解决方案</router-link></p>
        </article>
      </div>
      

      <div class="search">
        <h3><span class="el-icon-search"></span>搜索文章</h3>
            <el-input
              placeholder="请输入文章标题"
              v-model="input2"
              @keyup.enter.native="search">
            </el-input>
      </div>

    </aside>

    

    </div>
    

        <div class="pagination">
          <el-pagination
        
          layout="prev, pager, next"
          :current-page="currentPage"
          :total="total"
          @current-change="onPageChange"
          :page-size="20"
          >
          </el-pagination>
        </div>
  </div>
</template>

<script src="./template.js"></script>

<style scoped lang="less" src="./template.less"></style>
