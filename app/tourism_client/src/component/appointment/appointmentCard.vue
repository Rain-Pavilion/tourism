<template>
  <div :style="`background-image: url(${this.bgurl[Math.floor(Math.random()*8)]} )`" class="card">
    <table></table>
    <div class="title">
      <h3>过节需要仪式感</h3>
    </div>
    <div :style="`background-image: url(${this.userimg[Math.floor(Math.random()*3)]} )`" class="myimg">
    </div>
    <div class="text">
      <h2>北京</h2>
      <h6>9月20日-10月13日</h6>
      <h6>今天七月份刚去了美西，计划十一去美东，华盛顿，纽约，波士顿等，一个爱健身旅游的小今天七月份刚去了美西，计划十一去美东，华盛顿，纽约，波士顿等，一个爱健身旅游的小</h6>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      bgurl:[
        "/img/appointment/bg1.jpg",
        "/img/appointment/ia_100000002.jpg",
        "/img/appointment/ia_100000006.jpg",
        "/img/appointment/ia_100000010.jpg",
        "/img/appointment/ia_100000014.jpg",
        "/img/appointment/ia_100000016.jpg",
        "/img/appointment/ia_100000018.jpg",
        "/img/appointment/ia_100000020.jpg"
        ],
        userimg:[
          "/img/appointment/user200.jpg",
          "/img/appointment/user201.jpg",
          "/img/appointment/user202.jpg",
        ]
    }
  }
}
</script>
<style scoped>
.card {
  width: 48%;
  height: 15rem;
  float: left;
  border-radius: 0.5rem;
  margin: 0.5rem .2rem;
  background-size: 100%;
}
.card .title h3 {
  width: 50%;
  margin: 0.8rem auto;
  height: 1rem;
  text-align: center;
  border-radius: 1rem;
  background-color: #fff;
  padding: 0.3rem 1rem;
  font-size: 0.5rem;
  font-weight: 700;
  color: #000;
}
.myimg {
  width: 3rem;
  height: 3rem;
  border-radius:50%; 
  margin:0 auto;
  background-size: 100%;
  background-repeat: no-repeat;
}
.text {
  height: 7.9rem;
  padding:0 0.5rem;
  color: #fff;
  overflow: hidden;
}
.text h6 {
  font-size: 12px;
  margin-bottom: 0.5rem;
  text-align: center;
  line-height: 0.9rem;
}
.text h2 {
  font-size: 18px;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
}
</style>