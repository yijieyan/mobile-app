<template lang="html">
    <Panel title="股票" :class="$style.title" >
        <ul :class="$style.content">
            <li>
                <div :class="$style.left">
                  <img src="//img30.360buyimg.com/jr_image/jfs/t5848/216/253631918/136369/1894b4a7/591e5567Ncfb35e99.jpg"/>
                  <p>牛人</p>
                </div>
                <div :class="$style.right">
                  <h4>242.77<em>%</em></h4>
                  <p>累计收益排行榜</p>
                  <div>
                    <p>zangyn</p>
                    <img src="//m.jr.jd.com/spe/qyy/hzq/src/static/images/go_btn.png"/>
                  </div>
                </div>
            </li>
            <li>
                <h4>竞猜大盘涨跌</h4>
                <p>瓜分百万京豆</p>
                <div>
                  <p>抢京豆</p>
                  <img src="//m.jr.jd.com/spe/qyy/hzq/src/static/images/go_btn.png"/>
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
}
</script>

<style lang="scss" module>
  @import '../../css/element.scss';
  .title {
    >h4 {
      font-size: 36px!important;
      font-weight: 700!important;
      text-align: left!important;
    }
  }
  .content {
    @include flex(row);
    justify-content: space-around;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 56px;
    box-sizing: border-box;
    margin-bottom: 20px;
    li {
      width: calc(50% - 20px);
      height: 200px;
      padding-left: 20px;
      box-sizing: border-box;
      &:nth-child(1) {
        background: url('//img12.360buyimg.com/jrpmobile/jfs/t8767/137/977390432/7475/e5acd251/59ba3a31Ncbd06cac.jpg?width=335&height=200') center center no-repeat;
        background-size: cover;
        padding-left: 10px;
        padding-top: 30px;
        box-sizing: border-box;
        @include flex(row);
        .left {
          width: 100px;
          height: 170px;
          >img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
          }
          >p {
            float:right;
            margin-top: 20px;
            width: 60px;
            height: 30px;
            background: linear-gradient(-90deg,#fd5737,#ec3038);
            color: #fff;
            font-size: 24px;
            text-align: center;
            line-height: 30px;
          }
        }
        .right {
          width: 160px;
          height: 170px;
          margin-left: 10px;
          >h4 {
            font-size: 36px;
            color: #fff;
            font-weight: 500;
            height: 42px;
            >em {
              font-size: 24px;
            }
          }
          >p {
            line-height:30px;
            color: #fff;
            font-size: 24px;
          }
          >div {
            @include flex(row);
            >p {
              font-size: 24px;
              color: #fff;
              text-align: left;
              height: 30px;
              line-height: 30px;
            }
            >img {
              margin-left: 20px;
              margin-top: -10px;
              width: 50px;
              height: 50px;
            }
          }
        }
      }
      &:nth-child(2) {
        background: url('//img12.360buyimg.com/jrpmobile/jfs/t11269/332/1992230119/69852/66dd072f/5a0d7befN038daedb.png?width=335&height=200') center center no-repeat;
        background-size: cover;
        padding-left: 20px;
        padding-top: 30px;
        box-sizing: border-box;
        position: relative;
        >h4 {
          font-size: 36px;
          color: #fff;
          width: 216px;
          height: 52px;
        }
        >p {
          font-size: 24px;
          color: #fff;
          width: 144px;
          height: 34px;
        }
        >div {
          @include flex(row);
          position: absolute;
          right: 40px;
          margin-top: 5px;
          >p {
            font-size: 24px;
            color: #fff;
            height: 50px;
            line-height: 50px;
          }
          >img {
            margin-left: 10px;
            width: 50px;
            height: 50px;
          }
        }
      }
    }
  }
</style>
