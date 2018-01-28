<template lang="html">
    <Panel title="过腊八" :class="$style.title">
        <div :class="$style.content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t19717/98/248709113/46095/db2dc520/5a65938bN876f645e.jpg?width=750&height=280">
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
    >img {
      width: 640px;
      height: 240px;
    }
  }
</style>
