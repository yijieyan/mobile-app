<template lang="html">
    <div :class="$style.title">
      <div :class="$style.left">
      </div>
      <h4>{{title}}</h4>
      <div :class="$style.right">
      </div>
    </div>
</template>

<script>
import Panel from "../core/panel.vue"
export default {
    components: {
        Panel,
    },
    props: {
        title: {
            type: String,
            default: "",
        },
    },
}
</script>

<style lang="scss" module>
  @import '../../css/element.scss';
  .title {
    @include flex(row);
    height: 88px;
    line-height: 88px;
    width: 100%;
    box-sizing: border-box;
    border-bottom: 1px solid #bfbfbf;
    text-align: center;
    justify-content: space-between;
    position: fixed;
    z-index: 200;
    left: 0;
    right: 0;
    top: 0;
    background: #fff;
    .left {
      background-image: url('//st.360buyimg.com/common/commonH_B/images/2015/jd-sprites.png?v=12');
      background-repeat: no-repeat;
      background-position: -50px 25px;
      margin-left: 20px;
      width: 30px;
      height: 80px;
    }
    h4 {
      font-size: 32px;
      color: #252525;
    }
    .right {
      margin-right: 20px;
      background-image: url('//st.360buyimg.com/common/commonH_B/images/2015/jd-sprites.png?v=12');
      background-repeat: no-repeat;
      background-position: -120px 25px;
      width: 40px;
      height: 88px;
    }
  }
</style>
