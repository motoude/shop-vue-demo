<template>
  <div class="detail">
    <Carousel :carousels="carousels" :inv="invTime"></Carousel>
    <div class="detail-wrap">
      <div class="g-detail">
        <div class="g-name">{{detail.title}}</div>
        <div class="g-price-wrap">
           <div class="g-price">￥{{detail.price}}</div>
           <div class="g-price-p">优惠价</div>
        </div>
        <div class="coupon">
          <a href="#">剁手券</a><span>  领取剁手券，享叠加优惠！</span>
        </div>
        <div class="express">
          <div class="express-l">快递：免运费</div>
          <div class="express-m">月销{{detail.sale}}笔</div>
          <div class="express-r">{{detail.city}}</div>
        </div>
        <div class="returned">
          <div>15天退货</div>
          <div>3天发货</div>
          <div>小V宝贝</div>
          <div>运费险</div>
          <div class="return-more">&gt;</div>
        </div>
      </div>
      <div class="select">
        <div class="select-l">请选择商品类型</div>
        <div class="select-r">&gt;</div>
      </div>
      <div class="pic-word">
        <div class="word-wrap">
            <h2>图文详情</h2>
            <div class="word">{{detail.word}}</div>
        </div>
        <div class="pic">
          <img v-for="n in detail.wpic" :src="n.src" :key="n.index" alt="d1">
        </div>
      </div>
    </div>
    <Footer></Footer>
    <div class="add-cart">
      <div class="btn1" @click="goback">返回</div>
      <div class="btn2">购物车</div>
      <div class="btn3">加入购物车</div>
      <div class="btn4" @click="buygoods">立即购买</div>
    </div>
    <div class="buy" v-if="buyShow">
      <div class="buy-cancel"></div>
      <div class="buy-wrap">
        <div class="buy-card">
          <div class="buy-card-l">
            <img :src="detail.pic" alt="">
          </div>
          <div class="buy-card-r">
            <h2>{{detail.title}}</h2>
            <span>￥{{detail.price}}</span>
          </div>
        </div>
        <div class="buy-number">
            <span>购买数量： </span>
            <div class="buy-number-r">
              <div class="add" @click="addbuynum">+</div>
              <input type="text" :value="buynum">
              <div class="red" @click="redbuynum">-</div>
            </div>
        </div>
      </div>
      <div class="add-cart">
        <div class="btn-l" @click="buygoodscancel">返回</div>
        <div class="btn3">加入购物车</div>
        <div class="btn4" @click="buygoods">立即购买</div>
      </div>
    </div>
  </div>
</template>

<script>
import Carousel from '@/components/Carousel.vue'
import Footer from '@/components/Footer.vue'
import api from './../axios/api.js'
import './../mock.js'
export default {
   components: {
      Carousel,
      Footer
  },
  data (){
    return {
      carousels: [],
      invTime: 3000,
      detail: {},
      buyShow:false,
      buynum:1
    }
  },
  created(){
    this.getCarousels();
    this.getdetail();
  },
  methods: {
    getCarousels(){
     api.JH_news('/carousellist')
      .then(res => {
        console.log(res);
        this.carousels = res.list;
      })
    },
    getdetail(){
     api.JH_news('/detaillist')
      .then(res => {
        console.log(res);
        this.detail = res.object;
      })
    },
    goback(){
      this.$router.go(-1)
    },
    buygoods(){
      this.buyShow=true
    },
    buygoodscancel(){
      this.buyShow=false
    },
    addbuynum(){
      this.buynum++
    },
    redbuynum(){
      if (this.buynum>1){
          this.buynum--
      }
    }
  }
}
</script>

<style scoped>
.detail {
  background-color: rgb(241, 241, 241);
  color: rgb(105, 101, 101);
  float: left;
  }

