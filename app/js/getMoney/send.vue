<template lang="html">
    <Panel title="送给她" :class="$style.title">
        <div :class="$style.content">
            <swiper :options="options">
                <swiperSlide v-for="(item, index) in items" :key="index">
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
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t12970/4/880672678/24491/a835b8eb/5a153662N1fabca51.jpg?width=210&height=260",
                },
                {
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t8917/195/1004512421/66921/f7a70be7/59ba7490N2ffbe908.png?width=210&height=260",
                },
                {
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t8632/80/1457154411/67597/77a757b9/59ba7497N34cb38ee.png?width=210&height=260",
                },
                {
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t12238/341/2041136572/14288/5bd53c2/5a31de4aN8e452fbc.png?width=210&height=260",
                },
                {
                    src: "//img12.360buyimg.com/jrpmobile/jfs/t9391/264/1515590405/60130/db382cab/59ba761eN75cc7c5e.png?width=210&height=260",
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
        text-align: left!important;
    }
  }
  .content {
    padding: 0 20px;
  }
</style>
