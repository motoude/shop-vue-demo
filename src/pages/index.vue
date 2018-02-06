<template>
    <div class="index">
        <!--顶部搜索-->
        <my-header></my-header>
        <!--轮播-->
        <Carousel :carousels="carousels" :inv="invTime"></Carousel>
        <!--小V头条-->
        <news :news="news" :newstime="newstime"></news>
        <!--楼层-->
        <floor :floor="floor1"></floor>
        <floor :floor="floor2"></floor>
        <!--小V推荐-->
        <div class="recommend">
          <div class="r1">为您推荐</div>
          <div class="r2">登陆账号，可以查看专属推荐哦 &gt;</div>
        </div>
        <goods-show :list="goods"></goods-show>
        <navbar></navbar>
        <Footer></Footer>
    </div>     
</template>
<script>
import myHeader from '@/components/MyHeader.vue'
import Carousel from '@/components/Carousel.vue'
import News from '@/components/News.vue'
import Floor from '@/components/Floor.vue'
import GoodsShow from '@/components/GoodsShow.vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import api from './../axios/api.js'
import './../mock.js'
export default {
   components: {
      myHeader,
      Carousel,
      News,
      Floor,
      GoodsShow,
      Navbar,
      Footer
  },
  data (){
    return {
      carousels: [],
      invTime: 3000,
      news: [],
      newstime: 3000,
      goods:[],
      floor1:{},
      floor2:{}
    }
  },
  created(){
    this.getCarousels();
    this.getNews();
    this.getgoods();
    this.getfloor1();
    this.getfloor2();
  },
  methods: {
    getCarousels(){
     api.JH_news('/carousellist')
      .then(res => {
        console.log(res);
        this.carousels = res.list;
      })
    },
    getNews(){
     api.JH_news('/newslist')
      .then(res => {
        console.log(res);
        this.news = res.list;
      })
    },
    getgoods(){
     api.JH_news('/goodslist')
      .then(res => {
        this.goods = res.list;
      })
    },
    getfloor1(){
     api.JH_news('/floorlist1')
      .then(res => {
         console.log(res);
        this.floor1 = res;
      })
    },
     getfloor2(){
     api.JH_news('/floorlist2')
      .then(res => {
         console.log(res);
        this.floor2 = res;
      })
    }
  }
}
</script>
<style>
.index{
  background-color: rgb(184, 13, 13);
}
.recommend{
  float: left;
  width: 100vw;
  background-color: rgb(241, 241, 241);
}
.r1 {
  width: 100vw;
  margin-top: 2vw;
  color: rgb(34, 32, 29);
  font-size: 4vw;
}
.r2 {
  width: 100vw;
   color: rgb(250, 17, 17);
  font-size: 5vw;
  font-weight: 500;
}
</style>

