<template lang="html">
    <Panel title="羽绒服" :class="$style.title">
        <div :class="$style.content">
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t15505/11/1956759483/40940/b7e85add/5a69b1b5N8652358b.jpg?width=750&height=280">
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
    img {
      width: 640px;
      height: 200px;
    }
  }
</style>
