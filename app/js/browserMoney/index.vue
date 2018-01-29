<template lang="html">
    <div :class="$style.box">
        <MoneyHeader title="借钱"/>
        <MoneyFooter :class="$style.navFooter"/>
    </div>
</template>

<script>
import MoneyHeader from "../public/moneyHeader.vue"
import MoneyFooter from "../public/moneyFooter.vue"
export default {
    components: {
        MoneyHeader,
        MoneyFooter,
    },
}
</script>

<style lang="scss" module>
  body {
    background: #f3f5f7!important;
  }
  .box {
    position: relative;
    .adTop {
      width:640px;
      height: 12px;
      position: fixed;
      top: 88px;
      z-index: 200;
      img {
        width: 640px;
        height: 102px;
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
