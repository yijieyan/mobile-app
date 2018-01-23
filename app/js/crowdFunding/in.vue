<template lang="html">
    <Panel title="In货推荐" :class="$style.title">
        <div :class="$style.content">
            <div :class="$style.item" v-for="(item, index) in items" :key="index">
                <img :src="item.src">
                <ul>
                    <li v-for="(iteml, indexl) in item.list" :key="indexl">
                        <img :src="iteml.src">
                        <h4>{{ iteml.title }}</h4>
                        <p>
                            {{ iteml.price }}
                        </p>
                        <section v-if="iteml.progress" :class="$style.progress">
                            <div :class="$style.outer">
                                <div :class="$style.inner" :style="{width:iteml.progress +'%'}"/>
                            </div>
                            <p>{{ iteml.progress }}%</p>
                        </section>
                        <section v-else :class="$style.noProgress">
                            {{ iteml.text }}
                        </section>
                        <label v-if="iteml.label">{{ iteml.label }}</label>
                    </li>
                </ul>
            </div>
        </div>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
export default {
    components: {
        Panel,
    },
    data() {
        return {
            items: [
                {
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t3406/210/2247820735/50952/86016eea/5846d8e7N20446dbd.png?width=750&height=200",
                    list: [
                        {
                            src: "//img30.360buyimg.com/cf/s250x250_jfs/t16150/165/674827881/130789/7de1f069/5a3a04b0N4e3d246c.jpg",
                            title: "骨传导耳机",
                            price: "19.00",
                            progress: "382",
                            label: "精选",
                        },
                        {
                            src: "//img30.360buyimg.com/cf/s250x250_jfs/t15514/150/953212838/145464/850c2d0f/5a448bc7Nade1a7c5.jpg",
                            title: "未来游戏装备",
                            price: "159.00",
                            progress: "≥999",
                            label: "",
                        },
                    ],
                },
                {
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t3739/82/2244582797/54399/746c7d79/5846a953N66b67d05.png?width=750&height=200",
                    list: [
                        {
                            src: "//img30.360buyimg.com/cf/s250x250_jfs/t14881/283/656508232/143980/9b606acf/5a33a171N18c9c80a.jpg",
                            title: "蓝牙音箱",
                            price: "29.00",
                            progress: "",
                            label: "",
                            text: "众筹结束",
                        },
                        {
                            src: "//img30.360buyimg.com/cf/s250x250_jfs/t14767/339/1285461444/50279/8ee27acb/5a4c3a82N3cff563e.jpg",
                            title: "全球漫游WiFi卡",
                            price: "65.00",
                            progress: "290",
                            label: "",
                        },
                    ],
                },
                {
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t3214/113/4408032436/61548/ce316eef/5846d310Ne93f00c9.png?width=750&height=200",
                    list: [
                        {
                            src: "//img30.360buyimg.com/cf/s250x250_jfs/t8245/192/196081959/46158/74227a9a/59a26d4bNddd40149.jpg",
                            title: "遵义虾子土豆片",
                            price: "1.00",
                            progress: "0",
                            label: "",
                        },
                        {
                            src: "//img30.360buyimg.com/cf/s250x250_jfs/t10993/26/1955036662/116896/13538743/59ec19ecN5efa5c7d.jpg",
                            title: "新疆黄杏干",
                            price: "35.00",
                            progress: "0",
                            label: "",
                        },
                    ],
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
      font-weight: 700!important;
    }
  }
  .content {
    @include flex;
    overflow: hidden;
    .item {
      @include flex;
      >img {
        width: 100%;
        height: 171px;
      }
      >ul {
        @include flex(row);
        li {
          position: relative;
          width: calc(50% - 20px);
          padding: 0px 0px 0px 55px;
          margin-left: 20px;
          margin-bottom: 20px;
          box-sizing: border-box;
          background: rgba(0, 0, 0, 0.02);
          img {
            margin: 44px 55px 20px 0px;
            width: 180px;
            height: 180px;
          }
          h4 {
            height: 40px;
            line-height: 40px;
            margin-left: 24px;
            color:#444;
            font-size: 28px;
            font-weight: 700;
          }
          >p{
            &:before {
              content: '￥';
              display: inline-block;
              font-size: 28px;
              height: 24px;
              line-height: 24px;
              margin-left: 24px;
            }
            font-size: 36px;
            font-weight: 700;
            color: #FF3232;
            &:after {
              content: '起';
              display: inline-block;
              color: #999;
              font-size: 24px;
            }
          }
          .progress {
            margin-top: 16px;
            margin-left: -20px;
            @include flex(row);
            .outer {
              width: 144px;
              height: 10px;
              background-color: rgb(246, 230, 230);
              margin-top: 12px;
              margin-right: 20px;
              .inner {
                max-width: 100%;
                height: 10px;
                background-image: linear-gradient(270deg,#F55 1%,#FF9C31 100%);
              }
            }
            p {
              color: #999;
              font-size: 24px;
              font-weight: 700;
              height: 34px;
              line-height: 34px;
              width: 66px;
            }
          }
          .noProgress {
            color: #999;
            font-size: 24px;
            width: 290px;
            height: 48px;
            line-height: 48px;
            text-align: center;
            background: #EDEDED;
            margin-left: -48px;
            margin-top: 16px;
          }
          label {
            position: absolute;
            display: block;
            width: 48px;
            height: 34px;
            line-height: 34px;
            text-align: center;
            background-image: linear-gradient(-35deg,#C1C1C1 0,#ACACAC 100%);
            color: #ff0000;
            font-size: 20px;
            padding: 4px 8px;
            left: 0;
            top: 0;
          }
        }
      }
    }
  }
</style>
