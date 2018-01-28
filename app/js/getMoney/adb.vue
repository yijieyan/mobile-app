<template lang="html">
    <Panel title="支付大礼" :class="$style.title">
        <div :class="$style.content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t9799/266/1810669512/19559/34bdcf8/59e81a59Nf5a858a9.png?width=750&height=240" >
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
  .title {
    >h4 {
      display: none;
    }
  }
  .content {
    background-color: #eee;
    img {
      width:640px;
      height: 204px;
    }
  }
</style>
