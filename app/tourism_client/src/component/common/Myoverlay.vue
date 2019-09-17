<template>
    <div class="my-overlay" v-if="visibility">
        <div class="position">
            <slot></slot>
        </div>
        <slot name="other"></slot>
    </div>
</template>

<script>
    export default {
        props:{
            value:{
                type:Boolean,
                defaults:false,
            }
        },
        name: "Myoverlay",
        data() {
            return {
                visibility:this.value,
            }
        },
        watch:{
            value(newValue){
                this.visibility=newValue
            },
            visibility(newValue){
                this.$emit('input',newValue)
            }
        }
    }
</script>

<style scoped>
    .my-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, .7);
        z-index: 9999;
    }
    .my-overlay .position{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
    }
</style>
