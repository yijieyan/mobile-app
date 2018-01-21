<template>
    <div>
        <NavHeader/>
        <Slider/>
        <Aba/>
        <Seleted/>
        <Adb/>
        <NavBar/>
        <NavFotter/>
    </div>
</template>

<script>
import NavHeader from "../public/header.vue"
import NavFotter from "../public/footer.vue"
import NavBar from "../public/navBar.vue"
import Slider from "./slider.vue"
import Aba from "./ada.vue"
import Seleted from "./selected.vue"
import Adb from "./adb.vue"
export default {
    components: {
        NavHeader,
        Slider,
        NavBar,
        NavFotter,
        Aba,
        Seleted,
        Adb,
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
