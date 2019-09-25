<template>
    <div class="app">
        <div class="index" :class="{popShow:visibility}">
            <div class="pop">
                <router-link to="/login">
                     <p class="user-login-register">登陆/注册</p>
                </router-link>
                <van-cell-group id="user-op-group">
                    <van-cell title="首页" size="large" icon="wap-home-o"
                              is-link to="/"
                    />
                    <van-cell title="目的地" size="large" icon="location-o"/>
                    <van-cell title="行程助手" size="large" icon="todo-list-o"/>
                    <van-cell title="app" size="large" icon="desktop-o"/>
                </van-cell-group>
            </div>
            <div class="swipe-area">
                <div class="swipe">
                    <van-swipe :autoplay="3000" indicator-color="white" :height="172">
                        <van-swipe-item v-for="item in imglist">
                            <img :src="item" alt="" slot="default">
                        </van-swipe-item>
                    </van-swipe>
                </div>
                <button @click="visibility=!visibility">click</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShopIndex",
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
    }

    .swipe-area {
        width: 100%;
    }

    .swipe img {
        height: 172px;
        width: auto;
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
        height:800px;
        overflow-y: scroll;
        background-color: #2d3741;
    }

    .index .pop .user-login-register{
        line-height:48px;
        height: 48px;
        text-align:right;
        color: #ffffff;
        box-sizing:border-box;
        padding-right: 5px;
        background-color:#2d3741;
    }

    .index .pop #user-op-group .van-cell {
        background-color: #36424b;
        color: #ffffff;
        border-top: 1px solid #232d34;
    }
</style>