.g-detail {
  float: left;
  padding-top: 3vw;
  width: 100vw;
  height: auto;
  text-align: left;
  background-color: rgb(255, 255, 255);
}
.g-name {
  width: 90vw;
  color:rgb(31, 29, 29);
  height: 7vw;
  font-size: 5vw;
  line-height: 7vw;
  margin: 0 5vw;
  overflow:hidden; 
  text-overflow:ellipsis;
}
.g-price-wrap{
  width: 90vw;
  height: 9vw;
  margin: 1vw 5vw;
  padding-bottom: 2vw;
  border-bottom: .1vw solid rgb(204, 203, 203);
}
.g-price{
  height: 7vw;
  font-size: 6vw;
  line-height: 7vw;
  color: #FB4747;
  width: auto;
  float: left;
}
.g-price-p {
  height: 5vw;
  color: #FB4747;
  width: auto;
  float: left;
  margin:1vw 3vw;
  padding: 0 1vw;
  font-size: 3vw;
  line-height: 5vw;
  border:.2vw solid #FB4747;
  border-radius: 1vw;
}
.coupon {
  margin: 0 5vw;
  height:8vw;
  width: 90vw;
}
.coupon a {
  color:#FB4747;
  font-size: 4vw;
  padding: .5vw 1vw;
  border:.2vw solid #FB4747;
}
.coupon span {
  color:rgb(31, 29, 29);
  font-size: 4vw;
  padding: 0 0 0 2vw;
}
/* 快递*/
.express{
  width: 100vw;
  height: 8vw;
  padding: 0 5vw;
  background-color: rgb(255, 255, 255);
}
.express div{
  float: left;
  height: 8vw;
  font-size: 3vw;
  line-height: 8vw;
  width: 30vw;
}
.express-l{
  text-align: left;
}
.express-m{
  text-align:center;
}
.express-r{
  text-align: right;
}
.returned {
  width: 100vw;
  height: 8vw;
  float: left;
  padding: 0 5vw;
  background-color: rgb(255, 255, 255);
}
.returned div {
  float: left;
  height: 8vw;
  font-size: 3.5vw;
  line-height: 8vw;
  width: 20vw;
  text-align: left;

}
div.return-more {
  width: 10vw;
  text-align: right;
  height: 8vw;
  font-size: 5vw;
  line-height: 8vw;
}
.select {
  float: left;
  width: 100vw;
  height: 10vw;
  padding: 0 5vw;
  margin: 2vw 0;
  background-color: rgb(255, 255, 255);
}
.select-l{
  float: left;
  width: 80vw;
  height: 10vw;
  font-size: 5vw;
  line-height: 10vw;
  text-align: left;
  color:rgb(31, 29, 29);
}
.select-r{
  float: left;
  width: 10vw;
  height: 10vw;
  font-size: 5vw;
  line-height: 10vw;
  text-align: right;
  color: rgb(105, 101, 101);
}
.pic-word {
  width: 100vw;
  height: auto;
  float: left;
  background-color: rgb(255, 255, 255);
}
.pic-word .word-wrap{
  width: 90vw;
  margin:2vw 5vw;
  height: auto;
  float: left;
  text-align: left;
  color: black;
}
.pic-word h2{
  margin: 0;
  height: 10vw;
  font-size: 5vw;
  line-height: 10vw;
}
.word{
  font-size: 4.5vw;
  line-height: 6vw;
  color: rgb(54, 53, 52);
}

.pic {
  width: 100vw;
  margin:0;
  height: auto;
  float: left;
}
.pic img{
  width: 100vw;
}
/*底部导航*/
.add-cart{
  position: fixed;
  width: 100vw;
  bottom: 0;
  left: 0;
  margin: 0;
  float: left;
  height: 12vw;
}

.btn1,.btn2{
  width: 20vw;
  height: 12vw;
  float: left;
  color: #505050;
  font-size: 4vw;
  line-height: 12vw;
  background-color: #e5e5e5;
}
.btn3, .btn4{
  width: 30vw;
  float: left;
  color: white;
  font-size: 5vw;
  line-height: 12vw;
  height: 12vw;
}

.btn3{  
  background-color: #FD9E24;
}

.btn4{
  background-color: #FB4747;
}
/*购买页面*/
.buy{
  width: 100vw;
  height: 67vw;
  position:fixed;
  bottom: 0;
  left: 0;
  background-color: rgb(255, 255, 255);
}
.buy-wrap{
  float: left;
  width: 100vw;
  height: auto;
  margin: 0 5vw;
}
.buy-card{
  float: left;
  width: 90vw;
  margin: 0;
  border-bottom:.2vw solid rgb(165, 158, 158);
}
.buy-card-l{
  float: left;
  width: 35vw;
  height: 35vw;
  padding: 5vw;
}
.buy-card-l img{
  float: left;
  width: 100%;
  height: 100%;

}
.buy-card-r{
  float: left;
  width: 55vw;
  height: 20vw;
  margin: 7.5vw 0;
}
.buy-card-r h2 {
  display: block;
  float: left;
  margin:0;
  padding: 0;
  width: 100%;
  height: 10vw;
  font-size: 5vw;
  line-height: 10vw;
  text-align: left;
  font-weight: 500;
}
.buy-card-r span {
  display: block;
  float: left;
  margin:0;
  padding: 0;
  width: 100%;
  height: 10vw;
  font-size: 8vw;
  line-height: 10vw;
  text-align: left;
  color: rgb(240, 33, 33);
}
.buy-number{
  width: 90vw;
  height: 10vw;
  margin: 5vw 0;
  float: left;
}
.buy-number span {
  width: 30vw;
  height: 10vw;
  margin: 0;
  float: left;
  font-size: 5vw;
  line-height: 10vw;
  color: #000000;
}
.buy-number-r{
  float: right;
  width: 40vw;
  height: 10vw;
  margin: 0;
  font-size: 5vw;
  line-height: 10vw;

}
.buy-number-r div{
  height: 10vw;
  width: 10vw;
  background-color: #ffffff;
  border: .1vw solid rgb(214, 214, 214);
}
.buy-number-r input{
  height: 10vw;
  width: 20vw;
  background-color: #ffffff;
  border: .1vw solid rgb(221, 216, 216);
}
.buy-next {
  float: left;
  height: 12vw;
  width: 100vw;
  color: #ffffff;
  background-color: #FB4747;;
}

.btn-l {
  display:left;
  font-size: 5vw;
  line-height: 12vw;
  height: 12vw;
  width:40vw;
  background-color: rgb(214, 214, 214);
}
/* btn3，btn4用上面的*/

</style>
