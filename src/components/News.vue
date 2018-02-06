<template>
  <div class="news" @mouseover="clearnews" @mouseout="runnews">
        <div class="news-wrap">
            <div class="news-img news-in" >
                <img :src="news[nowIndex].newspic" :alt="news[nowIndex].alt">
            </div>
            <div class="news-category news-in">
                 {{ news[nowIndex].newscat }}
            </div>
            <div class="news-title news-in">
                {{ news[nowIndex].newstitle }}
            </div>
        </div>
  </div>
</template>

<script>
export default {
  props: {
    news: {
      type: Array,
      default: []
    },
    newstime: {
      type: Number,
      default: 1000
    }
  },
  data (){
    return {
      nowIndex: 0,
      isShow: true,
      newspic: ''
    }
  },
  computed: {
    prevIndex () {
      if (this.nowIndex===0){
        return this.news.length-1
      }
      else {
        return this.nowIndex-1
      }
    },
    nextIndex (){
      if (this.nowIndex == this.news.length -1){
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
    runnews () {
      this.newsId = setInterval(() => {
        this.goto(this.nextIndex)
      },this.newstime)
    },
    clearnews () {
      clearInterval(this.newsId)
    }
  },
mounted () {
    this.runnews();
  }
}
</script>

<style scoped>

.news{
    width:100vw;
    height:10vw;
    background-color: rgb(255, 255, 255);
}
.news-in {
    float: left;
    height:10vw;
    width:30vw;
}

.news-img img{
    width: 25vw;
    height:6vw;
    margin:2vw 2.5vw;
}

.news-category{
    margin: 2vw 0 2vw 0;
    line-height: 6vw;
    color: rgb(216, 20, 33);
    font-size: 3.5vw;
    overflow: hidden;
    border: .2vw solid rgb(216, 20, 33);
    border-radius: 2vw;
    width:10vw;
    height:6vw;
}
.news-title{
    margin: 2vw 2.5vw;
    width:55vw;
    height:6vw;
    line-height: 6vw;
    font-size:4vw;
    overflow: hidden;
    text-align: left;
}
</style>
