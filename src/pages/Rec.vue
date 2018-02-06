<template>
  <div class="recommend">
      <div class="rec-wrap">
        <div class="rec-title">大牌商品</div>
        <ul class="rec-content">
            <li v-for="n in 5" :key="n.index" @click="gotodetail">
                <div class="rec-img"></div>
                <div class="rec-word">
                    <div class="r">仅剩2天</div>
                    <div><span class="r">666</span>件已售</div>
                </div>
            </li>
        </ul>
      </div>
  </div>
</template>
<script>
export default {
  methods:{
      gotodetail(){
          this.$router.push({path: '/detail'})
      }
  }
}
</script>

<style scoped>
.recommend{
    width: 100vw;
    height: auto;
    float: left;
}
.rec-wrap{
    width: 100vw;
    float: left;
}
.rec-title{
    height: 10vw;
    width: 100vw;
    line-height: 10vw;
    font-size: 5vw;
    color: rgb(255, 255, 255);
    background-color: rgb(224, 7, 25);
}
.rec-content {
    list-style: none;
    padding: 0;
    margin: 0;
}
.rec-content li{
    height: 48vw;
    width: 100vw;
    margin-bottom: 2vw;
}
.rec-img{
    height: 40vw;
    width: 100vw;
    background-color: rgb(87, 87, 97);
}
.rec-word {
    width: 100vw;
    height: 8vw;
    background-color: rgb(255, 255, 255);
}
.rec-word div{
    height: 8vw;
    float: right;
    font-size: 4vw;
    line-height: 8vw;
    margin-right: 3vw;
}
.rec-word .r{
    color: rgb(238, 6, 6);
}
</style>

