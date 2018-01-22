<template lang="html">
    <Panel title="底部导航" :class="$style.title">
        <ul :class="$style.content">
            <li>
                <router-link :to="{ name: 'home' }">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t3541/110/627394787/2190/5d02d39c/580f1dfdNcf72af31.png?width=66&height=66">
                    <p>首页</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'money',}">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t3811/55/345433999/2930/116d3dd1/580f1e25N028a1f2c.png?width=66&height=66">
                    <p>理财</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'whiteBar'}">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t3343/179/621044750/1484/5af6b11a/580f50e4N005181d0.png?width=66&height=66">
                    <p>白条</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'home'}">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t3604/98/635506544/2317/443d3a51/580f240aNbee3dcc4.png?width=66&height=66">
                    <p>众筹</p>
                </router-link>
            </li>
            <li>
                <router-link :to="{ name: 'home'}">
                    <img src="//img12.360buyimg.com/jrpmobile/jfs/t3340/68/639059082/2591/800e2d6b/580f51cdN4caf20b2.png?width=66&height=66">
                    <p>我的</p>
                </router-link>
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
    margin-bottom: 0;
    >h4 {
      display: none;
    }
    .content {
      @include list(row);
      position: fixed;
      right: 0;
      left: 0;
      bottom: 0;
      text-align: center;
      justify-content: space-around;
      background: white;
      z-index: 100;
      li {
        width:20%;
        padding-bottom: 10px;
        a {
          text-decoration: none;
        }
        img {
          width: 44px;
          height: 44px;
          margin-top: 12px;
          margin-bottom: 6px;
        }
        p {
          font-size: 22px;
          text-overflow: ellipsis;
          overflow: hidden;
          color: #656565;
        }
      }
    }
  }
</style>
