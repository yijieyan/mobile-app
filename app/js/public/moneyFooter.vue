<template lang="html">
    <Panel title="底部导航" :class="$style.title">
        <div :class="$style.content">
              <div :class="$style.item">
                <router-link :to="{ name: 'getMoney'}">
                  <img src="//img12.360buyimg.com/jrpmobile/jfs/t9922/341/1927418106/3391/75795250/59e9d7e9N1289d306.png?width=60&height=60"/>
                  <p>赚钱</p>
                </router-link>
              </div>
            <div :class="$style.item">
                <router-link :to="{ name: 'browerMoney'}">
              <img src="//img12.360buyimg.com/jrpmobile/jfs/t11653/76/201131398/1192/bf1b2852/59e9d7f3N5f691137.png?width=60&height=60"/>
              <p>借钱</p>
                </router-link>
            </div>
            <div :class="$style.item">
                <router-link :to="{ name: 'financeVip'}">
              <img src="//img12.360buyimg.com/jrpmobile/jfs/t10897/141/1894216742/2046/ad0e8dc1/59e9d7feNaa5dd2fd.png?width=60&height=60"/>
              <p>金融会员</p>
                </router-link>
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
    > h4 {
        display: none;
    }
    margin: 0;
    z-index: 100;
}
.content {
    @include flex(row);
    width: 640px;
    height: 100px;
    background: #fff;
    .item {
        width: 33.33333%;
        height: 100%;
        text-align: center;
        a {
            text-decoration: none;
            img {
                width: 44px;
                height: 44px;
                margin-top: 12px;
                margin-bottom: 6px;
            }
            p {
                height: 26px;
                width: 100%;
                color: rgb(177, 180, 187);
                font-size: 24px;
            }
        }
    }
}
</style>
