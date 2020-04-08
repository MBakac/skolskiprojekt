import Vue from "vue"
import VueRouter from 'vue-router'

import Home from "./views/Home"
import Quiz from "./views/Quiz"
import Scoreboard from "./views/Scoreboard"

Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",
    routes: [
        {
            name: "app",
            path: "/",
            component: Home
        },
        {
            name: "quiz",
            path: "/quiz",
            component: Quiz
        },
        {
            name: "scoreboard",
            path: "/scoreboard",
            component: Scoreboard
        }
    ]
})