<template>
    <div>
        <home-header></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icons :iconList="iconList"></home-icons>
        <home-like :likeList="likeList"></home-like>
        <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>
<script>
import HomeHeader from '@/components/Header.vue'
import HomeSwiper from '@/components/Swiper.vue'
import HomeIcons from '@/components/Icons.vue'
import HomeWeekend from '@/components/Weekend.vue'
import HomeLike from '@/components/Like.vue'
import axios from 'axios'
export default {
    name: 'Home',
    data:function(){
        return {
            iconList : [],
            likeList : [],
            swiperList : [],
            weekendList : []
        }
    },
    components: {
        HomeHeader : HomeHeader,
        HomeSwiper : HomeSwiper,
        HomeIcons : HomeIcons,
        HomeWeekend:HomeWeekend,
        HomeLike : HomeLike
    },
    methods:{
        getHomeInfo:function(){
            const vm = this;
            axios.get('/api/index.json').then(function(response){
                console.log(response);
                //判断下是否成功请求，这里我就不写啦
                vm.iconList = response.data.data.iconList
                vm.likeList = response.data.data.likeList
                vm.swiperList = response.data.data.swiperList
                vm.weekendList = response.data.data.weekendList
            })
        }
    },
    mounted:function(){
        this.getHomeInfo();
    }
}
</script>