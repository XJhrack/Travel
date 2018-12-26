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
            lastCity:'',
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
        getHomeInfo:function(city){
            const vm = this;
            axios.get('/api/index.json',{
					    params: {
					      city: city
					    }
					  }).then(function(response){
                vm.iconList = response.data.data.iconList
                vm.likeList = response.data.data.likeList
                vm.swiperList = response.data.data.swiperList
                vm.weekendList = response.data.data.weekendList
            })
        }
    },
    mounted:function(){
        this.getHomeInfo();
    },
    activated(){
        if(this.lastCity !== this.$store.state.city){
            this.lastCity = this.$store.state.city
            this.getHomeInfo(this.$store.state.city);
        }
        
    }
}
</script>