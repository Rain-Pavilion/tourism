<template>
    <nav class="nav-bar">
        <ul class="nav-bar-group">
            <li class="nav-bar-item">
                <a href="">
                    <i class="item-icon">
                        <img src="/img/icon/ia_100000038.jpg" alt="">
                    </i>
                    <span>行程助手</span>
                </a>
            </li>
            <li class="nav-bar-item">
                <a href="">
                    <i class="item-icon">
                        <img src="/img/icon/ia_100000039.jpg" alt="">
                    </i>
                    <span>行程助手</span>
                </a>
            </li>
            <li class="nav-bar-item">
                <a href="">
                    <i class="item-icon">
                        <img src="/img/icon/ia_100000040.jpg" alt="">
                    </i>
                    <span>行程助手</span>
                </a>
            </li>
            <li class="nav-bar-item">
                <a href="">
                    <i class="item-icon">
                        <img src="/img/icon/ia_100000041.jpg" alt="">
                    </i>
                    <span>行程助手</span>
                </a>
            </li>
            <li class="nav-bar-item">
                <a href="">
                    <i class="item-icon">
                        <img src="/img/icon/ia_100000042.jpg" alt="">
                    </i>
                    <span>行程助手</span>
                </a>
            </li>
            <li class="nav-bar-item">
                <a href="">
                    <i class="item-icon">
                        <img src="/img/icon/ia_100000043.jpg" alt="">
                    </i>
                    <span>行程助手</span>
                </a>
            </li>
            <li class="nav-bar-item">
                <a href="">
                    <i class="item-icon">
                        <img src="/img/icon/ia_100000044.jpg" alt="">
                    </i>
                    <span>行程助手</span>
                </a>
            </li>
            <li class="nav-bar-item">
                <a href="">
                    <i class="item-icon">
                        <img src="/img/icon/ia_100000045.jpg" alt="">
                    </i>
                    <span>行程助手</span>
                </a>
            </li>
            <li class="nav-bar-item">
                <a href="">
                    <i class="item-icon">
                        <img src="/img/icon/ia_100000046.jpg" alt="">
                    </i>
                    <span>行程助手</span>
                </a>
            </li>
            <li class="nav-bar-item">
                <a href="">
                    <i class="item-icon">
                        <img src="/img/icon/ia_100000047.jpg" alt="">
                    </i>
                    <span>行程助手</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
    .nav-bar-group {
        display: flex;
        flex-wrap: wrap;
    }

    .nav-bar-item {
        flex: 0 0 20%;
        box-sizing: border-box;
        padding: 5px;
        width: 20%;
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
        margin-top: -7px;
        text-align: center;
        color: rgba(0, 0, 0, .8);
        font-weight: 500;
        line-height: 24px;
    }

    .item-icon img {
        width: 100%;
    }

</style>
