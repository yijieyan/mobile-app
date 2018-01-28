<template lang="html">
    <Panel title="热销保险" :class="$style.title">
        <div :class="$style.content">
            <swiper :options="options">
                <swiperSlide v-for="(item, index) in items" :key="index" :class="$style.item">
                    <img :src="item.src">
                </swiperSlide>
            </swiper>
        </div>
    </Panel>
</template>

<script>
import {
    swiper,
    swiperSlide,
} from "vue-awesome-swiper"
import Panel from "../core/panelBak.vue"
export default {
    components: {
        Panel,
        swiper,
        swiperSlide,
    },
    data() {
        return {
            options: {
                slidesPerView: 2.6,
                spaceBetween: 20,
            },
            items: [
                {
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t12355/171/849656870/29064/92c9bc12/5a153643N04efba6e.jpg?width=210&height=260",
                },
                {
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t9697/338/291348712/12737/27e1204/59cb6304Naef85042.jpg?width=210&height=260",
                },
                {
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t10360/347/311063647/10881/14a5cd40/59cb632fNcac82571.jpg?width=210&height=260",
                },
                {
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t13927/226/2090083878/14208/2746192a/5a31dde6Nbba7f26c.png?width=210&height=260",
                },
                {
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t9703/119/296348375/11253/b9bc3ce7/59cb637dNf25b0dff.jpg?width=210&height=260",
                },
            ],
        }
    },
}
</script>

<style lang="scss" module>
  .title {
    >h4 {
      font-size: 28px!important;
      color: #333!important;
      text-align: left!important;
    }
  }
  .content {
    padding: 0 20px;
    .item {
      img {
        width: 210px;
        height: 260px;
      }
    }
  }
</style>
