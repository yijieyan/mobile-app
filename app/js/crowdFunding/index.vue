<template>
    <div>
        <NavHeader/>
        <Slider/>
        <Daily/>
        <More/>
        <NavBar :class="title"/>
        <NavFotter/>
    </div>
</template>

<script>
import NavHeader from "../public/header.vue"
import NavFotter from "../public/footer.vue"
import NavBar from "../public/navBar.vue"
import Slider from "./slider.vue"
import Daily from "./daily.vue"
import More from "./more.vue"
export default {
    components: {
        NavHeader,
        NavBar,
        NavFotter,
        Slider,
        Daily,
        More,
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
