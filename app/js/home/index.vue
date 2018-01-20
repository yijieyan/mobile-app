<template>
    <div>
        <NavHeader/>
        <Slider/>
        <Panel/>
    </div>
</template>

<script>
import NavHeader from "../public/header.vue"
import Slider from "./slider.vue"
import Panel from "./novice.vue"
export default {
    components: {
        NavHeader,
        Slider,
        Panel,
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
