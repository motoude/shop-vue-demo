<template>
  <div class="navbar">
      <a href="/">首页</a>
      <a href="/">分类</a>
      <a href="/">购物车</a>
      <a href="/">我的</a>
      <a href="/">更多</a>
    </div>
</template>
<style scoped>
div.navbar{
  position: fixed;
  width: 100vw;
  bottom: 0;
  left: 0;
  margin: 0;
  display:flex;
  float: left;
  height: 10vw;
  font-size: 4vw;
  line-height: 6vw;
  justify-content:space-between;
  padding: 2.5vw 5vw;
  background-color:rgb(255, 255, 255);
}

div.navbar a{
  color:#3d3d3d;
}
</style>
