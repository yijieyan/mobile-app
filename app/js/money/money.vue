<template lang="html">
    <Panel title="理财精选" :class="$style.title">
        <ul :class="$style.content">
          <li>
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t3670/58/543125556/2606/a65096b9/580d80afN63b1085a.png?width=76&height=76"/>
            <div>
              <h4>月度理财</h4>
              <p>预期年化收益率4.50%</p>
            </div>
            <div>
              去赚钱 >
            </div>
          </li>
          <li>
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t3679/44/511862277/2728/c1c6b2bf/580d8189N6b6f8052.png?width=76&height=76"/>
            <div>
              <h4>季度理财</h4>
              <p>历史年化回报率5.50%</p>
            </div>
            <div>
              去赚钱 >
            </div>
          </li>
          <li>
          <img src="//img12.360buyimg.com/jrpmobile/jfs/t3331/69/580199498/3074/d5bb21c5/580d7f6cN7f35e596.png?width=76&height=76"/>
          <div>
              <h4>一年理财</h4>
              <p>历史年化回报率5.80%</p>
            </div>
            <div>
              去赚钱 >
            </div>
          </li>
        </ul>
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
  @import '../../css/element.scss';
  .title {
    >h4 {
      font-weight: 700!important;
      border: 1px solid #eee;
    }
  }
  .content {
    @include list;
    li {
      @include list(row);
      &:after {
        content: ' ';
        display: block;
        overflow: hidden;
        height: 0;
        width: 100%;
        border-bottom: 1px solid #eee;
        margin-left:152px;
      }
      img {
        margin: 24px 32px;
        width: 88px;
        height: 88px;
      }
      div {
        &:nth-child(2) {
          >h4 {
            font-size: 32px;
            color:#333;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            margin-top: 26px;
            line-height: 1.8;
          }
          >p {
            font-size: 24px;
            color:#ff3232;
            line-height: 1.1;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow:hidden;
          }
        }
        &:nth-child(3) {
          margin-left: 110px;
          font-size: 28px;
          color:#FF801A;
          margin-top: 54px;
        }
      }
    }

  }
</style>
