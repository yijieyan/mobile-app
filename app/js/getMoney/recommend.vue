<template lang="html">
    <Panel title="特色推荐" :class="$style.title">
        <div :class="$style.content">
            <swiper :options="options">
                <swiperSlide v-for="(item, index) in items" :key="index">
                    <div :class="$style.bottom">
                        <img :src="item.src">
                        <div/>
                        <section>
                            <h4>{{ item.title }}</h4>
                            <p>{{ item.text }}</p>
                        </section>
                    </div>
                </swiperSlide>
            </swiper>
        </div>
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
                slidesPerView: 1,
                spaceBetween: 30,
            },
            items: [
                {
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t15385/346/1959915915/19254/e045f8dc/5a65d7b0N2ef0b6cf.jpg?width=540&height=464",
                    title: "时尚商务休闲衬衫",
                    text: "￥99限量秒杀",
                },
                {
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t16993/135/244849434/17149/668336a/5a66929fN549ebd3c.jpg?width=540&height=464",
                    title: "AIHI体感独轮平衡车",
                    text: "直降1000元",
                },
                {
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t17602/16/242717306/41298/2b7b28a9/5a6692b5Ndec9dc4a.jpg?width=540&height=464",
                    title: "汾酒新年贺岁礼品珍藏版",
                    text: "立省400元，送陶瓷酒杯",
                },
                {
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t16681/295/250007739/21929/1ec51020/5a65d806N1b1e950b.jpg?width=540&height=464",
                    title: "UTAlife声波电动牙刷",
                    text: "立省120元",
                },
                {
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t17245/261/248065187/15560/6fd037a4/5a65d81fN37359c8d.jpg?width=540&height=464",
                    title: "全面屏流媒体快装智能后视镜",
                    text: "限时6折秒",
                },
                {
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t16327/308/1850092517/40752/20d4e8e7/5a65d836Nf6da8bf0.jpg?width=540&height=464",
                    title: "新游未来游戏装备",
                    text: "直降110元",
                },
            ],
        }
    },
}
</script>

<style lang="scss" module>
  .title {
    >h4 {
      text-align: left!important;
      font-size: 36px!important;
      font-weight: 700!important;
    }
  }
  .content {
    padding-bottom: 16px;
    .bottom {
      position: relative;
      >img {
        width: 560px;
        height: 464px;
      }
      >div{
        width: 560px;
        height: 300px;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        background-image: linear-gradient(transparent,#000);
      }
      >section {
        position: absolute;
        bottom: 30px;
        left: 30px;
        >h4 {
          font-size: 32px;
          color: #fff;
          height: 46px;
        }
        >p {
          font-size: 24px;
          height: 34px;
          color: #fff;
        }
      }
    }
  }
</style>

<style lang="scss" scoped>

</style>
