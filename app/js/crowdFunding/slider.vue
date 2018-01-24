<template lang="html">
    <Panel title="今日头条" :class="$style.title">
        <div :class="$style.content">
            <swiper :options="options" >
                <SwiperSlide :class="$style.item">
                    <span>签到领流量，1元500M！</span>
                    <img src="//m.jr.jd.com/spe/qyy/main/images/icon_arrow_gray.png">
                </SwiperSlide>
                <SwiperSlide :class="$style.item">
                    <span>百万白条券免费送，速来领取！！</span>
                    <img src="//m.jr.jd.com/spe/qyy/main/images/icon_arrow_gray.png">
                </SwiperSlide>
            </swiper>
        </div>
    </Panel>
</template>

<script>
import { swiper, swiperSlide } from "vue-awesome-swiper"
import Panel from "../core/panel.vue"
export default {
    components: {
        Panel,
        Swiper: swiper,
        SwiperSlide: swiperSlide,
    },
    data() {
        return {
            options: {
                autoplay: true,
                loop: true,
                direction: "vertical",
            },
        }
    },
}
</script>

<style lang="scss" scoped>
  @import '~swiper/dist/css/swiper.css';
  .swiper-container {
    height:72px;
  }

</style>
<style lang="scss" module>
  @import '../../css/element.scss';
  // .swiper-container {
  //   height:72px!important;
  // }

  .title {
    >h4 {
      display: none;
    }
    margin-top: 120px!important;
  }
  .content {
    @include flex(row);
    height: 72px;
    line-height: 72px;
    padding-left: 178px;
    box-sizing: border-box;
    background: url(//m.jr.jd.com/spe/qyy/main/images/scroll_title_img.png) left center no-repeat;
    background-size: 178px 100%;
    .item {
      span {
        font-size: 28px;
        color:#333;
      }
      img {
        margin-top: 25px;
        width: 16px;
        height: 28px;
        float: right;
      }
    }
  }
</style>
