<template lang="html">
    <Panel :class="$style.title" title="轮播图">
        <Slider :swiper-slides="items" :class="$style.content"/>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
import Slider from "../core/slider.vue"
export default {
    components: {
        Panel,
        Slider,
    },
    data() {
        return {
            items: [
                {
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t11149/181/856008463/68797/dc303e9/59f97baeN3cdae084.jpg?width=750&height=400",
                    url: "home",
                },
                {
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t10405/120/2592801005/36022/d8f57852/59f97c14Nfb960073.png?width=750&height=400",
                    url: "home",
                }, {
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t9994/205/2575467053/189117/125e7b05/59f97c36N7599be57.png?width=750&height=400",
                    url: "home",
                },
            ],
        }
    },
}
</script>

<style lang="scss" module>
  .title {
    >h4 {
      display: none;
    }
    .content {
      margin-top: 100px;
      img {
        width: 100%;
      }
    }
  }
</style>
