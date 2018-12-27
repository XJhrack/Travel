<template>
    <div class="banner">
        <div class="banner-img">
            <img  class="img-contnet" src="//img1.qunarzz.com/sight/p0/1709/41/411f234d79457081a3.img.jpg_600x330_b5e86902.jpg" alt="">
        </div>
        <div class="banner-title">长隆野生动物世界(AAAAA景区)</div>
        <div class="iconfont banner-icon">&#xe653; 100</div>
        <router-link to="/">
            <div class="iconfont banner-back-icon">&#xe600;</div>
        </router-link>
    </div>
</template>

<script>
export default {

  name: 'DetailBanner',

  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
    .banner
        position relative
        .banner-img
            width 100%
            height 55vw
            .img-contnet
                width 100%
        .banner-title
            color #fff
            position absolute
            bottom 0
            left 0
            right 0
            line-height .4rem
            font-size .36rem
            padding .18rem
            background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
        .banner-icon
            position absolute
            left .2rem
            bottom .7rem
            color #fff
            background rgba(0,0,0,.5)
            border-radius .2rem
            font-size .24rem
            line-height .4rem
            padding .05rem .1rem 
        .banner-back-icon
            position absolute
            left .1rem
            top .1rem
            color #fff
            background rgba(0,0,0,.5)
            border-radius .8rem
            font-size .5rem
            padding .12rem
        
</style>