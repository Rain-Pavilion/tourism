<template>
  <div>
    <section>
      <div>
        <span>地点</span>
        <img src="img/appointment/3j.png" alt />
      </div>
      <div @click="handleClick(index)" v-for="(se,index) in section" :key="index+'-label'">
        <span v-text="se.place" :class="{hover:section[index].currentIndex!==0}"></span>
        <img :class="{ratege:se.show}" src="img/appointment/3j.png" alt />
      </div>
      <div class="down" :class="{show:se.show}" v-for="(se,index) in section" :key="index+'-label'">
      <ul @click="handleHover(index,$event)">
        <li
          v-for="(it,index) in se.list"
          :key="index"
          :data-index="index"
          :class="{hover:(index===se.currentIndex)}"
        >{{it}}</li>
      </ul>
    </div>
    </section>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: true,
      section: [
        {
          place: "主题",
          list: [
            "全部",
            "一起去旅行",
            "陪我看电影",
            "走！去探店",
            "过节需要仪式感",
            "约个饭吧",
            "看展才是正经事",
            "其它活动",
            "约你去看剧"
          ],
          show: false,
          currentIndex: 0,
          defaultValue: "主题"
        },
        {
          place: "时间",
          list: [
            "全部",
            "本周末",
            "一周内",
            "一个月内",
            "十月",
            "十一月",
            "十二月",
            "十二月之后"
          ],
          show: false,
          currentIndex: 0,
          defaultValue: "时间"
        }
      ]
    };
  },
  methods: {
    handleClick(currentindex) {
      this.section
        .filter((item, index) => index !== currentindex)
        .forEach(item => (item.show = false));
      this.section[currentindex].show = !this.section[currentindex].show;
    },
    handleHover(index, e) {
      if (e.target.nodeName === "LI") {
        let target = parseInt(e.target.dataset.index);
        let content = e.target.innerHTML;
        this.section[index].currentIndex = target;
        if (content.trim() === "全部") {
          this.section[index].place = this.section[index].defaultValue;
          return;
        }
        this.section[index].place = content;
      }
    }
  }
};
</script>
<style scoped>
section {
  border-bottom: 0.01rem solid #d8d8d8;
  position: relative;
}

section > div {
  width: 33.33%;
  float: left;
  font-size: 1.2rem;
  font-weight: 700;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
}

section > div img {
  display: inline-block;
  height: 0.8rem;
  vertical-align: 1.2rem;
  margin-left: 0.25rem;
  margin-top: 0rem;
  width: 1rem;
  transition: 0.33s all;
}
section > div span {
  width: 6rem;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow: hidden;
}

.down {
  position: absolute;
  top: 3rem;
  width: 100%;
  height: 0;
  overflow: scroll;
  transition: all 0.5s;
  background-color: rgba(256, 256, 256, 0.92);
}

.show {
  height: 26.8rem;
}

.ratege {
  transform: rotate(180deg);
}

.hover {
  color: #ff3e6a;
}

.down ul li {
  text-align: center;
  height: 3.8rem;
  line-height: 3.8rem;
  font-size: 1.2rem;
  font-weight: 700;
}
</style>