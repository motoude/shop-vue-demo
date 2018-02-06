<template>
  <div class="carousel" @mouseover="clearInv" @mouseout="runInv">
    <div class="carousel-img">
      <a href="#">
      <transition name="carousel-trans">
        <img v-if="isShow" :src="carousels[nowIndex].src">
      </transition>
      <transition name="carousel-trans-old">
        <img v-if="!isShow" :src="carousels[nowIndex].src">
      </transition>
      </a>
    </div>
    <h2>{{ carousels[nowIndex].title }}</h2>
    <ul class="carousel-pages">
      <li @click="goto(prevIndex)">&lt;</li>
      <li v-for="(item,index) in carousels" :key="index" @click="goto(index)">
        <span :class="{on: index===nowIndex}">{{ index + 1 }}</span>
      </li>
      <li @click="goto(nextIndex)">&gt;</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    carousels:{
      type: Array,
      default: []
    },
    inv: {
      type: Number,
      default: 1000
    }
  },
  data (){
    return {
      nowIndex: 0,
      isShow: true
    }
  },
  computed: {
    prevIndex () {
      if (this.nowIndex===0){
        return this.carousels.length-1
      }
      else {
        return this.nowIndex-1
      }
    },
    nextIndex (){
      if (this.nowIndex == this.carousels.length -1){
        return 0
      }
      else {
        return this.nowIndex +1
      } 
    }
  },
  methods: {
    goto (index) {
      this.isShow = false
      setTimeout(() => {
        this.isShow = true
        this.nowIndex = index
      }, 10)
    },
    runInv () {
      this.invId = setInterval(() => {
        this.goto(this.nextIndex)
      },this.inv)
    },
    clearInv () {
      clearInterval(this.invId)
    }
  },
mounted () {
    this.runInv();
  }
}
</script>

<style scoped>
.carousel-trans-enter-active {
  transition: all 1s;
}
.carousel-trans-enter {
  transform: translateX(80vw);
}
.carousel-trans-old-leave-active {
  transition: all 1s;
  transform: translateX(-100vw);
}
.carousel{
  position: relative;
  margin: 0;
  width: 100vw;
  height: 50vw;
  overflow: hidden;
}
.carousel h2 {
  position: absolute;
  height: 8vw;
  width: 100vw;
  color: #fff;
  background: #000;
  opacity: .5;
  bottom: 0;
  text-align: left;
  padding-left: 2vw;
  font-size: 4vw;
  line-height: 8vw;
  margin: 0;
}
.carousel-img {
  width: 100vw;
  height: 50vw;
}
.carousel-img img {
  position: absolute;
  width: 100vw;
  height: 50vw;
  top: 0;
  left: 0;
}
.carousel-pages {
  position: absolute;
  bottom: 0;
  right: 2vw;
  height: 8vw;
  margin: 0;
  font-size: 4vw;
  line-height: 8vw;
}
.carousel-pages li {
  display: inline-block;
  padding: 0 2vw;
  cursor: pointer;
  color: #fff;
}
.carousel-pages li .on {
  text-decoration: underline;
}
</style>
