<template lang="html">
    <Panel title="理财精选" :class="$style.title">
        <div :class="$style.content">
            <dl v-for="(item, index) in items" :key="index" :class="$style.item">
                <dt>{{ item.title }}<span>{{ item.subTitle }}</span> </dt>
                <dd>{{ item.rate }}</dd>
                <dd>{{ item.text }}</dd>
            </dl>
        </div>
    </Panel>
</template>

<script>
import Panel from "../core/panel.vue"
export default {
  components: {
    Panel,
  },
  data() {
    return {
      items: [{
          title: "定期理财",
          subTitle: "理财首选",
          rate: "5.60%",
          text: "历史年化回报率",
        },
        {
          title: "小白理财",
          subTitle: "理财首选",
          rate: "4.22%",
          text: "7日年化收益率",
        },
        {
          title: "月月盈",
          subTitle: "养老保障",
          rate: "5%",
          text: "七日年化收益率",
        },
        {
          title: "小白基金",
          subTitle: "天天赚钱",
          rate: "4.27%",
          text: "7日年化收益率",
        },
      ],
    }
  },
}
</script>

<style lang="scss" module>
@import '../../css/element.scss';
.title {
    font-size: 32px;
    font-weight: 700;
}
.content {
    @include list(row);
    &:after {
      content: ' ';
      display: block;
      overflow: hidden;
      width: 100%;
      height: 0;// 这个必须写
      border-bottom: 1px solid #eee;
      position: relative;
      margin-top: -218px;
    }
    .item {
        position: relative;
        width: 50%;
        box-sizing: border-box;
        padding-left: 32px;
        height: 218px;
        box-sizing: border-box;
        // border-bottom: 1px solid #eee;
        dt {
            color: #333;
            font-weight: 700;
            font-size: 30px;
            height: 42px;
            line-height: 42px;
            margin-bottom: 16px;
            margin-top: 34px;
            span {
                color: #FF5155;
                height: 34px;
                line-height: 34px;
                font-size: 22px;
                padding: 0 8px;
                border: 1px solid #FF5155;
                margin-left: 8px;
                font-weight: 400;
            }
        }
        dd {
            &:nth-child(2) {  //属于其父元素的第二个子元素的每个dd
                font-size: 44px;
                font-weight: 700;
                height: 58px;
                line-height: 58px;
                color: #FF5155;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
            }
            &:nth-child(3) {
              font-size: 24px;
              height:34px;
              line-height: 34px;
              color:#999;
              text-overflow: ellipsis;
              white-space: nowrap;
              overflow: hidden;
            }
        }
        &:after {
          content: ' ';
          display: block;
          position: absolute;
          height: 134px;
          width: 1px;
          background:#eee;
          border-right: 1px solid #eee;
          top:50%;
          margin-top: -57px;
          right:0
        }
        &:nth-child(2n) {
          &:after {
            display: none;
          }
        }
    }
}
</style>
