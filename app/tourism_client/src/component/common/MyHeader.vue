<template>
    <header>
        <div class="left">
            <slot name="left">
            </slot>
        </div>
        <slot></slot>
        <div class="right">
            <slot name="right">
            </slot>
        </div>
    </header>
</template>

<script>
    export default {
        name: "MyHeader"
    }
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
