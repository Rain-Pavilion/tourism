<template>
    <div class="app">
        <div class="top">
            <van-nav-bar class="nav-bar"
                         title="穷游网"
                         left-text="返回"
                         left-arrow
                         @click-left="onClickLeft"
            ></van-nav-bar>
        </div>
        <div class="login_box">
            <div class="title">
                <h1 v-if="change">注册/登陆</h1>
                <h1 v-else>账号密码登陆</h1>
            </div>
            <div v-if="change">
                <van-cell-group class="field-group">
                    <van-field left-icon="contact" v-model="phone" placeholder="请输入手机号"/>
                </van-cell-group>
                <span class="lorrTip">未注册手机号验证后自动创建</span>
            </div>
            <div v-else>
                <van-cell-group class="field-group">
                    <van-field left-icon="contact" v-model="username" label="用户名" placeholder="请输入用户名"
                    ></van-field>
                    <van-field left-icon="eye" v-model="password" type="password" label="密码" placeholder="请输入密码"
                    ></van-field>
                </van-cell-group>
            </div>
            <van-button type="primary" size="large" class="submit">下一步</van-button>
            <div class="options">
                <span style="color:rgba(0,0,0,.6);" @click="handle">账号密码登陆</span>
                <span style="color:rgba(0,0,0,.6);" @click="handleHelp">需要帮助？</span>
            </div>
            <van-popup
                    v-model="show"
                    closeable
                    position="bottom"
                    :style="{ height: '30%' }"
            >
                <van-cell-group id="select">
                    <van-cell value="常见问题"/>
                    <van-cell value="留言反馈"/>
                    <van-cell value="取消"/>
                </van-cell-group>
            </van-popup>
        </div>
    </div>
</template>

<script>
    import MyHeader from "../component/common/MyHeader";

    export default {
        name: "Login",
        components: {MyHeader},
        data() {
            return {
                phone: '',
                change: true,
                show: false,
            }
        },
        methods: {
            onClickLeft() {
                this.$router.push('/')
            },
            handle() {
                this.change = !this.change;
            },
            handleHelp() {
                this.show = !this.show;

            }
        },
    }
</script>

<style scoped>
    .top {
        padding: 0 15px;
    }

    .top .header {
        padding: 10px 0;
    }

    .fa-arrow-left {
        color: #000;
    }

    .title {
        margin-top: 50px;
        font-weight: 600;
        font-size: 2.3rem;
        margin-bottom: 45px;
    }

    .lorrTip {
        color: rgba(0, 0, 0, .3);
        font-size: 1rem;
        line-height: 1rem;
        display: -webkit-box;
        display: inline-block;
        width: 100%;
        margin-top: 12px;
        box-sizing: border-box;
        height: 1rem;
    }

    .nav-bar .van-nav-bar__text {
        color: #000000;
    }

    .nav-bar .van-icon {
        color: #000000;
    }

    .login_box {
        padding: 20px 35px;
    }

    .login_box .submit {
        margin-bottom: 10px;
        height: 50px;
        border-radius: 50px;
        margin-top: 20px;
        background-color: rgb(21, 219, 145);
    }

    .login_box .options {
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
    }

    .field-group .van-field {
        padding-left: 0;
        padding-right: 0;
    }
    #select .van-cell{
        border-bottom: 1px solid #eeeeee;
    }

    #select .van-cell .van-cell__value{
        text-align: center;
        font-size:17px;
        height: 40px;
        line-height: 40px;
    }
    #select  .van-cell:first-child span{
        color: rgb(21, 219, 145);
    }
    #select .van-cell:nth-child(2) span{
        color: rgb(21,219,145);
    }
</style>
