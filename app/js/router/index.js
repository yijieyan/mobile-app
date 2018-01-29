import Vue from "vue"
import "../../css/reset.scss"
import Router from "vue-router"
import Home from "../home/index.vue"
import Money from "../money/index.vue"
import WhiteBar from "../whiteBar/index.vue"
import Crowd from "../crowdFunding/index.vue"
import GetMoney from "../getMoney/index.vue"
import BrowerMoney from "../browserMoney/index.vue"


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
        {
            path: "/whiteBar",
            name: "whiteBar",
            component: WhiteBar,
        },
        {
            path: "/Crowd",
            name: "crowd",
            component: Crowd,
        },
        {
            path: "/getMoney",
            name: "getMoney",
            component: GetMoney,
        },
        {
            path: "/browerMoney",
            name: "browerMoney",
            component: BrowerMoney,
        },
    ],
})
