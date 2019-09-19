<template>
    <div class="app">
        <my-header class="header">
            <router-link slot="left" to="/">
                <img class="logo" src="/img/logo/logo.png" alt="">
            </router-link>
            <div class="search" @click="search">
                <i class="fa fa-search"></i>
                搜索目的地,游记攻略等
            </div>
            <router-link to="/login" slot="right">
                <img class="avator" src="/img/avator/avator.png" alt="">
            </router-link>
        </my-header>
        <a href="" class="big_content">
            <img src="/img/bg/guangao.jpg" alt="">
        </a>
        <nav-bar></nav-bar>
        <div class="the-world-warp">
            <mytitle title="精选攻略"
                     warning="出境游安全提示"
            ></mytitle>
        </div>
        <lv-info>
        </lv-info>
    </div>
</template>

<script>
    import NavBar from "./NavBar";
    import MyHeader from "../common/MyHeader";
    import Mytitle from "../common/Mytitle";
    import LvInfo from "./LvInfo";
    import LvInfoItme from "./LvInfoItme";

    export default {
        data() {
            return {}
        },
        methods: {
            search() {
                this.$router.push('/search')
            }
        },
        name: "Show",
        components: {LvInfoItme, LvInfo, Mytitle, MyHeader, NavBar}
    }
</script>

<style scoped>
    .app .header {
        padding: 7px 15px;
    }

    .app .logo {
        width: 63px;
        height: 20px;
    }

    .app .avator {
        width: 28px;
        height: 28px;
    }

    .app .search {
        height: 30px;
        background: #f0f0f0;
        margin-right: 10px;
        margin-left: 10px;
        padding: 0 18px;
        flex: 1;
        border-radius: 15px;
        line-height: 30px;
        font-size: 14px;
        color: #444444;
    }

    .app .big_content {
        display: block;
    }

    .app .big_content img {
        width: 100%;
    }

    .app .index-choiceProduct-list {
        padding: 0 15px;
    }
</style>
