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
            <van-button @click="visibility=!visibility" type="primary" size="large" class="submit">下一步</van-button>
            <div class="options">
                <span style="color:rgba(0,0,0,.6);" @click="handle" v-if="change">短信登陆</span>
                <span style="color:rgba(0,0,0,.6);" @click="handle" v-else>账号密码登陆</span>
                <span style="color:rgba(0,0,0,.6);" @click="handleHelp">需要帮助？</span>
            </div>
            <van-action-sheet
                    v-model="show"
                    :actions="actions"
                    @select="onSelect"
            ></van-action-sheet>
            <myoverlay v-model="visibility">
                <div class="app-live">
                    <slide-verify :l="42"
                                  :r="10"
                                  :w="312"
                                  :h="155"
                                  @success="onSuccess"
                                  @fail="onFail"
                                  @refresh="onRefresh"
                                  slider-text="向右滑动"
                    ></slide-verify>
                    <div class="coutdown" v-text="msg">
                    </div>
                </div>
            </myoverlay>
        </div>
    </div>
</template>

<script>
    import MyHeader from "../component/common/MyHeader";
    import Myoverlay from "../component/common/Myoverlay";

    export default {
        name: "Login",
        components: {Myoverlay, MyHeader},
        data() {
            return {
                phone: '',
                change: true,
                show: false,
                visibility: false,
                actions: [
                    {name: '常见问题'},
                    {name: '留言反馈'},
                    {name: '退出'},
                ],
                msg:''

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
            },
            onSelect(item) {
                this.show = false;
            },
            onSuccess() {
                this.msg='匹配成功,5s后跳转';
                setTimeout(() => {
                    this.visibility = false;
                    this.msg=''
                }, 5000)
            },
            onFail() {
                this.msg='匹配错误,请重新匹配';
            },
            onRefresh() {
                this.msg='';
            }
        }
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

    .app-live .coutdown {
        width: 312px;
        height: 21px;
        background: #02db94;
        position: relative;
        left: 0;
        top: -58px;
        line-height:21px;
        color:#ffffff;
        text-align:center;
    }
</style>
