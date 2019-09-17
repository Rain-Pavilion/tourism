<template>
    <div class="my-title">
        <span v-text="title" class='title'>
        </span>
        <router-link :to="href" class="icon" v-show="warning">
            <span class="fa fa-warning"></span>
            <span class="icon-warnning" v-text="warning">
            </span>
            <span class="fa fa-arrow-right"></span>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "Mytitle",
        props: {
            title: {
                type: String,
                default: '这是标题'
            },
            warning:{
                type:String,
                default:''
            },
            href:{
                type:String,
                default:'/'
            },
        },
    }
</script>

<style scoped>
    .my-title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 15px;
        padding-left: 15px;
    }

    .my-title .title {
        color: #000;
        font-weight: 700;
        font-size: 1.3rem;
    }

    .my-title .icon {
        background: #02db94;
        border-radius: 20px;
        height: 23px;
        line-height: 23px;
        text-align: center;
        color: #fff;
        font-size: 11px;
        display: flex;
        align-items:center;
        justify-content: space-between;
        margin-right:16px;
    }
    .my-title .fa-warning{
        margin-left:10px;
        font-weight:bold;
    }
    .my-title .fa-arrow-right{
        margin-right:10px;
    }
</style>
