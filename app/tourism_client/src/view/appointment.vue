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
        <span @click="isSelected(0)">主题</span>
        <img :class="poticratege" src="img/appointment/3j.png" alt="">
      </div>
      <div>
        <span @click="isSelected(1)">时间</span>
        <img :class="timeratege" src="img/appointment/3j.png"  alt="">
      </div>   
    </section>
    <div class="down" :class="isshow">
      <ul>
        <li>全部</li>
        <li v-for="(item,i) in list" :key="i">{{item}}</li>
      </ul>
    </div>
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
      selected:false,
      istime:false,
      isshow:{show:false},
      poticratege:{ratege:false},
      timeratege:{ratege:false},
      lists:[["一起去旅行","陪我看电影","走！去探店","过节需要仪式感","约个饭吧","看展才是正经事","其它活动","约你去看剧"],["本周末","一周内","一个月内","十月","十一月","十二月","十二月之后"]],
      list:[]
    }
  },
  components:{AppointmentCard},
  methods:{
    isSelected(i){
      this.list = this.lists[i];
      this.selected = !this.selected;
      this.isshow.show = this.selected;
      if(i==0){this.poticratege.ratege= this.selected;}
      else{this.timeratege.ratege= this.selected}
      console.log(this.selected)
    }
  }
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
  position: relative;
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
section>div img {
  display: inline-block;
  height: 0.8rem;
  margin-left:0.25rem; 
  margin-top:0rem; 
  width: 1rem;
}
.down {
  position: absolute;
  top: 9rem;
  width: 100%;
  height: 0;
  overflow: scroll;
  transition: all 0.33s;
  background-color: rgba(256,256,256,0.92);
}
.show {
  height: 26.8rem;
}
.ratege {
  transform: rotate(180deg);
}
.down ul li {
  text-align: center;
  height: 3.8rem;
  line-height: 3.8rem;
  font-size: 1.2rem;
  font-weight: 700;
}
</style>