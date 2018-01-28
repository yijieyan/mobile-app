<template lang="html">
    <div>
        <Panel :title="item.title" v-for="(item, index) in items" :key="index" :class="$style.title">
            <div :class="$style.content">
                <section>
                    <div :class="$style.left">
                        <h4>{{ item.top }}</h4>
                        <p>{{ item.text }}</p>
                        <div :class="$style.btn">
                            {{ item.btn }}
                        </div>
                        <label v-if="item.labelB">{{ item.labelB }}</label>
                    </div>
                    <ul :class="$style.right">
                        <li v-for="(itemA, indexA) in item.list" :key="indexA">
                            <img :src="itemA.src">
                            <p>{{ itemA.text }}</p>
                        </li>
                    </ul>
                </section>
                <img :src="item.src">
            </div>
            <label v-if="item.labelA">{{ item.labelA }}</label>
            <img :src="item.img">
        </Panel>
    </div>
</template>

<script>
import Panel from "../core/panelBak.vue"
export default {
    components: {
        Panel,
    },
    data() {
        return {
            items: [
                {
                    title: "京东众筹",
                    top: "免费抽",
                    text: "巴厘岛双人游",
                    btn: "立即抢购",
                    labelA: "好生活 享品质 >",
                    labelB: "今日推荐",
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t16153/131/1707247577/50975/a8dad869/5a5d74ffNd25310aa.jpg?width=750&height=200",
                    list: [
                        {
                            src: "//img12.360buyimg.com/jrpmobile/jfs/t9739/355/2223965438/3092/b3cc4062/59f2fef3Nc2363e64.png?width=56&height=56",
                            text: "京东出众",
                        },
                        {
                            src: "//img12.360buyimg.com/jrpmobile/jfs/t10882/187/2325566882/2968/e64c911c/59f2ff2cNd85eb522.png?width=56&height=56",
                            text: "手机优惠",
                        },
                        {
                            src: "//img12.360buyimg.com/jrpmobile/jfs/t11674/229/560588342/2307/d88f9fd7/59f2ff5eNcac8d195.png?width=56&height=56",
                            text: "领神券",
                        },
                        {
                            src: "//img12.360buyimg.com/jrpmobile/jfs/t10018/213/2260133396/2902/107476f0/59f2ff70N35c5d0bb.png?width=56&height=56",
                            text: "智能首发",
                        },
                        {
                            src: "//img12.360buyimg.com/jrpmobile/jfs/t7552/255/3352153359/2695/fc610922/59f2ff88N95232a40.png?width=56&height=56",
                            text: "舌尖美味",
                        },
                        {
                            src: "//img12.360buyimg.com/jrpmobile/jfs/t9523/348/2258037555/2792/9e8e1a80/59f2ff9fNf9648450.png?width=56&height=56",
                            text: "轻时尚",
                        },
                    ],
                },
                {
                    title: "保险保障",
                    top: "100万",
                    text: "账户安全险",
                    btn: "立即领取",
                    labelA: "",
                    labelB: "今日推荐",
                    img: "//img12.360buyimg.com/jrpmobile/jfs/t13942/330/543025328/38896/3560660e/5a0e91a9N4272ee86.jpg?width=750&height=200",
                    list: [
                        {
                            src: "//img12.360buyimg.com/jrpmobile/jfs/t8881/304/1359242815/2540/5ef07179/59b90050N62f41061.png?width=56&height=56",
                            text: "车险",
                        },
                        {
                            src: "//img12.360buyimg.com/jrpmobile/jfs/t9040/57/2313007861/3024/82c36c44/59ca556eNb605e901.png?width=56&height=56",
                            text: "人寿",
                        },
                        {
                            src: "//img12.360buyimg.com/jrpmobile/jfs/t9283/283/1383600733/3117/82a51164/59b900cfNe88db318.png?width=56&height=56",
                            text: "意外",
                        },
                        {
                            src: "//img12.360buyimg.com/jrpmobile/jfs/t8929/33/1393593833/1749/1e115bd7/59b900e6N73c7b311.png?width=56&height=56",
                            text: "财产",
                        },
                        {
                            src: "//img12.360buyimg.com/jrpmobile/jfs/t8902/275/1411242449/2807/a2cc902a/59b90111N4e88098c.png?width=56&height=56",
                            text: "健康",
                        },
                        {
                            src: "//img12.360buyimg.com/jrpmobile/jfs/t8962/170/1384497943/2594/aa2a2ad9/59b9011bNf3b01bea.png?width=56&height=56",
                            text: "旅行",
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
      text-align: left!important;
      color: #333!important;
      font-size: 36px!important;
      font-weight: 700!important;
    }
    position: relative;
    .content {
      section {
        @include flex(row);
        padding-left: 30px;
        box-sizing: border-box;
        .left {
          position: relative;
          padding-left: 30px;
          box-sizing: border-box;
          box-shadow: 0 0 0.625rem 0.03125rem rgba(101,118,155,.15);
          width: 210px;
          height: 260px;
          >h4 {
            margin-top: 62px;
            color: #1bd5c7;
            font-size: 50px;
            width: 188px;
            height: 62px;
            margin-bottom: 4px;
          }
          >p {
            width: 188px;
            height: 34px;
            color: #000;
            font-size: 24px;
            font-weight: 500;
            line-height: 34px;
            padding: 0 12px;
            box-sizing: border-box;
            margin-bottom: 24px;
          }
          .btn {
            width: 140px;
            height: 50px;
            padding: 0 12px;
            box-sizing: border-box;
            background: #1bd5c7;
            font-size: 24px;
            line-height: 50px;
            text-align: center;
            border-radius: 30px;
          }
          >label {
            position: absolute;
            top: 0;
            left: 0;
            width: 110px;
            height: 32px;
            box-sizing: border-box;
            background: #000;
            color: #fff;
            font-size: 24px;
            text-align: center;
            line-height: 32px;
          }
        }
        .right {
          width: 354px;
          height: 260px;
          @include flex(row);
          box-shadow: 0 0 0.625rem 0.03125rem rgba(101,118,155,.15);
          li {
            width: 33.3333%;
            justify-content: space-around;
            text-align: center;
            >img {
              width: 56px;
              height: 56px;
              padding: 20px 30px 0 30px;
            }
            >p {
              width: 130px;
              height: 26px;
              padding: 0 12px 0 0 ;
              box-sizing: border-box;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
              font-size: 24px;
              color: #333;
            }
          }
        }
      }
    }
    >label {
      position: absolute;
      top: 0;
      right: 45px;
      width: 200px;
      height: 116px;
      line-height: 116px;
      color: #999;
      font-size: 24px;
      font-weight: 500;
      text-align: right;
    }
    >img {
      width: 640px;
      height: 170px;
    }
  }

</style>
