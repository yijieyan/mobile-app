<template lang="html">
    <div :class="$style.box">
        <MoneyHeader title="借钱"/>
        <div :class="$style.body">
            <section :class="$style.top">
                <Top/>
                <Select/>
            </section>
            <Ada/>
            <BusAndMoney/>
            <WhiteLineService/>
            <Last/>
        </div>
        <MoneyFooter :class="$style.navFooter"/>
    </div>
</template>

<script>
import MoneyHeader from "../public/moneyHeader.vue"
import MoneyFooter from "../public/moneyFooter.vue"
import Top from "./top.vue"
import Select from "./select.vue"
import Ada from "./ada.vue"
import BusAndMoney from "./busAndMoney.vue"
import WhiteLineService from "./whiteLineService.vue"
import Last from "./last.vue"
export default {
    components: {
        MoneyHeader,
        MoneyFooter,
        Top,
        Select,
        Ada,
        BusAndMoney,
        Last,
        WhiteLineService,
    },
}
</script>

<style lang="scss" module>
  body {
    background: #f3f5f7!important;

  }
  .box {
    position: relative;
    .body {
      >section {
        width: 640px;
        height: 1100px;
        margin-top: 88px;
        background: url('//m.jr.jd.com/vip/borrowMoney/css/i/bj.png') center center no-repeat;
        background-size: cover;
      }
      margin-bottom: 120px;
      .top {
        // position: absolute;
      }
    }
    .navFooter {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
</style>
