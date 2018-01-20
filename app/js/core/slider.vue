<template>
    <div :class="cname">
        <swiper :options="swiperOption" :not-next-tick="notNextTick">
            <swiper-slide v-for="(item, index) in swiperSlides" :key="index">
                <router-link :to="{ name: 'item.url'}">
                    <img :src="item.src" >
                </router-link>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination" v-if="swiperOption.pagination"/>
        </swiper>
    </div>
</template>

<script>
import {
    swiper,
    swiperSlide,
} from "vue-awesome-swiper"
export default {
    components: {
        swiper,
        swiperSlide,
    },
    props: {
        swiperOption: {
            type: Object,
            default() {
                return {
                    autoplay: true, // 可选选项，自动滑动
                    loop: true, // 设置循环
                    pagination: {
                        el: ".swiper-pagination", // 最下面的指示器(分页器)
                    },
                    notNextTick: false,
                }
            },

        },
        cname: {
            type: String,
            default: "",
        },
        swiperSlides: {
            type: Array,
            default() {
                return [
                    {
                        src: "",
                        url: "",
                    },
                ]
            },
        },
    },
    data() {
        return {
        }
    },

}
</script>

<style lang="scss">
//这里为了引入css样式需要在路径前面添加~
  @import '~swiper/dist/css/swiper.css'
</style>
