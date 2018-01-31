<template lang="html">
  <Panel :class="$style.title" title="精品活动">
    <ul :class="$style.content">
      <li>
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t17491/35/182980713/34671/3097bfa7/5a61a8e6Nc34a7939.png?width=376&height=264"/>
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t14653/159/1840910093/27778/53ebfb91/5a5c5cc9N28e0dc96.png?width=376&height=264"/>
      </li>
      <li>
        <img src="//img12.360buyimg.com/jrpmobile/jfs/t16675/365/91110617/54621/c0042c09/5a5c87faNd161d42e.png?width=730&height=264"/>
      </li>
    </ul>
  </Panel>
</template/>

<script>
import Panel from "../core/panelBak.vue"
export default {
    components: {
        Panel,
    },
}
</script>

<style lang="scss" module>
  @import "../../css/element.scss";
  .title {
    >h4 {
      font-size: 32px!important;
      font-weight: 700;
      color: #333;
      text-align: left!important;
    }
  }
  .content {
    li {
      &:nth-child(1) {
        @include flex(row);
        >img {
          width: 320px;
          height: 224px;
        }
      }
      &:nth-child(2) {
        >img {
          width: 640px;
          height: 230px;
        }
      }
    }
  }
</style>
