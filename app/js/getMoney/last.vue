<template lang="html">
    <Panel title="底部商品" :class="$style.title">
        <ul :class="$style.content">
            <li v-for="(item, index) in items" :key="index">
                <img :src="item.src">
                <h4>{{ item.title }}</h4>
                <p><em>￥ </em>{{ item.text }}<span> 起</span></p>
                <div>
                    <div :class="$style.outer" :style="{width:item.progress + '%'}">
                        <div :class="$style.inner"/>
                    </div>
                    <label>{{ item.progress }}%</label>
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
    data() {
        return {
            items: [
                {
                    src: "//img30.360buyimg.com/cf/jfs/t9913/189/1249243057/68635/5f51fa51/59df1cfcN1224ae11.jpg",
                    title: "独美 比A4纸还轻的眼镜",
                    text: "11.00",
                    progress: "100",
                },
                {
                    src: "//img30.360buyimg.com/cf/jfs/t6193/104/2143252361/129689/5de7104d/595daf70N6162ff59.jpg",
                    title: "幻响C7便携蓝牙音箱",
                    text: "98.00",
                    progress: "100",
                },
                {
                    src: "//img30.360buyimg.com/cf/jfs/t9007/244/1218518581/142030/b9404615/59b8eefeNaf0cf890.jpg",
                    title: "全镁铝合金登机旅行箱 ",
                    text: "589.00",
                    progress: "100",
                },
                {
                    src: "//img30.360buyimg.com/cf/jfs/t10636/87/2111082568/23017/a9b0791a/59ee99ceN1ebf71f9.jpg",
                    title: "新一代超级卫衣",
                    text: "11.00",
                    progress: "100",
                },
                {
                    src: "//img30.360buyimg.com/cf/jfs/t11617/3/2563591/110837/ec83dc19/59e57bafN99790d9a.jpg",
                    title: "Disco 灯效蓝牙音箱",
                    text: "299.00",
                    progress: "100",
                },
                {
                    src: "//img30.360buyimg.com/cf/jfs/t15517/338/420749895/100032/5966584f/5a30deabN161936e9.jpg",
                    title: "ERKJ计步学习蓝牙耳机",
                    text: "189.00",
                    progress: "23",
                },
                {
                    src: "//img30.360buyimg.com/cf/jfs/t14197/160/546457496/134173/4e1baccd/5a30ccc5Na44f7492.jpg",
                    title: "泗洪花雕醉蟹-爷爷的味道",
                    text: "58.00",
                    progress: "328",
                },
                {
                    src: "//img30.360buyimg.com/cf/jfs/t10111/75/1882813597/75078/1d29bb49/59e9a71aNfd75b213.jpg",
                    title: "全镁铝合金旅行箱Pro",
                    text: "799.00",
                    progress: "100",
                },
            ],
        }
    },
}
</script>

<style lang="scss" module>
  @import '../../css/element.scss';
  .title {
    >h4 {
      display: none;
    }
  }
  .content {
    @include flex(row);
    li {
      width: 316px;
      height: 462px;
      padding-bottom: 8px;
      &:nth-child(2n) {
        padding-left: 4px;
      }
      &:nth-child(2n+1) {
        padding-right: 4px;
      }
      >img {
        margin-top: 44px;
        margin-bottom: 20px;
        padding: 0 44px;
        width: 228px;
        height: 228px;
      }
      >h4 {
        width: 286px;
        height: 42px;
        padding-left: 30px;
        box-sizing: border-box;
        font-size: 30px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
      >p {
        width: 246px;
        height: 34px;
        padding-left: 30px;
        box-sizing: border-box;
        margin-bottom: 14px;
        font-size: 32px;
        color: #ff9a1c;
        >em {
          color: #f92;
          font-size: 24px;
        }
        >span {
          font-size: 24px;
          color: #999;
        }
      }
      >div {
        width: 256px;
        height: 30px;
        padding: 0 30px;
        box-sizing: border-box;
        margin-bottom: 26px;
        @include flex(row);
        position: relative;
        .outer {
          width: 70%!important;
          height: 10px;
          margin-top: 10px;
          background: rgb(243, 245, 247);
          .inner {
            max-width: 100%;
            height: 10px;
            background-image: linear-gradient(270deg,#f55 1%,#ff9c31);
          }
        }
        >label {
          position: absolute;
          right: 0;
          font-size: 24px;
          color: #999;
        }
      }
    }
  }
</style>
