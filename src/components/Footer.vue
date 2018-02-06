<template>
  <div class="footer">
      <div class="buttons">
        <a href="#">登陆</a>
        <a href="#">注册</a>
        <a href="#">电脑版</a>
        <a href="#">反馈</a>
      </div>
      <div class="copyright">
        © 2017陕-558932476
      </div>
    </div>
</template>
<style scoped>

.footer{
  float: left;
  width:100vw;
  height: auto;
  background-color: #4e525e;
  padding-bottom: 40vw;
}
.footer .buttons{
  display: flex;
  justify-content:space-between;
  float: left;
  width: 100vw;
  height: auto;
  margin:10vw 0; 
  padding: 0 5vw;
}
.footer .buttons a{
  display: inline-block;
  width: auto;
  height: auto;
  color: #c3c6ca;
  background-color: #5f646e;
  text-align: center;
  padding: 2vw 4vw;
  border: .1vw solid #42454d;
  border-radius: 2vw;
  font-size: 4vw;
}
.footer .copyright{
  float: left;
  width: 100%;
  height: auto;
  text-align: center;
  color: #c3c6ca;
  font-size: 5vw;
}

</style>
