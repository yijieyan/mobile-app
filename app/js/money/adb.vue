<template lang="html">
    <Panel title="理财精选" :class="$style.title">
        <div :class="$style.content">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t10876/23/2566835181/40527/d7d27c08/59f97d68Ne53fda5b.png?width=1080&height=240"/>
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
    .content {
      img {
        width: 100%;
        height:142px;
      }
    }
  }
</style>
