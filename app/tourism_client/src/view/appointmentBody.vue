<template>
  <div>
    <header>
      <router-link to="/appointment">
        <img src="img/appointment/left.png" alt />
      </router-link>

      <img src="img/appointment/biu.jpg" alt />
      <button>发起</button>
    </header>
    <appointmentList class="list"></appointmentList>
    <van-swipe class="imglist" @change="onChange">
      <van-swipe-item><section>
      <h1>一起去旅行</h1>
      <h6>啊速度发撒低级发飞机撒赖扩大解放蛮大附件；拉萨的法律卡萨丁就弗兰克撒娇地方卢卡斯看到了几分昂克赛拉的法兰克收到个发射点风格</h6>
    </section></van-swipe-item>
      <van-swipe-item><img src="img/appointment/ia_100000018.jpg" alt=""></van-swipe-item>
      <van-swipe-item><img src="img/appointment/ia_100000016.jpg" alt=""></van-swipe-item>
      <van-swipe-item><img src="img/appointment/ia_100000014.jpg" alt=""></van-swipe-item>
    </van-swipe>
    
    <div class="userInfo">
      <div class="userimg">
        <img src="img/appointment/user200.jpg" alt="">
      </div>
      <div class="username">
        <p class="name">雪中悍刀行</p>
        <div>
          <button>天蝎座</button> <span>12小时前在线</span>
        </div>
      </div>
      <div class="right">
        <img src="img/appointment/right.png" alt="">
      </div>
    </div>
    
  </div>
</template>
<script>
import AppointmentList from "../component/appointment/appointmentList";
export default {
  data() {
    return {};
  },
  components: { AppointmentList }
};
</script>
<style scoped>
  .imglist img {
    width: 100%;
    height: 20rem;
  }
  .list {
    position: relative;
    z-index: 99999;
    height: 3rem;
  }
  header {
    display: flex;
    justify-content:space-between;
  }
  header a img {
    width: 2rem;
    height: 2rem;
    margin: 1rem 1rem;
  }
  header button {
    height: 2rem;
    width: 4rem;
    margin: 1rem 1rem;
    border: none;
    border-radius: 2rem;
    color: white;
    background-color: red;
  }
  section {
    width: 100%;
    height: 20rem;
    background: url('/img/appointment/ia_100000020.jpg')  no-repeat center center ;
  }
  section h1,h6{
    padding: 1rem;
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.5;
  }
  section h1 {
    text-align: center;
  }
  .userInfo {
    display: flex;
    justify-content:flex-start;
  }
  .userInfo>.userimg>img{
    width: 4rem;
    height: 4rem;
  }
  .userInfo .userimg{
    width: 4rem;
    height: 4rem;
    margin: 1rem;
    border-radius: 50%;
    overflow: hidden;
  }
  .userInfo .username {
    padding-top: 1rem;
  }
  .userInfo .username .name {
    margin-bottom: 1rem;
    font-weight: 700;
  }
  .userInfo .username button {
    border-radius: 5rem;
    border: 1px solid #7232dd ;
    height: 2rem;
    padding: 0.4rem 1rem;
    background-color: #fff;
    margin-right: 1rem;
  }
  .userInfo .username span {
    font-size: 12px;
  }
  .userInfo .right {
    position: relative;
    width: 25%;
  }
  .userInfo .right img {
    width: 2rem;
    height: 2rem;
    position: absolute;
    right: 1rem;
    top: 1.8rem;
  }
</style>