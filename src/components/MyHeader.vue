<template>
  <div class="header">
      <div class="h-ico">
          V
      </div>
      <div class="h-search">
          {{ hdata.title }}
      </div>
  </div>
</template>
<script>

export default {
    props: {
        hdata: {
            type: Object,
            default:  function () {
            return {
                title :'寻找你喜欢的V货'}
            }
        }
    }
}
</script>
<style scoped>
.header{
    height: 10vw;
    width: 100vw;
    background-color: rgb(248, 48, 48);
}
.h-ico{
    float: left;
    width: 10vw;
    margin: 0;
    font-size: 8vw;
    line-height: 10vw;
    color: rgb(255, 255, 255);
}
.h-ico img {
    width: 10vw;
    height: 10vw;
}
.h-search {
    float: left;
    height: 8vw;
    width:87vw;
    margin: 1vw 1.5vw;
    border:0.5vw solid  rgb(248, 48, 48);
    border-radius: 1.5vw;
    background-color:  rgba(163, 12, 12, 0.993);
    text-align: center;
    font-size: 3.5vw;
    line-height: 8vw;
    color: rgb(253, 253, 253);
    font-weight: 300;
}
</style>

