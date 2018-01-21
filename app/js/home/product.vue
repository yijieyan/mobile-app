<template lang="html">
    <Panel title="新品推荐" :class="$style.title">
        <div :class="$style.content">
            <div :class="$style.right">
                更多尖货>
            </div>
            <Swiper :swiper-option="options" :swiper-slides="items" :cname="slider"/>
        </div>
    </Panel>
</template>
<script>
import Panel from "../core/panel.vue"
import Swiper from "../core/slider.vue"
export default {
    components: {
        Panel,
        Swiper,
    },
    data() {
        return {
            options: {
                slidesPerView: 2.3,
                spaceBetween: 30,
                freeMode: true,
            },
            items: [
                {
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t14641/180/1638965003/42812/2f4a85a1/5a54aadbN5269a1f1.jpg?width=335&height=421",
                    url: "home",
                },
                {
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t14584/14/1620812582/49401/2a98f763/5a54aaeeNde89f852.jpg?width=335&height=421",
                    url: "home",
                },
                {
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t15670/84/1493061629/40102/9f58843d/5a54aaecNecedcefd.jpg?width=335&height=421",
                    url: "home",
                },
                {
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t15175/239/1652258993/41684/2827c8e3/5a54ab0fN0c596f31.jpg?width=335&height=421",
                    url: "home",
                },
            ],
            slider: "slider",
        }
    },
}
</script>

<style lang="scss" module>
  .title {
    >h4 {
      font-size: 32px;
      color:#333;
      font-weight: 700 !important;
    }
  }
  .content {
    position: relative;
    .right {
      position: absolute;
      color:#999;
      font-size:28px;
      right: 20px;
      top: -70px;
    }
  }
</style>

<style lang="scss">
  .slider {
    box-sizing: border-box;
    padding: 0 32px;
    .swiper-wrapper {
      .swiper-slide {
        width:350px;
        a {
          display: inline-block;
          width: 100%;
          img {
            width: 100%;
            display: block;
            height: 314px;
            border: 1px solid #FAFAFA;
          }
        }
      }
    }
  }
</style>
