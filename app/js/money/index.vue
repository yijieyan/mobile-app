<template>
    <div>
        <NavHeader/>
        <Slider/>
        <Aba/>
        <Seleted/>
        <Adb/>
        <Money/>
        <Adc/>
        <NavBar :class="title"/>
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
import Money from "./money.vue"
import Adc from "./adc.vue"
export default {
    components: {
        NavHeader,
        Slider,
        NavBar,
        NavFotter,
        Aba,
        Seleted,
        Adb,
        Money,
        Adc,
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
