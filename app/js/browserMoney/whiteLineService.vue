<template lang="html">
  <Panel title="白条服务" :class="$style.title">
    <div :class="$style.content">
      <img src="//m.jr.jd.com/vip/borrowMoney/widget/bannerAndCar/i/whiteCard.png"/>
      <div>
        <h4>77.6</h4>
        <p>小白信用</p>
        <p>立即开通</p>
      </div>
    </div>
  </Panel>
</template>

<script>
import Panel from '../core/panelBak.vue'
export default {
  components: {
    Panel
  }
}
</script>

<style lang="scss" module>
  @import '../../css/element.scss';
  .title {
    >h4 {
      &:before {
        content: ' ';
        display: inline-block;
        overflow: hidden;
        width: 5px;
        height: 30px;
        margin-right: 10px;
        background: url('//m.jr.jd.com/vip/borrowMoney/css/i/title.png') center center no-repeat;
      }
      font-size: 30px!important;
      font-weight: 500!important;
      text-align: left!important;
    }
  }
  .content {
    @include flex(row);
    padding-bottom: 40px;
    >img {
      width: 392px;
      height: 262px;
    }
    >div {
      width: 216px;
      height: 262px;
      background: url('//m.jr.jd.com/vip/borrowMoney/widget/bannerAndCar/i/whiteCircle.png') center center no-repeat;
      background-size: cover;
      position: relative;
      >h4 {
        position: absolute;
        top: 84px;
        left:70px;
        color: #fff;
        font-size: 36px;
      }
      p {
        &:nth-child(2) {
          position: absolute;
          top: 125px;
          left: 60px;
          color: #ffeac9;
          font-size: 24px;
        }
        &:nth-child(3) {
          position: absolute;
          top: 175px;
          left: 60px;
          color: #ae8339;
          font-size: 24px;
        }
      }
    }
  }
</style>
