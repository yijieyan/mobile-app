<template lang="html">
    <Panel title="轮播图广告" :cname="$style.slider">
        <Slider :swiper-slides="items">
            12
        </Slider>
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
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t17506/148/398180357/49979/2f65c21e/5a6f15eeN2ecd995b.png?width=690&height=154",
                    url: "home",
                },
                {
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t19510/177/360645487/18343/b3c1fb27/5a6f160cN3fc40a9d.png?width=690&height=154",
                    url: "home",
                },
                {
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t19768/314/372994427/61862/6b5187ef/5a6f165aNd43f7a1e.png?width=690&height=154",
                    url: "home",
                },
                {
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t19693/363/346752302/33344/27d8340b/5a6f16aeNea083de0.png?width=690&height=154",
                    url: "home",
                },
                {
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t17530/1/380112657/14455/ed098b39/5a6f16bcN411d178a.png?width=690&height=154",
                    url: "home",
                },
            ],
        }
    },
}
</script>

<style lang="scss" module>
  .slider {
    >h4 {
      display: none;
    }

    img {
      margin-top: 50px;
      width: 100%;
      height: 120px;
    }
  }
</style>
