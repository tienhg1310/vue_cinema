import { createRouter, createWebHistory } from "vue-router"

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("../views/HomeView.vue"),
    },
    {
        path: "/about",
        name: "About",
        component: () => import("../views/AboutView.vue"),
    },
    {
        path: "/movies",
        name: "MovieList",
        component: () => import("../views/MoviesView.vue"),
    },
    {
        path: "/movies/:id",
        name: "MovieDetail",
        component: () => import("../views/MovieDetail.vue"),
        props: true,
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () => import("../views/NotFound.vue"),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
