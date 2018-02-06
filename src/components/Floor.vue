<template>
  <div class="floor">
      <div class="floor-wrap">
          <div class="floor-title">
              {{floor.title}}
          </div>
          <div class="floor1" @click="gotorec">
              <div class="floor1-1" v-for="floor in floorlist11" :key="floor.index">
                  <img :src="floor.src"  :alt="floor.alt">              
              </div>
              <div class="floor1-2" v-for="floor in floorlist12"  :key="floor.index">
                  <img :src="floor.src" :alt="floor.alt">
              </div>
          </div>
          <div @click="gotorec" class="floor2"  v-for="floor in floorlist21"  :key="floor.index" >
              <div class="floor2-1">
                  <img :src="floor.src" :alt="floor.alt">              
              </div>
              <div class="floor2-2"  v-for="floor in floorlist22"  :key="floor.index" >
                  <img :src="floor.src" :alt="floor.alt">
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
    props:{
    floor:Object
  },
  computed:{
    floorlist11: function () {
      return this.floor.list1
    },
     floorlist12: function () {
      return this.floor.list2
    },
     floorlist21: function () {
      return this.floor.list3
    },
     floorlist22: function () {
      return this.floor.list4
    }
  },
  methods:{
      gotorec(){
      this.$router.push({ path: '/rec' })
    }
  }
}
</script>
<style scoped>
.floor{
    background-color: rgb(241, 241, 241);
    float: left;
}
.floor-wrap{
    float: left;
    margin-top: 2vw;
    background-color: rgb(255, 255, 255);
}
.floor-title{
    width: 100vw;
    height: 10vw;
    font-size: 4vw;
    line-height: 10vw;
}
.floor1,.floor2{
    width: 100vw;
    height: auto;
    float: left;
}
.floor2 {
    border-top: .2vw solid rgb(211, 202, 202);
}
.floor1-1, .floor2-1{
    width: 50vw;
    height: auto;
    float: left;
    border-right: .2vw solid rgb(211, 202, 202);
}
.floor1 div:last-child,.floor2 div:last-child{
     border-right: .2vw solid rgb(211, 202, 202);
}
.floor1 div:last-child,.floor2 div:last-child{
     border-right: .2vw solid rgb(211, 202, 202);
}
.floor1-2, .floor2-2{
    width: 25vw;
    height: auto;
    float: left;
    border-right: .2vw solid rgb(211, 202, 202);
}
img{
    display:block;
    width: 100%;
    height: auto;
}
</style>
