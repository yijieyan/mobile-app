<template>
    <div>
        <NavHeader/>
        <Slider/>
    </div>
</template>

<script>
import NavHeader from "../public/header.vue"
import Slider from "./slider.vue"
export default {
    components: {
        NavHeader,
        Slider,
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
