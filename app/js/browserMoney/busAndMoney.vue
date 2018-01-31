<template lang="html">
    <Panel title="有车有钱" :class="$style.title">
        <section :class="$style.content">
            <div :class="$style.top">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t17947/277/185297451/31775/3f8603b4/5a61aa84N9ff7b93b.png?width=375&height=233">
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t14215/140/1757206721/24186/81b4e53c/5a56c877Nee6cfc4d.jpg?width=375&height=233">
            </div>
            <div :class="$style.bottom">
                <swiper :options="options" :not-next-tick="options.notNextTick">
                    <swiper-slide v-for="(lists, index) in items" :key="index" :class="$style.slider">
                        <div v-for="(item, indexA) in lists" :key="indexA" :class="$style.item">
                            <img :src="item.src">
                            <p>{{ item.text }}</p>
                        </div>
                    </swiper-slide>
                    <div class="swiper-pagination" slot="pagination" v-if="options.pagination"/>
                </swiper>
            </div>
        </section>
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
                notNextTick: false,
                pagination: {
                    el: ".swiper-pagination", // 最下面的指示器(分页器)
                },
            },
            items: [
                [
                    {
                        src: "//img12.360buyimg.com/jrpmobile/jfs/t12799/50/704102454/5247/19eac80a/5a4f2622Nc4aca701.png?width=90&height=90",
                        text: "旅游",
                    },
                    {
                        src: "//img12.360buyimg.com/jrpmobile/jfs/t16033/196/1306232362/4705/4c678227/5a4f265bN66ef5ae8.png?width=90&height=90",
                        text: "医美",
                    },
                    {
                        src: "//img12.360buyimg.com/jrpmobile/jfs/t13051/63/2559290659/4702/e4068917/5a4f2693N937f1905.png?width=88&height=88",
                        text: "房抵贷",
                    },
                    {
                        src: "//img12.360buyimg.com/jrpmobile/jfs/t15133/16/1440686097/5786/1b038e03/5a4f26bfN03ed1f66.png?width=90&height=90",
                        text: "驾校",
                    },
                    {
                        src: "//img12.360buyimg.com/jrpmobile/jfs/t14896/125/1435676873/3668/a8b392f7/5a4f26edN6cdfda66.png?width=88&height=88",
                        text: "分期用",
                    },
                ],
                [
                    {
                        src: "//img12.360buyimg.com/jrpmobile/jfs/t16183/231/1309653281/4671/3ace8435/5a4f27d0N9e3df1d5.png?width=90&height=90",
                        text: "教育",
                    },
                    {
                        src: "//img12.360buyimg.com/jrpmobile/jfs/t15955/206/1280935063/4274/6204375a/5a4f2801N015920c5.png?width=90&height=90",
                        text: "车险",
                    },
                    {
                        src: "//img12.360buyimg.com/jrpmobile/jfs/t15451/2/1424737894/3801/e7844c76/5a4f2823Ne430c735.png?width=88&height=88",
                        text: "家装",
                    },
                    {
                        src: "//img12.360buyimg.com/jrpmobile/jfs/t15922/204/1330308267/4745/e0cae4a0/5a4f2836Nd00354cb.png?width=90&height=90",
                        text: "租房",
                    },
                ],
            ],
        }
    },
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.title {
    padding-left: 16px;
    padding-right: 16px;
    box-sizing: border-box;
    &:before {
        content: ' ';
        display: inline-block;
        width: 5px;
        height: 30px;
        float: left;
        margin-top: 41px;
        background: url("//m.jr.jd.com/vip/borrowMoney/css/i/title.png") center center no-repeat;
    }
    > h4 {
        padding-left: 15px!important;
        text-align: left!important;
        font-size: 30px!important;
        font-weight: 500!important;
    }
}
.content {
    .top {
        padding-bottom: 50px;
        @include flex(row);
        img {
            width: 304px;
            height: 200px;
        }
    }
    .bottom {
      .slider {
          @include flex(row);
          flex-wrap: nowrap!important;
          padding-left: 26px;
          padding-right: 26px;
          width: 100%;
          padding-bottom: 40px;
          box-sizing: border-box;
          .item {
              width: 119px!important;
              height: 140px;
              > img {
                  width: 77px;
                  height: 77px;
                  border-radius: 50%;
              }
              > p {
                  width: 118px;
                  height: 24px;
                  font-size: 24px;
                  color: #333;
                  margin-top: 17px;
              }
          }
      }
    }
}
</style>
