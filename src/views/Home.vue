<template>
    <div>
        <home-header></home-header>
        <home-swiper></home-swiper>
        <home-icons></home-icons>
        <home-like></home-like>
        <home-weekend></home-weekend>
    </div>
</template>
<script>
import HomeHeader from '@/components/Header.vue'
import HomeSwiper from '@/components/Swiper.vue'
import HomeIcons from '@/components/Icons.vue'
import HomeLike from '@/components/Like.vue'
import HomeWeekend from '@/components/Weekend.vue'
export default {
    name: 'Home',
    components: {
        HomeHeader : HomeHeader,
        HomeSwiper : HomeSwiper,
        HomeIcons : HomeIcons,
        HomeLike,
        HomeWeekend
    }
}
</script>