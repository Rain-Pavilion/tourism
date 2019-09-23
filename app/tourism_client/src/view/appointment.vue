<template>
    <div>
        <div class="top_banner">
            <img src="img/appointment/banner.jpg" alt=""/>
        </div>
        <header>
            <router-link to="/">
                <img class="logo" src="img/appointment/logo.png" alt/>
            </router-link>
            <img class="biu" src="img/appointment/biu.jpg" alt/>
            <button>重置</button>
        </header>
        <section>
             <div>
                <span>地点</span>
                <img  src="img/appointment/3j.png" alt="">
            </div>
            <div @click="handleClick(index)" v-for="(se,index) in section">
                <span v-text="se.place" :class="{hover:section[index].currentIndex!==0

                }"
                ></span>
                <img :class="{ratege:se.show}" src="img/appointment/3j.png" alt="">
            </div>
        </section>
        <div class="down" :class="{show:se.show}" v-for="(se,index) in section">
            <ul @click="handleHover(index,$event)">
                <li v-for="(it,index) in se.list" :data-index="index"
                    :class="{hover:(index===se.currentIndex)}"
                >{{it}}
                </li>
            </ul>
        </div>
        <div>
            <AppointmentCard v-for="i in 10"></AppointmentCard>
        </div>
        <div v-show="true">
        </div>
    </div>
</template>
<script>
    import AppointmentCard from "../component/appointment/appointmentCard"

    export default {
        data() {
            return {
                show: true,
                section: [
                    {
                        place: '时间',
                        list: ['全部','本周末','一周内','一个月内', '十月', '十一月','十二月'],
                        show: false,
                        currentIndex: 3,
                        defaultValue:'时间'
                    },
                    {
                        place: '主题',
                        list: ['全部','一起去旅行','陪我看电影','走！去探店','过节需要仪式感','约个饭吧'],
                        show: false,
                        currentIndex: 1,
                        defaultValue:'主题'
                    }

                ],
            }
        },
        components: {AppointmentCard},
        methods: {
            handleClick(currentindex) {
                this.section.filter((item, index) => index !== currentindex).forEach(
                    (item) => item.show = false
                );
                this.section[currentindex].show = !this.section[currentindex].show;

            },
            handleHover(index,e){
                if(e.target.nodeName==='LI'){
                      let target=parseInt(e.target.dataset.index);
                      let content=e.target.innerHTML;
                      this.section[index].currentIndex=target;
                      if(content.trim()==='全部'){
                          this.section[index].place=this.section[index].defaultValue;
                          return
                      }
                      this.section[index].place=content

                }
            },
        }
    };
</script>
<style scoped>
    .top_banner img {
        width: 100%;
    }

    header, section {
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
        margin-left: 0.25rem;
        margin-top: 0rem;
        width: 1rem;
        transition: 0.33s all;
    }

    section > div img {
        display: inline-block;
        height: 0.8rem;
        margin-left: 0.25rem;
        margin-top: 0rem;
        width: 1rem;
    }

    .down {
        position: absolute;
        top: 9rem;
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

    .hover{
        color:#ff3e6a
    }

    .down ul li {
        text-align: center;
        height: 3.8rem;
        line-height: 3.8rem;
        font-size: 1.2rem;
        font-weight: 700;
    }
</style>
