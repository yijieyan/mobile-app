<template lang="html">
    <div>
      <Panel title="新手特权" :class="$style.title"/>
      <div :class="$style.content">
        <div :class="$style.item">
            <h4>下载APP <span :class="$style.red">送888元礼包</span></h4>
            <p :class="$style.text">新手专享</p>
            <img src="//img12.360buyimg.com/jrpmobile/jfs/t10384/155/1759179594/9776/185bd062/59e5f0ebNec4cf494.png?width=100&height=100"/>
        </div>
        <div :class="$style.item">
          <ul>
            <li>
              <img src="//img12.360buyimg.com/jrpmobile/jfs/t4639/162/1782623297/60754/98ea03b4/58e60952N7fdb2b85.png?width=200&height=200"/>
              <h4>领128元新手礼包</h4>
              <p>立即开通</p>
            </li>
            <li>
              <img src="//img12.360buyimg.com/jrpmobile/jfs/t4804/179/657713323/5908/66dce262/58e6095fNd3dc3f39.png?width=100&height=100"/>
              <h4>打白条 <span :class="$style.red">享免息</span></h4>
              <p :class="$style.red">立即开通享豪礼</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
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
    @include panel;
    border-bottom: 1px solid #ddd;
}
.content {
    @include list(row);
    background: white;
    margin-top: -20px;
    .item {
        width: 50%;
        box-sizing: border-box;
        &:first-child {
            padding-top: 32px;
            border-right: 1px solid #ddd;
            box-sizing: border-box;
            > h4 {
                text-align: center;
                padding: 0 20px;
                box-sizing: border-box;
                font-size: 26px;
            }
            p {
                font-size: 24px;
                color: #999;
                text-align: center;
                margin-top: 6px;
            }
            img {
                display: block;
                width: 132px;
                height: 132px;
                margin: 20px auto 28px;
            }
        }
        &:last-child {
            ul {
                width: 100%;
                li {
                    padding-top: 32px;
                    width: 100%;
                    height: 144px;
                    box-sizing: border-box;
                    > h4 {
                        font-size: 26px;
                        padding-left: 28px;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                    }
                    > p {
                        color: #999;
                        font-size: 24px;
                        margin-top: 12px;
                        padding-left: 28px;
                    }
                    img {
                        float: right;
                        width: 80px;
                        height: 80px;
                        margin-right: 28px;
                    }
                    &:first-child {
                        border-bottom: 1px solid #ddd;
                    }
                }
            }
        }
        .red {
            color: red;
        }
    }
}
</style>
