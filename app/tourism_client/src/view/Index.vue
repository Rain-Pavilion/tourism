<template>
    <div class="app">
        <transition name="move">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import Mytitle from "../component/common/Mytitle";
    export default {
        data() {
            return {}
        },
        methods: {},
        name: "Index",
        components: {Mytitle}
    }
</script>

<style scoped>
    .move-enter-active,.move-leave-active{
        transition: all .5s;
    }
    .move-leave, .move-leave-to {
       transform: translateX(-100%);
    }
    .move-enter, .move-enter-to{
       transform: translateX(-100%);
    }
</style>
