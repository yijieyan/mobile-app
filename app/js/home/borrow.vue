<template lang="html">
    <Panel title="极速借贷" :class="$style.title">
        <div :class="$style.content">
            <router-link :to="{ name: 'home'}">
              <img src="//img12.360buyimg.com/jrpmobile/jfs/t12721/42/2497849749/26333/ec584be4/5a421756N2416c88f.png?width=750&height=280"/>
            </router-link>
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
      font-size: 32px;
      font-weight: 700 !important;
      color:#333;
    }
  }
  .content {
    img {
      width: 100%;
    }
  }
</style>
