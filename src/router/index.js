import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import DataBinding from '../views/DataBindingHtml.vue';
import NestedComponent from '../views/NestedComponent.vue';
import KaKao from '../views/KaKaoLogin.vue';
import Naver from '../views/NaverLogin.vue';
import Google from '../views/GoogleLogin.vue';
// import AboutView from '../views/AboutView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
        // component: AboutView
    },
    {
        path: '/googlelogin',
        name: 'GoogleLoginComponent',
        component: Google
    },
    {
        path: '/naverlogin/',
        name: 'NaverLoginComponent',
        component: Naver
    },
    {
        path: '/kakaologin',
        name: 'KakaoLoginCompnent',
        component: KaKao
    },
    {
        path: '/detail',
        name: 'DetailComponent',
        component: NestedComponent
    },
    {
        path: '/databinding',
        name: 'DataBinding',
        component: DataBinding
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
