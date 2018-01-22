<template>
    <div>
        <NavHeader/>
        <Slider/>
        <Welfare/>
        <Service/>
        <NavBar/>
        <NavFotter/>
    </div>
</template>

<script>
import NavHeader from "../public/header.vue"
import NavFotter from "../public/footer.vue"
import NavBar from "../public/navBar.vue"
import Slider from "./slider.vue"
import Welfare from "./welfare.vue"
import Service from "./service.vue"
export default {
    components: {
        NavHeader,
        Slider,
        NavBar,
        NavFotter,
        Welfare,
        Service,
    },
    data() {
        return {
            title: "title",
        }
    },
}
</script>

<style lang="scss">
@import '../../css/reset.scss';
  .title {
    li {
      &:nth-child(1) {
        display: none !important; //此处必须加!important
      }
    }
  }
</style>
