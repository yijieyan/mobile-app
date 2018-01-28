<template lang="html">
    <Panel title="轮播图" :class="$style.title" :swiper-option="options">
        <div :class="$style.content">
            <Slider :swiper-slides="items" :cname="$style.slider"/>
            <div :class="$style.adTop">
              <img src="//img12.360buyimg.com/jrpmobile/jfs/t10969/219/2111852505/37566/5b2f0500/59f0034eN00b0c4a5.png?width=750&height=120"/>
            </div>
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
            options: {
                loop: false,
            },
            items: [
                {
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t19186/313/250986186/49801/7f01a7b3/5a672ba1N71505096.jpg?width=750&height=400",
                    url: "home",
                },
                {
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t17365/78/280859204/42896/3486e7e/5a672cbeNf37a18ff.jpg?width=750&height=400",
                    url: "home",
                },
                {
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t16447/321/1707026440/46722/e4fcfccc/5a672cdeNb910e9ed.jpg?width=750&height=400",
                    url: "home",
                },
                {
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t17812/165/273319577/41575/2307faf/5a672cfdNf32613b1.jpg?width=750&height=400",
                    url: "home",
                },
            ],
        }
    },
}
</script>

<style lang="scss" module>
  @import '../../css/element.scss';
  .title {
    >h4 {
      display: none;
    }
    margin-top: 88px!important;
  }
  .content {
    position: relative;
    .slider {
      img {
        width: 100%;
      }
    }
    .adTop {
      width:640px;
      height: 12px;
      position: absolute;
      top: 0;
      z-index: 100;
      img {
        width: 640px;
        height: 102px;
      }
    }
  }
</style>
