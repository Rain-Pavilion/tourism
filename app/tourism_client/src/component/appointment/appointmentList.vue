<template>
    <div>
        <section>
            <div class="select-group">
                <span @click="handlePlace">地点</span>
                <img src="img/appointment/3j.png" alt/>
            </div>
            <div @click="handleClick(index)" v-for="(se,index) in section" :key="index+'-label'">
                <span v-text="se.place" :class="{hover:section[index].currentIndex!==0}"></span>
                <img :class="{ratege:se.show}" src="img/appointment/3j.png" alt/>
            </div>
            <div class="down" :class="{show:se.show}" v-for="(se,index) in section" :key="index+'-label'">
                <ul @click="handleHover(index,$event)">
                    <li
                            v-for="(it,index) in se.list"
                            :key="index"
                            :data-index="index"
                            :class="{hover:(index===se.currentIndex)}"
                    >{{it}}
                    </li>
                </ul>
            </div>
            <div class="pop" :class=" {
                         visible:popvisible
                      }" @click="selfClick" ref="self">
                <van-search
                        v-model="value"
                        placeholder="搜索地点"
                        show-action
                        shape="round"
                >
                    <div slot="action" @click="popvisible=!popvisible">取消</div>
                </van-search>
                <div class="wrap">
                    <p class="title">热门地点</p>
                    <div class="place-list" @click="handlePlaceContent">
                        <div class="place-item" v-for="item in placeList">
                            <img :src="item.pic" alt="">
                            <p v-text="item.title"></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                show: true,
                popvisible: false,
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
                ],
                placeList: [
                    {
                        pic: '/img/place/place1.jpg',
                        title: '日本',
                    },
                    {
                        pic: '/img/place/place2.jpg',
                        title: '美国',
                    },
                    {
                        pic: '/img/place/place3.jpg',
                        title: '泰国',
                    },
                    {
                        pic: '/img/place/place4.jpg',
                        title: '越南',
                    },
                    {
                        pic:'/img/place/place5.jpg',
                        title:'新加坡',
                    },
                    {
                        pic:'/img/place/place6.jpg',
                        title:'非洲'
                    },
                    {
                        pic:'/img/place/place7.jpg',
                        title:'南美洲',
                    },
                    {
                        pic:'/img/place/place8.jpg',
                        title:'印度',
                    },
                    {
                        pic:'/img/place/place9.jpg',
                        title:'意大利',
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
            },
            handlePlace() {
                this.popvisible = !this.popvisible;
                this.section.forEach((item) => item.show = false)
            },
            selfClick(e) {
                if (e.target === this.$refs.self ||
                    e.target.parentNode === this.$refs.self) {
                    this.popvisible = !this.popvisible;
                }

            },
            handlePlaceContent(e) {
                console.log(e.target);
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

    .select-group {
        position: relative;
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

    .pop {
        position: fixed;
        width: 100%;
        height: 800px;
        left: 0;
        top: 0;
        background: #ffffff;
        z-index: 9999;
        transform: translateY(100%);
        transition: all .5s;
    }

    .pop.visible {
        transform: translateY(0%);
    }

    .pop .wrap {
        padding: 0 12px;
    }

    .pop .title {
        text-align: left;
        font-size: 1rem;
        color: #d8d8d8;
    }

    .pop .place-list {
        display: flex;
        justify-content:flex-start;
        flex-wrap: wrap;
    }

    .pop .place-item {
        width:25%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .pop .place-item img {
        width: 4rem;
        height: 4rem;
        border-radius: 2rem;
    }

    .pop .place-item p {
        text-align: center;
    }
</style>
