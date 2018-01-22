<template lang="html">
    <Panel title="京东智投" :class="$style.title">
        <div :class="$style.content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t7162/219/4755741/18941/4e51a5aa/597b066dNf6c7a972.jpg?width=750&height=120"/>
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
    height: 103px;
    img {
      width: 100%;
      height: 103px;
    }
  }
</style>
