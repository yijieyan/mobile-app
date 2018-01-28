<template lang="html">
    <Panel title="年货节" :class="$style.title">
      <div :class="$style.content">
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t17221/139/306935872/42119/21fd3ca3/5a697daaN3a181b58.png?width=750&height=200">
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
    padding-top: 20px;
    padding-bottom: 40px;
    img {
      width: 100%;
      height: 170px;
    }
  }
</style>
