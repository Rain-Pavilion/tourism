<template>
    <div class="the-world-warp">
        <div class="lv-info">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import Mytitle from "../common/Mytitle";
    export default {
        name: "LvInfo",
        components: {Mytitle}
    }
</script>

<style scoped>
    .lv-info{
        margin:13px 13px 0 13px;
    }
</style>
