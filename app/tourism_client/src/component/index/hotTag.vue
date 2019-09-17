<template>
    <div class="hot-tag">
        <div class="title">
            <h5 class="tag-title">
                #{{title}}
            </h5>
            <span class="is-active">活动中</span>
        </div>
        <van-row>
            <van-col span="8">
                <img src="/img/card/card.png" alt="">
            </van-col>
            <van-col span="8">
                <img src="/img/card/card2.jpg" alt="">
            </van-col>
            <van-col span="8">
                <img src="/img/card/card3.png" alt="">
            </van-col>
        </van-row>

    </div>
</template>

<script>
    export default {
        name: "hotTag",
        props: {
            title: {
                type: String,
                default: '我的旅行源动力'
            },
            isActive:{
                type:Boolean,
                default:false,
            },
            imglist:{
                type:Array,
                default:[],
            }
        },
    }
</script>

<style scoped>
    .title {
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .is-active {
        display: inline-block;
        line-height: 0.5rem;
        height: 0.5rem;
        vertical-align: middle;
        font-size:0.25rem;
        padding: 0.25rem;
        border-radius: 3rem;
        background-color: #f9ea2e;
        overflow: hidden;
        text-align: center;
        color: #444444;
        margin-left:5px;
    }

    .tag-title {
        color: #000;
        font-size: 0.8rem;
        line-height: 30px;
        height: 30px;
        display: inline-block;
        vertical-align: middle;
        font-weight: 700;
    }

    img {
        height: 108px;
        width: 108px;
        border-radius: 5px;
    }
</style>
