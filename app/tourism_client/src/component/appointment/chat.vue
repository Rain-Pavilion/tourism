<template>
  <div>
    <header>
      <router-link to="/appointment">
        <img src="img/appointment/left.png" alt />
      </router-link>
      <span>俞灏明</span>
    </header>
    <section>
      <p class="warn">
      <van-icon name="warning-o" />此Biu伴非穷游官方发起，穷游仅提供信息展示，不代表认可其真实性和安全性。请仔细甄别，谨防广告、诈骗、谨慎向陌生人转账汇款、保护个人隐私及财产安全。
      </p>
    </section>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  header {
    height: 10%;
    display: flex;
    border-bottom: 1px solid #ddd;
    box-shadow:0px 2px 5px #888888;
  }
  header span {
    display: inline-block;
    height: 1rem;
    margin:1rem 1rem;
   }
   header img {
     margin: .5rem .5rem;
   }
   section .warn {
     padding: 1rem 1rem;
     font-size: 14px;
     font-weight: normal;
   }
</style>