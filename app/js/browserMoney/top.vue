<template lang="html">
  <Panel title="京东会员" :class="$style.title">
    <div :class="$style.content">
      <p>最高可借</p>
      <h4><em>￥</em>300,000</h4>
      <div>申请开通</div>
    </div>
  </Panel>
</template>

<script>
import Panel from '../core/panel.vue'
export default {
  components: {
    Panel
  }
}
</script>

<style lang="scss" module>
  .title {
    >h4 {
      display: none;
    }
    margin-top: 0px!important;
    background-color: rgba(255,255,255,0)!important;
  }

  .content {
    width: 586px;
    height: 346px;
    margin: 0 26px 0 26px;
    margin-top: 46px;
    background: url('//m.jr.jd.com/vip/borrowMoney/widget/jdGold/i/goldCard.png') center center no-repeat;
    background-size: cover;
    padding-top: 62px;
    padding-left: 60px;
    box-sizing: border-box;
    >p {
      width: 112px;
      height: 28px;
      color: #fff;
      font-size: 28px;
    }
    >h4 {
      text-align: left;
      >em {
        font-size: 52px;
        color: #fff;
      }
      width: 266px;
      height: 74px;
      color: #fff;
      font-size: 74px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
    >div{
      background: url('//m.jr.jd.com/vip/borrowMoney/widget/jdGold/i/btnBj.png') center center no-repeat;
      background-size: 100% auto;
      width: 181px;
      height: 58px;
      font-size: 24px;
      color: #fff;
      text-align: center;
      line-height: 58px;
    }
  }
</style>
