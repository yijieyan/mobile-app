<template lang="html">
    <Pnael title="公司信息" :class="[$style.title, cname]">
        <ul :class="$style.content">
            <li>
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t2842/350/3035567089/14791/5f6ff93d/577cf395N31e76288.png?width=1125&height=252">
            </li>
            <li>
                <div class="">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t2971/333/1297567079/898/f2d2e00d/577dc28dNe5138337.png?width=108&height=108" >
                    <p>客户端</p>
                </div>
                <div class="">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t2824/256/2966087355/831/188bfa25/577cf3dcN18aadbf2.png?width=108&height=108" >
                    <p>触屏版</p>
                </div>
                <div class="">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t2920/282/1283157010/1040/23f1430b/577cf3e5N53f740b8.png?width=108&height=108" >
                    <p>电脑版</p>
                </div>
            </li>
            <li>Copyright © 2004-2017 京东JD.com 版权所有</li>
            <li>投资有风险，购买需谨慎</li>
            <li>京东金融平台服务协议</li>
            <li>京东金融隐私政策</li>
        </ul>
    </Pnael>
</template>

<script>
import Pnael from "../core/panel.vue"
export default {
    components: {
        Pnael,
    },
    props: {
        cname: {
            type: String,
            default: "",
        },
    },
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.title {
    >h4 {
        display: none;
    }
    .content {
      background: #F5F5F5;
      margin-bottom: 100px;
      li {
        @include flex();
        &:nth-child(1) {
            width: 100%;
            img {
              width: 100%;
              height: 143px;
            }
        }
        &:nth-child(2) {
          @include flex(row);
          div {
            width: 33.33333%;
            text-align: center;
            padding-top: 40px;
            padding-bottom: 40px;
            box-sizing: border-box;
            img {
              width: 90px;
              height: 90px;
            }
            p {
              font-size: 26px;
              color: #666;
              margin-top: 12px;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
          }
        }
        &:nth-child(n+3) {
          padding-top: 24px;
          padding-bottom: 24px;
          box-sizing: border-box;
          font-size: 24px;
          color:#999;
          text-align: center;
          height: 86px;
          line-height: 38px;
          border-top: 1px solid #ddd;
        }
      }
    }
}
</style>
