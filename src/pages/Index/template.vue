<template>
  <div id="index">
    <div class="wrapper">
      <div class="list"> 
        <div id="box" class="box" @click="returnTop">
            <div class="box-in"></div>
        </div> 
        <section class="blog-posts" >
          <router-link class="item" v-for="blog in blogs" :to="`/detail/${blog.id}`" :key="blog.createdAt">
            <figure class="avatar">
              <img :src="blog.user.avatar"/>
              <figcaption>{{blog.user.username}}</figcaption> 
            </figure>
            <h3>{{blog.title}} <span class="createDate">{{friendlyDate(blog.createdAt)}}</span></h3> 
            <p>{{blog.description}} </p>
          </router-link>
        </section>
      </div>
    
    <aside>
      <h3>热门文章</h3>
      <article>
        <p><router-link to="/detail/394">浅析Js中const,let,var的区别及作用域</router-link></p>
        <p><router-link to="/detail/1">一次性彻底弄懂 this</router-link></p>
        <p><router-link to="/detail/141">300ms延时是什么?</router-link></p>
        <p><a href="javascript:;">彻底理解Android Binder通信架构</a></p>
        <p><a href="javascript:;">如何自学 Android</a></p>
      </article>
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
