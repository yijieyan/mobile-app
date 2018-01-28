<template lang="html">
    <Panel title="赏金任务" :class="$style.title">
        <div :class="$style.content">
            <swiper :options="options">
                <swiperSlide :class="$style.first">
                    <h4>礼</h4>
                    <p>新人专享豪礼</p>
                    <div>
                        <p>查看详情</p>
                        <img src="//m.jr.jd.com/spe/qyy/hzq/src/static/images/go_btn.png">
                    </div>
                </swiperSlide>
                <swiperSlide :class="$style.second">
                    <h4>100金币</h4>
                    <p>首次开通京东小金库</p>
                    <div>
                        <p>去做任务</p>
                        <img src="//m.jr.jd.com/spe/qyy/hzq/src/static/images/go_btn.png">
                    </div>
                    <label>任务</label>
                </swiperSlide>
                <swiperSlide :class="$style.third">
                    <h4>100金币</h4>
                    <p>填写您的个人信息</p>
                    <div>
                        <p>去做任务</p>
                        <img src="//m.jr.jd.com/spe/qyy/hzq/src/static/images/go_btn.png">
                    </div>
                    <label>任务</label>
                </swiperSlide>
                <swiperSlide :class="$style.four">
                    <h4>50金币</h4>
                    <p>京东金融APP下载</p>
                    <div>
                        <p>去做任务</p>
                        <img src="//m.jr.jd.com/spe/qyy/hzq/src/static/images/go_btn.png">
                    </div>
                    <label>任务</label>
                </swiperSlide>
            </swiper>
        </div>
        <label>全部任务 > </label>
    </Panel>
</template>

<script>
import {
    swiper,
    swiperSlide,
} from "vue-awesome-swiper"
import Panel from "../core/panelBak.vue"
export default {
    components: {
        Panel,
        swiper,
        swiperSlide,
    },
    data() {
        return {
            options: {
                slidesPerView: 1.5,
                spaceBetween: 30,
            },
        }
    },
}
</script>

<style lang="scss" module>
  @import '../../css/element.scss';
  .title {
    >h4 {
      font-weight: 700 !important;
      text-align: left !important;
      font-size: 36px !important;
    }
    position: relative;
    label {
      position: absolute;
      top: 0px;
      right: 30px;
      width: 150px;
      height: 112px;
      font-size: 24px;
      color: #999;
      line-height: 112px;
      text-align: center;
      font-weight: 600;
    }
  }
  .content {
    .first {
      background: url('//m.jr.jd.com/spe/qyy/hzq/src/static/images/huiyuanzhishu.png') center center no-repeat;
      background-size: cover;
      width: 210px!important;
      height: 260px;
      margin-left: 30px;
      padding-left: 18px;
      padding-top: 36px;
      box-sizing: border-box;
      >h4 {
        font-size: 80px;
        color: #fff;
        width: 80px;
        height: 88px;
      }
      >p {
        font-size: 24px;
        color: #fff;
        width: 144px;
        height: 32px;
      }
      >div {
        margin-top: 30px;
        @include flex(row);
        height: 50px;
        line-height: 50px;
        margin-left: 20px;
        >p {
          font-size: 24px;
          height: 32px;
          width: 96px;
          color: #fff;
        }
        >img {
          margin-left: 10px;
          width: 50px;
          height: 50px;
        }
      }
    }
    .second {
      background: url('//m.jr.jd.com/spe/qyy/hzq/src/static/images/woderenwu.png') center center no-repeat;
      background-size: cover;
      height: 260px;
      width: 436px!important;
      padding-left: 30px;
      position: relative;
      >h4 {
        margin-top: 60px;
        width: 416px;
        height: 60px;
        line-height: 60px;
        color: #fff;
        font-size: 42px;
      }
      >p {
        font-size: 24px;
        color: #fff;
        height: 32px;
        line-height: 32px;
      }
      >div {
        height: 50px;
        line-height: 50px;
        margin-left: 250px;
        margin-top: 30px;
        @include flex(row);
        >p {
          font-size: 24px;
          width: 96px;
          height: 32px;
          color: #fff;
        }
        >img {
          margin-left: 10px;
          width: 50px;
          height: 50px;
        }
      }
      >label {
        position: absolute;
        top: 0px;
        right: 20px;
        color: #fff;
        font-size: 24px;
        width: 100px;
        height: 46px;
        background: #ffc333;
        line-height: 46px;
        text-align: center;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }
    .third {
      background: url('//m.jr.jd.com/spe/qyy/hzq/src/static/images/woderenwu.png') center center no-repeat;
      background-size: cover;
      height: 260px;
      width: 436px!important;
      padding-left: 30px;
      position: relative;
      >h4 {
        margin-top: 60px;
        width: 416px;
        height: 60px;
        line-height: 60px;
        color: #fff;
        font-size: 42px;
      }
      >p {
        font-size: 24px;
        color: #fff;
        height: 32px;
        line-height: 32px;
      }
      >div {
        height: 50px;
        line-height: 50px;
        margin-left: 250px;
        margin-top: 30px;
        @include flex(row);
        >p {
          font-size: 24px;
          width: 96px;
          height: 32px;
          color: #fff;
        }
        >img {
          margin-left: 10px;
          width: 50px;
          height: 50px;
        }
      }
      >label {
        position: absolute;
        top: 0px;
        right: 20px;
        color: #fff;
        font-size: 24px;
        width: 100px;
        height: 46px;
        background: #ffc333;
        line-height: 46px;
        text-align: center;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }
    .four {
      background: url('//m.jr.jd.com/spe/qyy/hzq/src/static/images/woderenwu.png') center center no-repeat;
      background-size: cover;
      height: 260px;
      width: 436px!important;
      padding-left: 30px;
      position: relative;
      >h4 {
        margin-top: 60px;
        width: 416px;
        height: 60px;
        line-height: 60px;
        color: #fff;
        font-size: 42px;
      }
      >p {
        font-size: 24px;
        color: #fff;
        height: 32px;
        line-height: 32px;
      }
      >div {
        height: 50px;
        line-height: 50px;
        margin-left: 250px;
        margin-top: 30px;
        @include flex(row);
        >p {
          font-size: 24px;
          width: 96px;
          height: 32px;
          color: #fff;
        }
        >img {
          margin-left: 10px;
          width: 50px;
          height: 50px;
        }
      }
      >label {
        position: absolute;
        top: 0px;
        right: 20px;
        color: #fff;
        font-size: 24px;
        width: 100px;
        height: 46px;
        background: #ffc333;
        line-height: 46px;
        text-align: center;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
      }
    }
  }
</style>

<style lang="scss" scoped>
  swiperSlide {
    &:nth-child(1) {

    }
    &:nth-child(2) {

    }
    &:nth-child(3) {

    }
    &:nth-child(4) {

    }
  }
</style>
