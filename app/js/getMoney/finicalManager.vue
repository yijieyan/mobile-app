<template lang="html">
    <Panel title="稳定灵活 定期理财" :class="$style.title">
        <div :class="$style.content">
            <swiper :options="options">
                <swiperSlide v-for="(item, index) in items" :key="index" :class="$style.item">
                    <h4 :class="$style.top">{{ item.title }}</h4>
                    <p :class="$style.logo">{{ item.logo }}</p>
                    <p :class="$style.rate">
                        {{ item.rate }}<em>%</em>
                    </p>
                    <p :class="$style.text">
                        {{ item.text }}
                    </p>
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
                slidesPerView: 2.8,
                spaceBetween: 20,
            },
            items: [
                {
                    title: "定期理财",
                    logo: "金融专享",
                    rate: "5.80",
                    text: "历史年化投资回报率",
                },
                {
                    title: "小白理财",
                    logo: "理财首选",
                    rate: "4.77",
                    text: "7日年化收益率",
                },
                {
                    title: "优质理财",
                    logo: "限时限量",
                    rate: "4.79",
                    text: "近7日年化收益率",
                },
                {
                    title: "活期理财",
                    logo: "天天赚钱",
                    rate: "4.56",
                    text: "近7日年化收益率",
                },
            ],
        }
    },
}
</script>

<style lang="scss" module>
  .title {
    >h4 {
      font-size: 28px!important;
      color: #333!important;
      text-align: left!important;
      font-weight: 600!important;
    }
  }
  .content {
    padding-bottom: 30px;
    .item {
      width: 150px;
      height: 260px;
      padding: 0 30px 0 30px;
      margin:0 16px 0 30px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      box-sizing: border-box;
      box-shadow: 0 0 0.625rem 0.03125rem rgba(101,118,155,.15);
      .top {
        color: #333;
        font-size: 32px;
        margin-top: 38px;
        margin-bottom: 10px;
        width: 150px;
        height: 46px;
        line-height: 46px;
        font-size: 32px;
      }
      .logo {
        background-image: linear-gradient(#5e8fff,#2f6fff);
        color: #fff;
        font-size: 24px;
        width: 100px;
        height: 32px;
        line-height: 32px;
        border-radius: 22px;
      }
      .rate {
        font-size: 50px;
        color: #ff281e;
        width: 150px;
        height: 60px;
        line-height: 60px;
        font-weight: 600;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        >em {
          font-size: 36px;
        }
      }
      .text {
        font-size: 24px;
        color: #999;
        width: 150px;
        margin-top: 8px;
      }
    }
  }
</style>
