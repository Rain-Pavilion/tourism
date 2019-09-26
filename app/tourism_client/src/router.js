import Vue from 'vue'
import Router from 'vue-router'
import Index from "./view/Index";
import Show from "./component/index/Show";
import Search from "./component/index/Search";
import Login from "./view/Login";
import Appointment from "./view/appointment";
import AppointmentBody from "./view/appointmentBody";
import Shop from "./view/Shop";
import ShopIndex from "./component/shop/ShopIndex";
import ShopUser from "./component/shop/ShopUser";
import ShopLocation from "./component/shop/ShopLocation";
import Chat from './component/appointment/chat';


Vue.use(Router);

export default new Router({
    routes: [{
            path: '/',
            component: Index,
            children: [{
                    path: 'search',
                    component: Search,
                },
                {
                    path: '',
                    component: Show,
                }
            ]
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/appointment',
            component: Appointment,
        },
        {
            path: '/appointmentBody',
            component: AppointmentBody,
        },
        {
            path: '/shop',
            component: Shop,
            children: [{
                    path: 'index',
                    component: ShopIndex,
                },
                {
                    path: 'user',
                    component: ShopUser,
                },
                {
                    path: 'location',
                    component: ShopLocation,
                }
            ]
        },
        {
            path: '/chat',
            component: Chat,
        }
    ]
})