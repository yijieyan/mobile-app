<template lang="html">
    <Panel title="白条福利" :class="$style.title">
        <ul :class="$style.content">
            <li>
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t4378/62/155957680/9017/16463551/58affd58Nb5c9198e.jpg?width=120&height=120">
                <div>
                    <h4>开通白条</h4>
                    <p>送188元礼包</p>
                </div>
                <p>立即开通 <em> > </em></p>
            </li>
            <li>
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t4150/330/141981421/9147/604e3e04/58affc3bNbfa8f9d7.jpg?width=120&height=120"/>
                  <div>
                    <h4>白条闪付</h4>
                    <p>新手享158元礼包</p>
                </div>
                <p>随机立减 <em> > </em> </p>
            </li>
            <li>
                <img src="//img12.360buyimg.com/jrpmobile/jfs/t4270/96/1102370053/8651/58b7fa5a/58bd2e10N453e9464.jpg?width=120&height=120"/>
                <div>
                    <h4>白条提额</h4>
                    <p>金融app专享提额礼包</p>
                </div>
                <p>&nbsp; 去提额 <em> > </em> </p>
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
    }
  }
  .content {
    @include list;
    li {
      @include list(row);
      img {
        margin: 24px 32px;
        width:88px;
        height: 88px;
      }
      >div {
        margin-top: 24px;
        >h4 {
          font-size: 32px;
          color: #333;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          line-height: 1.8;
        }
        >p {
          font-size: 24px;
          color: #999999;
          width: 320px;
          line-height: 1.1;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      }
      >p {
        margin-top: 54px;
        font-size:28px;
        color:#FF801A;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        >em {
          color: #999;
        }
      }
    }
  }
</style>
