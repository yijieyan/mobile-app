<template lang="html">
    <Panel title="高收益  进阶理财" :class="$style.title">
        <div :class="$style.content">
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t7354/12/3331807522/33134/cb33b9d4/59e9c7d2N666fb7de.jpg?width=335&height=200"/>
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t8554/60/1493945569/14017/1291fc1c/59ba690eN9ad3ede1.png?width=335&height=200"/>
        </div>
    </Panel>
</template>

<script>
import Panel from "../core/panelBak.vue"
export default {
    components: {
        Panel,
    },
}
</script>

<style lang="scss" module>
  @import '../../css/element.scss';
  .title {
    >h4 {
      font-size: 28px!important;
      color: #333!important;
      text-align: left!important;
    }
  }
  .content {
    @include flex(row);
    justify-content: space-around;
    padding: 0 30px 40px;
    box-sizing: border-box;
    img {
      width: 50%;
      height: 170px;
      padding-right: 8px;
      box-sizing: border-box;
    }
  }

</style>
