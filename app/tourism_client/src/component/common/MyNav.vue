<template>
    <nav class="nav-bar">
        <ul class="nav-bar-group">
            <li class="nav-bar-item" v-for="item in imglist">
                <a href="">
                    <i class="item-icon">
                        <img :src="item" alt="">
                    </i>
                    <span>自由行</span>
                </a>
            </li>
        </ul>
    </nav>
</template>


<script>
    export default {
        name: "MyNav",
        data() {
            return {
                imglist:[
                    'img/shop/shop1.jpg',
                    "img/shop/shop2.png",
                    "img/shop/shop3.jpg",
                    "img/shop/shop4.jpg",
                    "img/shop/shop5.jpg",
                    "img/shop/shop6.jpg",
                    "img/shop/shop7.jpg",
                    "img/shop/shop8.jpg",
                ]
            }
        },
    }
</script>

<style scoped>
    .nav-bar{
        margin-top: 5px;
    }
    .nav-bar-group {
        display: flex;
        flex-wrap: wrap;
    }

    .nav-bar-item {
        box-sizing: border-box;
        padding:10px 20px;
        width: 25%;
    }

    .nav-bar-item a {
        display: block;
        position: relative;
    }

    .nav-bar-item .item-icon {
        display: block;
        width: 100%;
    }

    .nav-bar-item span {
        display: block;
        width: 100%;
        font-size: 12px;
        margin-top: 7px;
        text-align: center;
        color: rgba(0, 0, 0, .8);
        font-weight: 800;
        line-height: 24px;
    }

    .item-icon img {
        width: 100%;
    }

</style>
