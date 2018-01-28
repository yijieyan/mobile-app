<template lang="html">
    <Panel title="小金库" :class="$style.title">
        <div :class="$style.content">
          <div :class="$style.left">
            <h4>4.5200<em>%</em> </h4>
            <p>七日年化收益</p>
            <p>支付/缴费/优质理财/大额理财</p>
          </div>
          <div :class="$style.right">
            开启送礼包
          </div>
        </div>
        <label>更多理财 ></label>
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
    position: relative;
    >h4 {
      font-size: 36px!important;
      font-weight: 700;
      color: black;
      text-align: left;
    }
    label {
      position: absolute;
      width: 144px;
      height: 116px;
      line-height: 116px;
      top: 0;
      right: 30px;
      font-size: 24px;
      color: #999;
    }
  }
  .content {
    background: url('//m.jr.jd.com/spe/qyy/hzq/445b538c873a5bffc189ad117298eec4.png') center center no-repeat;
    background-size: cover;
    width: 552px;
    height: 200px;
    padding-left: 20px;
    box-sizing: border-box;
    margin: 0 44px;
    @include flex(row);
    .left {
      width: 200px;
      height: 200px;
      >h4 {
        width: 280px;
        height: 72px;
        color: #fff;
        font-size: 60px;
        margin-top: 24px;
        >em {
          font-size: 24px;
          color: #fff;
        }
      }
      >p {
        &:nth-child(2) {
          color:#fff;
          font-size: 24px;
          margin: 8px 0 30px 0px;
        }
        &:nth-child(3){
          width: 552px;
          height: 34px;
          color: #fff;
          font-size: 24px;
        }
      }
    }
    .right {
      background: url('//m.jr.jd.com/spe/qyy/hzq/ac3595803ef2dfd8530f13be01cbdead.png') center center no-repeat;
      background-size: cover;
      width: 332px;
      height: 200px;
      line-height: 200px;
      text-align: center;
      font-size: 24px;
      color: #fff;
    }
  }
</style>
