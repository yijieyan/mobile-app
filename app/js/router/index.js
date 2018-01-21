import Vue from "vue"
import "../../css/reset.scss"
import Router from "vue-router"
import Home from "../home/index.vue"
import Money from "../money/index.vue"


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/money",
            name: "money",
            component: Money,
        },
    ],
})
