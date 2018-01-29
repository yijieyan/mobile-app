<template lang="html">
    <div :class="$style.box">
        <MoneyHeader title="赚钱"/>
        <Slider/>
        <Jump/>
        <Ada/>
        <First/>
        <Adc/>
        <Adb/>
        <BountryTask/>
        <SmallVault/>
        <FinicalManager/>
        <Profile/>
        <Today/>
        <Insurance/>
        <Send/>
        <Add/>
        <Shares/>
        <Recommend/>
        <Last/>
        <div :class="$style.adTop">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t10969/219/2111852505/37566/5b2f0500/59f0034eN00b0c4a5.png?width=750&height=120">
        </div>
        <MoneyFooter :class="$style.navFooter"/>
    </div>
</template>

<script>
import MoneyHeader from "../public/moneyHeader.vue"
import MoneyFooter from "../public/moneyFooter.vue"
import Slider from "./slider.vue"
import Link from "./link.vue"
import Ada from "./ada.vue"
import Adb from "./adb.vue"
import First from "./first.vue"
import Adc from "./adc.vue"
import BountryTask from "./bountyTask.vue"
import SmallVault from "./smallVault.vue"
import FinicalManager from "./finicalManager.vue"
import Profile from "./profit.vue"
import Today from "./toDay.vue"
import Insurance from "./insurance.vue"
import Send from "./send.vue"
import Add from "./add.vue"
import Shares from "./shares.vue"
import Recommend from "./recommend.vue"
import Last from "./last.vue"
export default {
    components: {
        MoneyHeader,
        Slider,
        Jump: Link,
        Ada,
        Adb,
        First,
        Adc,
        BountryTask,
        SmallVault,
        FinicalManager,
        Profile,
        Today,
        Insurance,
        Send,
        Add,
        Shares,
        Recommend,
        Last,
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
