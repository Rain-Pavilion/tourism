<template>
    <div class="app">
        <van-search
                v-model="value"
                placeholder="请输入搜索关键词"
                show-action
                @cancel="onCancel"
        ></van-search>
        <div class="app-download">
            <img src="/img/bg/appDownload.png" alt="">
            <van-button type="primary" size="large" class="download">
                下载全新穷游app
            </van-button>
        </div>
        <div class='hot-tags'>
            <h4>24小时热门话题</h4>
            <div class="content">
            </div>
        </div>
    </div>
</template>

<script>
    import MyHeader from "../common/MyHeader";
    import NavBar from "./NavBar";

    export default {
        name: "Search",
        components: {NavBar, MyHeader},
        methods: {
            onCancel() {
                console.log(this.$router.push('/'))
            }
        },
    }
</script>

<style scoped>
    .app {
        padding: 0 16px;
    }

    .app .download {
        height: 48px;
        background: linear-gradient(right, #15db91, #06ccc7);
        border-radius: 24px;
        width: 20rem;
        margin: 0 auto;
        display: block;
    }

    .app .app-download img {
        display: block;
        margin: 0 auto;
    }

    .hot-tags {
        margin-top: 27px;
    }

    .hot-tags h4 {
        margin-left: 14px;
        color: rgba(0, 0, 0, .4);
        border-bottom: 1px solid rgba(0, 0, 0, .06);
        font-size: 1rem;
        position: relative;
        line-height: 26px;
        height: 26px;
    }

    .hot-tags .content {
        padding-left: 14px;
        padding-right: 14px;
    }

</style>
