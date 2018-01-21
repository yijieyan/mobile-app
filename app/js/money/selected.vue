<template lang="html">
    <Panel title="精选推荐" :class="$style.title">
        <div :class="$style.content">
          <div :class="$style.item">
            <ul>
              <li>
                <h4>定期理财 <span>90天可质押</span></h4>
                <p>5.50%</p>
                <p>历史年化结算利率</p>
              </li>
              <li>
                <h4>固收理财 <span>理财首选</span></h4>
                <p>5.80%</p>
                <p>综合年化收益率</p>
              </li>
            </ul>
          </div>
          <div :class="$style.item">
            <ul>
              <li>
                <h4>基智账户 <span>组合投资</span></h4>
                <p>8%-10%</p>
                <p>止盈年化收益率</p>
              </li>
              <li>
                <h4>小白基金 <span>天天赚钱</span></h4>
                <p>4.27%</p>
                <p>7日年化收益率</p>
              </li>
            </ul>
          </div>
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
  @import '../../css/element.scss';
  .title {
    >h4 {
      font-weight: 700 !important;
    }
    .content {
      .item {
        @include list;
        ul {
          @include list(row);
          &:after {
            position: relative;
            content: ' ';
            display: block;
            overflow: hidden;
            height: 0;
            width: 100%;
            border-bottom: 1px solid #eee;
            margin-top: -218px;
          }
          li {
            position: relative;
            width: 50%;
            padding-left: 32px;
            box-sizing: border-box;
            height:218px;
            padding-top: 34px;
            h4 {
              font-size: 30px;
              font-weight: 700;
              color: #333;
              span {
                display: inline-block;
                color:#FF5155;
                height:34px;
                line-height: 34px;
                font-size: 22px;
                padding: 0 8px;
                box-sizing: border-box;
                border: 1px solid #FF5155;
                text-align: center;
                vertical-align: 1px;
              }
            }
            p {
              &:nth-child(2) {
                margin-top: 16px;
                color:#FF5155;
                font-size: 44px;
                font-weight: 700;
                height: 58px;
                line-height: 58px;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
              }
            }
            p {
              &:nth-child(3) {
                color: #999;
                font-size: 24px;
                height: 34px;
                line-height: 34px;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
              }
            }
            &:after {
              position: absolute;
              content: ' ';
              display: block;
              overflow: hidden;
              height: 142px;
              top:50%;
              right: 0;
              margin-top: -71px;
              border-right: 1px solid #eee;
            }
            &:nth-child(2n) {
              &:after {
                display: none;
              }
            }
          }
        }
      }
    }
  }
</style>
