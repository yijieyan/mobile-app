<template>
    <div>
        <NavHeader/>
        <Slider/>
        <Novice/>
        <Borrow/>
        <Money/>
        <Product/>
        <Life/>
        <NavBar/>
        <NavFooter/>
    </div>
</template>

<script>
import NavHeader from "../public/header.vue"
import NavFooter from "../public/footer.vue"
import NavBar from "../public/navBar.vue"
import Slider from "./slider.vue"
import Novice from "./novice.vue"
import Borrow from "./borrow.vue"
import Money from "./money.vue"
import Product from "./product.vue"
import Life from "./life.vue"

export default {
    components: {
        NavHeader,
        Slider,
        Novice,
        Borrow,
        Money,
        Product,
        Life,
        NavBar,
        NavFooter,
    },
    data() {
        return {

        }
    },
}
</script>

<style lang="scss" module>
@import '../../css/reset.scss';
.home {
    color: red;
    font-size: 80px;
}
</style>
