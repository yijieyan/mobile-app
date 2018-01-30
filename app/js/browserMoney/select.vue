<template lang="html">
    <Panel title="精选借钱" :class="$style.title">
        <ul :class="$style.content">
            <li v-for="(item, index) in items" :key="index">
                <div :class="$style.left">
                    <div>
                        <img :src="item.img">
                        <p>{{ item.titleA }}</p>
                    </div>
                    <p>{{ item.desc }}</p>
                    <div>
                        <p>{{ item.itemA }}</p>
                        <p>{{ item.itemB }}</p>
                    </div>
                </div>
                <div :class="$style.right">
                    <h4>{{ item.titleB }}</h4>
                    <p><em>￥</em>{{ item.price }}</p>
                    <div>
                        {{ item.text }}
                    </div>
                </div>
            </li>
        </ul>
    </Panel>
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
                    img: "//img14.360buyimg.com/wympay/jfs/t4432/281/1121056017/1106/387432b4/58d8ac62Ndcb8f5df.png",
                    titleA: "招联-好期贷",
                    desc: "超低利率，极速到账",
                    itemA: "无抵押",
                    itemB: "极速到账",
                    titleB: "最高可借",
                    price: "20,000",
                    text: "立即借钱",
                },
                {
                    img: "//img12.360buyimg.com/wympay/jfs/t4879/37/2168466813/1990/d6ab57fa/58f9d4fdN6818ddbd.png",
                    titleA: "南京银行-诚易贷",
                    desc: "超低利率，极速到账",
                    itemA: "银行",
                    itemB: "高额度",
                    titleB: "最高可借",
                    price: "30,000",
                    text: "立即借钱",
                },
                {
                    img: "//img13.360buyimg.com/wympay/jfs/t7690/309/485273594/3718/118760bc/5993d66fNcbaf2771.png",
                    titleA: "马上金融-来钱花",
                    desc: "超低利率，极速到账",
                    itemA: "消费金融",
                    itemB: "极速到账",
                    titleB: "最高可借",
                    price: "50,000",
                    text: "立即借钱",
                },
            ],
        }
    },
}
</script>

<style lang="scss" module>
  @import '../../css/element.scss';
  .title {
    background: rgba(255, 255, 255, 0)!important;
    >h4 {
      height: 100px!important;
      font-size: 30px!important;
      font-weight: 500!important;
      text-align: left!important;
      color: #333!important;
      &:before {
        content: ' ';
        display: inline-block;
        margin-right: 20px;
        overflow: hidden;
        width:5px;
        height: 31px;
        background: url('//m.jr.jd.com/vip/borrowMoney/css/i/title.png') center center no-repeat;
      }
    }
  }

  .content {
    li {
      @include flex(row);
      width: 586px;
      height: 184px;
      padding: 0px 27px 17px 27px;
      .left {
        width: 364px;
        height: 184px;
        padding: 40px 17px 0 52px;
        box-sizing: border-box;
        background: #fff;
        div {
          &:nth-child(1) {
            @include flex(row);
            >img {
              margin-left: -40px;
              margin-right: 12px;
              width: 28px;
              height: 28px;
              border-radius: 50%;
            }
            >p {
              font-size: 25px;
              color: #333;
              font-weight: 500;
            }
          }
          &:nth-child(3) {
            @include flex(row);
            width: 294px;
            height: 26px;
            margin-top: 12px;
            p {
              margin-top: 12px;
              &:nth-child(1) {
                width: 100px;
                height: 26px;
                border: 1px solid #d2ab66;
                color: #d2ab66;
                font-size: 24px;
                text-align: center;
                line-height: 1.2;
                border-radius: 13px;
                margin-right: 8px;
              }
              &:nth-child(2) {
                width: 100px;
                height: 26px;
                border: 1px solid #d2ab66;
                color: #d2ab66;
                font-size: 24px;
                text-align: center;
                line-height:1.2;
                border-radius: 13px;
              }
            }
          }
        }
        >p {
          width: 294px;
          height: 26px;
          margin-top:15px;
          color: #999;
          font-size: 24px;
        }
        border-right: 1px dashed
         #ccc;
      }
      .right {
        background: #fff;
        width: 220px;
        height: 182px;
        >h4 {
          height: 24px;
          margin-top: 38px;
          font-size: 24px;
          color: #999;
          text-align: center;
        }
        >p {
          height: 40px;
          font-size: 40px;
          color: #d2ab66;
          text-align: center;
          margin-top: 12px;
        }
        >div {
          width: 130px;
          height: 42px;
          font-size: 24px;
          color: #fff;
          text-align: center;
          margin-left: 45px;
          line-height: 42px;
          border-radius: 21px;
          margin-top: 13px;
          background-image: linear-gradient(to right,#e3c289,#cba360);
        }
      }
    }
  }
</style>
