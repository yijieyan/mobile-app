<template lang="html">
    <Panel title="白条轮播图" :class="$style.title">
        <div :class="$style.content">
            <Slider :swiper-slides="items" :class="$style.slider"/>
        </div>
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
                    url: "home",
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t8437/321/1758527686/40952/f66d552f/59bf1f41N50d846f9.jpg?width=750&height=320",
                },
                {
                    url: "home",
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t8491/303/504628479/60643/100648de/59a94358N92475fca.jpg?width=750&height=320",
                },
            ],
            cname: "slider",
        }
    },
}
</script>

<style lang="scss" module>
  .title {
    >h4 {
      display: none;
    }
    margin-top: 100px !important;
  }
  .content {
    .slider {
      a {
        width: 100%;
        img {
          width: 100%;
        }
      }

    }
  }
</style>
