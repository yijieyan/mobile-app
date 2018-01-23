<template lang="html">
    <Panel title="每日签到" :class="$style.title">
      <div :class="$style.content">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t3184/283/6032981290/37056/fa30c674/589bd5a2Nabdbbbd9.jpg?width=376&height=160"/>
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t3298/196/6130416421/33755/a0536d3e/589bd5d4Nf32e7adc.jpg?width=374&height=160"/>
        <span>不抢白不抢</span>
      </div>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
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
      font-weight: 700!important;
    }
  }
  .content {
    @include flex(row);
    position: relative;
    justify-content:space-around;
    padding-bottom: 60px;
    img {
      width: 50%;
      height:136px;
    }
    >span {
      position: absolute;
      top:-70px;
      right: 20px;
      color:#999;
      font-size: 28px;
    }
  }
</style>
