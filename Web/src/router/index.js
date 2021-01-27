import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Search from "@/views/Search.vue";
import Match from "@/views/Match.vue";
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import PageNotFound from "@/views/errors/PageNotFound.vue";


const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/Discover",
        name: "Discover",
        component: Home,
    },
    {
        path: "/Search",
        name: "Search",
        component: Search,
    },
    {
        path: "/Match",
        name: "Match",
        component: Match,
    },
    {
        path: "/Login",
        name: "Login",
        component: Login,
    },
    {
        path: "/Register",
        name: "Register",
        component: Register,
    },
    {
        path: "/:catchAll(.*)",
        component: PageNotFound,
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;