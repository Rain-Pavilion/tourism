<template>
    <div>
        <div class="top_banner">
            <img src="img/appointment/banner.jpg" alt=""/>
        </div>
        <header>
            <router-link to="/">
                <img class="logo" src="img/appointment/logo.png" alt/>
            </router-link>
            <img class="biu" src="img/appointment/biu.jpg" alt/>
            <button>重置</button>
        </header>
        <AppointmentList></AppointmentList>
        <div>
            <AppointmentCard v-for="i in 10" :key="i"></AppointmentCard>
        </div>
        <router-link to="" id="post">发布Biu伴</router-link>
    </div>
</template>
<script>
    import AppointmentCard from "../component/appointment/appointmentCard"
    import AppointmentList from "../component/appointment/appointmentList"

    export default {
        data() {
            return {}
        },
        components: {AppointmentCard,AppointmentList},
        
    };
</script>
<style scoped>
    .top_banner img {
        width: 100%;
    }

    header, section {
        position: relative;
        height: 3rem;
    }

    .logo {
        height: 1.5rem;
        margin: 0.75rem 0.75rem;
    }

    .biu {
        margin: 0 1.5rem;
    }

    header button {
        position: absolute;
        top: 0.5rem;
        right: 1rem;
        border: .05rem solid #000;
        border-radius: 1.1rem;
        font-size: 1rem;
        background: #fff;
        line-height: 2rem;
        height: 2rem;
        width: 3.8rem;
        padding: 0 .24rem;
    }

    #post {
        position:fixed;
        box-sizing: content-box;
        width: 10rem;
        bottom: 2rem;
        color: white;
        right: 50%;
        transform: translateX(5rem);
        height: 3rem;
        line-height: 3rem;
        text-align: center;
        border-radius: 2rem;
        background-color: #ff00a3;
    }
</style>
