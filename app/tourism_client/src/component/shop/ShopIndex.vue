<template>
    <div class="app">
        <div class="index" :class="{popShow:visibility}">
            <div class="pop">
                <router-link to="/login">
                    <p class="user-login-register">登陆/注册</p>
                </router-link>
                <van-cell-group id="user-op-group">
                    <van-cell title="首页" size="large" icon="wap-home-o" is-link to="/"/>
                    <van-cell title="目的地" size="large" icon="location-o"/>
                    <van-cell title="行程助手" size="large" icon="todo-list-o"/>
                    <van-cell title="酒店" size="large" icon="records"/>
                    <van-cell title="机票" size="large" icon="desktop-o"/>
                </van-cell-group>
            </div>
            <div class="content-area">
                <div class="swipe">
                    <van-swipe :autoplay="3000" indicator-color="white" :height="172"
                    >
                        <van-swipe-item v-for="item in imglist">
                            <img :src="item" alt="" slot="default">
                        </van-swipe-item>
                    </van-swipe>
                </div>
                <div>
                    <my-nav></my-nav>
                </div>
                <div>
                    <div class="index-subcategory">
                        <ul class="index-subcategory-list">
                            <li><a href="/">
                                <img
                                        src="img/listIcon/listIcon1.jpg"
                                        width="17" height="17"><span>门票/票券</span></a></li>
                            <li><a href="/">
                                <img
                                        src="img/listIcon/listIcon2.jpg"
                                        width="17" height="17"><span>JR Pass频道</span></a></li>
                            <li><a href="/">
                                <img
                                        src="img/listIcon/listIcon3.jpg"
                                        width="17" height="17"><span>WiFi/电话卡</span></a></li>
                            <li><a href="/">
                                <img
                                        src="img/listIcon/listIcon4.jpg"
                                        width="17" height="17"><span>欧铁频道</span></a></li>
                            <li><a href="/">
                                <img
                                        src="img/listIcon/listIcon5.jpg"
                                        width="17" height="17"><span>保险频道</span></a></li>
                            <li><a href="/">
                                <img
                                        src="img/listIcon/listIcon6.jpg"
                                        width="17" height="17"><span>接送机/包车</span></a></li>
                        </ul>
                    </div>
                </div>
                <div class="list-item">
                    <h2 class="index-choiceProduct-title">精选折扣</h2>
                    <ul class="list-item-group">
                        <li>
                            <a href="/">
                                <div class="imgwrap">
                                    <img src="img/lvyou/lvyou2.jpg"
                                         width="100%" style="">
                                </div>
                                <h3>[国庆假期/五星酒店]上海直飞三亚5天4晚自由行（亚特兰蒂斯/香格里拉/红树林,四套航班+赠接送机+赠送旅拍+全程自由安排+含早餐）</h3>
                                <p class="price"><em>3899</em>元起</p>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <div class="imgwrap">
                                    <img src="img/lvyou/lvyou1.jpg"
                                         width="100%" style="">
                                </div>
                                <h3>[国庆假期/五星酒店]上海直飞三亚5天4晚自由行（亚特兰蒂斯/香格里拉/红树林,四套航班+赠接送机+赠送旅拍+全程自由安排+含早餐）</h3>
                                <p class="price"><em>3899</em>元起</p>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <div class="imgwrap">
                                    <img src="img/lvyou/lvyou3.jpg"
                                         width="100%" style="">
                                </div>
                                <h3>[国庆假期/五星酒店]上海直飞三亚5天4晚自由行（亚特兰蒂斯/香格里拉/红树林,四套航班+赠接送机+赠送旅拍+全程自由安排+含早餐）</h3>
                                <p class="price"><em>3899</em>元起</p>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <div class="imgwrap">
                                    <img src="img/lvyou/lvyou4.jpg"
                                         width="100%" style="">
                                </div>
                                <h3>[国庆假期/五星酒店]上海直飞三亚5天4晚自由行（亚特兰蒂斯/香格里拉/红树林,四套航班+赠接送机+赠送旅拍+全程自由安排+含早餐）</h3>
                                <p class="price"><em>3899</em>元起</p>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <div class="imgwrap">
                                    <img src="img/lvyou/lvyou5.jpg"
                                         width="100%" style="">
                                </div>
                                <h3>[国庆假期/五星酒店]上海直飞三亚5天4晚自由行（亚特兰蒂斯/香格里拉/红树林,四套航班+赠接送机+赠送旅拍+全程自由安排+含早餐）</h3>
                                <p class="price"><em>3899</em>元起</p>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <div class="imgwrap">
                                    <img src="img/lvyou/lvyou6.jpg"
                                         width="100%" style="">
                                </div>
                                <h3>[国庆假期/五星酒店]上海直飞三亚5天4晚自由行（亚特兰蒂斯/香格里拉/红树林,四套航班+赠接送机+赠送旅拍+全程自由安排+含早餐）</h3>
                                <p class="price"><em>3899</em>元起</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="discover-head">
                <my-header>
                    <img src="img/logo/hengxian.png" alt="" slot="left"
                         width="25" height="25" @click="visibility=!visibility"
                    >
                    <div class="search">
                        <van-icon name="search" color="white"/>
                        搜索目的地/折扣/关键字
                    </div>
                </my-header>
            </div>
        </div>
    </div>
