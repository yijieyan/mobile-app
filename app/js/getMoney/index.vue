<template lang="html">
    <div>
        <MoneyHeader title="借钱"/>
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
    </div>
</template>

<script>
import MoneyHeader from "../public/moneyHeader.vue"
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
    },
}
</script>

<style lang="scss" module>
  body {
    background: #f3f5f7;
  }
</style>
