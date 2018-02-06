<template>
    <div class="goods">
        <div class="goods-wrap">
            <ul>
                <li v-for="goods in goodslist" :key="goods.index">
                    <router-link to="/detail">
                      <img :src="goods.pic" alt="">
                      <div class="g-name">{{ goods.title}}</div>
                      <div class="price-wrap">
                        <div class="g-price">¥ {{ goods.price}}</div>
                        <div class="g-discount">加入购物车。立减5元！</div>
                      </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
  props:{
    list:Array
  },
  computed:{
    goodslist: function () {
      return this.list
    }
  }
}
</script>

<style scoped>
/*商品goods-wrap*/
.goods {
    width: 100vw;
    height: auto;
    float: left;
}
.goods-wrap{
  width: 100vw;
  height: auto;
  float: left;
}
.goods-wrap ul{
  width: 100vw;
  height: auto;
  margin: 0;
  padding: 0;
  display: block;
  float: left;
  background-color: rgb(241, 241, 241);
}

.goods-wrap li{
  display: inline-block;
  width: 49.5vw;
  height: auto;
  text-align: center;
  margin-top: 1vw;
  background-color: rgb(255, 255, 255);
}
.goods-wrap li a{
  display:block;
  padding:0;
  width: 100%;
  height:auto;
  text-decoration: none;
}
.goods-wrap li a{
  display:block;
  padding:0;
  width: 100%;
  height:auto;
  text-decoration: none;
}
.goods-wrap ul img{
  width: 100%;
  height: 30vw;
  border: 0;
  display: block;
  background-color: #FB4747;
}


.goods-wrap li:nth-child(odd) {
    margin-right: .5vw;
}
.goods-wrap li:nth-child(even) {
    margin-left: .5vw;
}


.goods-wrap .g-name{
  width:100%;
  padding: 1.5vw 3vw;
  font-size: 3.5vw;
  line-height: 4vw;
  color: rgb(73, 70, 70);
  text-align:left;
  white-space: nowrap;
  text-overflow:ellipsis;
  overflow: hidden;
}
.price-wrap {
  width: 100%;
  height: 4vw;
}
.goods-wrap .g-price{
  color: #FB4747;
  font-size: 3.5vw;
  width: 15vw;
  height: 4vw;
  line-height: 4vw;
  float: left;
}
.goods-wrap .g-discount{
  width: 34vw;
  color: rgb(129, 127, 127);
  font-size: 2.7vw;
  float: left;
  line-height: 4vw;
  height: 4vw;
}
</style>
