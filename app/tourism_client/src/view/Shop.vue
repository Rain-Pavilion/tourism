<template>
    <div class="shop">
        <keep-alive>
            <router-view>
            </router-view>
        </keep-alive>
        <van-tabbar
                v-model="active"
                active-color="#07c160"
                inactive-color="#000"
        >
            <van-tabbar-item icon="home-o" size="20" to="/shop/index">首页</van-tabbar-item>
            <van-tabbar-item icon="location" size="20" to="/shop/location">目的地</van-tabbar-item>
            <van-tabbar-item icon="friends" size="20" to="/shop/user">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: "Shop",
        data() {
            return {
                active: 0,
            }
        },
    }
</script>

<style scoped>

</style>
