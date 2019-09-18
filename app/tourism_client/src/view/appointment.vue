<template>
  <div>
    <div class="top_banner">
      <img src="img/appointment/banner.jpg" />
    </div>
    <header>
      <router-link to="/">
        <img class="logo" src="img/appointment/logo.png" alt />
      </router-link>
      <img class="biu" src="img/appointment/biu.jpg" alt />
      <button>重置</button>
    </header>
    <section>
      <div>
        <span>地点</span>
        <img src="img/appointment/3j.png" alt="">
      </div>
      <div>
        <span>主题</span>
        <img src="img/appointment/3j.png" alt="">
      </div>
      <div>
        <span>时间</span>
        <img src="img/appointment/3j.png" alt="">
      </div>   
    </section>
    <div>
      <AppointmentCard v-for="i in 10" :key="i"></AppointmentCard>
    </div>
  </div>
</template>
<script>
import AppointmentCard from "../component/appointment/appointmentCard"
export default {
  data(){
    return {

    }
  },
  components:{AppointmentCard}
};
</script>
<style scoped>
.top_banner img {
  width: 100%;
}
header,section {
  position: relative;
  height: 3rem;
}
.logo {
  height: 1.5rem;
  margin: 0.75rem 0.75rem;
}
.biu {
  margin: 0 1.5rem;
}
header button {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    border: .05rem solid #000;
    border-radius: 1.1rem;
    font-size: 1rem;
    background: #fff;
    line-height: 2rem;
    height: 2rem;
    width: 3.8rem;
    padding: 0 .24rem;
}
section {
  border-bottom: .01rem solid #d8d8d8;
}
section>div {
  width: 33.33%;
  float: left;
  font-size: 1.2rem;
  font-weight: 700;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
}
section>div img {
  display: inline-block;
  height: 0.8rem;
  margin-left:0.25rem; 
  margin-top:0rem; 
  width: 1rem;
  transition: 0.33s all;
}
section>div:hover img {
  display: inline-block;
  height: 0.8rem;
  margin-left:0.25rem; 
  margin-top:0rem; 
  width: 1rem;
  transform: rotate(180deg)
}
</style>