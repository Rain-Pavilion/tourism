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
    @keyframes bounceInUp {
        from,
        60%,
        75%,
        90%,
        to {
            -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
            animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
        }

        from {
            opacity: 0;
            -webkit-transform: translate3d(0, 3000px, 0);
            transform: translate3d(0, 3000px, 0);
        }

        60% {
            opacity: 1;
            -webkit-transform: translate3d(0, -20px, 0);
            transform: translate3d(0, -20px, 0);
        }

        75% {
            -webkit-transform: translate3d(0, 10px, 0);
            transform: translate3d(0, 10px, 0);
        }

        90% {
            -webkit-transform: translate3d(0, -5px, 0);
            transform: translate3d(0, -5px, 0);
        }

        to {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    .move-enter-active, .move-leave-active {
        transition: all .5s;
    }

    .move-leave, .move-leave-to {
        transform: translateX(-100%);
    }

    .move-enter, .move-enter-to {
        transform: translateX(-100%);
    }
</style>