</template>

<script>
    import MyNav from "../common/MyNav";
    import MyHeader from "../common/MyHeader";

    export default {
        name: "ShopIndex",
        components: {MyHeader, MyNav},
        data() {
            return {
                imglist: [
                    '/img/swip/swipe1.jpg',
                    '/img/swip/swipe2.jpg',
                    '/img/swip/swipe3.jpg',
                ],
                visibility: false
            }
        },
        methods: {
            handlePop() {
                this.visibility = !this.visibility;
            }
        },

    }
</script>

<style scoped>
    .app {
        width: 100%;
        position: relative;
    }

    .app .discover-head {
        position: absolute;
        left: 0;
        top: 0;
        padding: 15px;
        width: 100%;
    }

    .app .discover-head .search {
        width: 80%;
        background-color: rgba(0, 0, 0, .3);
        height: 30px;
        border-radius: 15px;
        color: #ffffff;
        line-height: 30px;
        font-size: 1rem;
    }

    .app .discover-head .search i {
        margin-left: 5px;
        font-size: 1rem;
    }

    .content-area {
        width: 100%;
    }

    .swipe {
        width: 100%;
    }


    .swipe img {
        height: 172px;
        width: 100%;
    }

    .index {
        width: 100%;
        transition: all .5s;
        display: flex;
        position: relative;
    }

    .index.popShow {
        transform: translateX(250px);
    }

    .index .pop {
        width: 250px;
        position: absolute;
        left: -250px;
        height: 800px;
        overflow-y: scroll;
        background-color: #2d3741;
    }

    .index .pop .user-login-register {
        line-height: 48px;
        height: 48px;
        text-align: right;
        color: #ffffff;
        box-sizing: border-box;
        padding-right: 5px;
        background-color: #2d3741;
    }

    .index .pop #user-op-group .van-cell {
        background-color: #36424b;
        color: #ffffff;
        border-top: 1px solid #232d34;
    }

    .index-choiceProduct-title {
        margin-bottom: 13px;
        text-align: center;
        font-size: 17px;
        font-weight: 700;
        line-height: 24px;
    }

    .list-item li {
        width: 50%;
        padding-left: 10px;
        padding-right: 10px;
        padding-bottom: 20px;
        box-sizing: border-box;
    }

    .list-item li h3 {
        overflow: hidden;
        height: 57px;
        line-height: 19px;
        margin-top: 10px;
    }

    .list-item .list-item-group {
        display: flex;
        flex-wrap: wrap;
    }

    .list-item li p {
        color: rgba(31, 32, 35, .4);
        font-size: 12px;

    }

    .list-item li em {
        color: #ff7467;
        font-size: 17px;
    }


    .index-subcategory ul {
        display: flex;
        flex-wrap: wrap;
        padding: 0 20px;
    }

    .index-subcategory ul li {
        width: 33.333%;
        margin-bottom: 10px;
        padding: 5px 0;
        font-size: 1rem;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .index-subcategory ul li img {
        vertical-align: -3px;
        margin-right: 5px;
    }
</style>
