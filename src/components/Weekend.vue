<template>
    <div>
        <div class="weekend-title">
            周末去哪儿
        </div>
        <div>
            <ul>
                <li class="item">
                    <img class="item-img" src="http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg" alt="">
                    
                    <div class="item-info">
                        <div class="item-title">南国冰雪乐园</div>
                        <div class="item-desc">这里可以让你在南国感受到北国风光，让南国的你“零距离”感受北国银装素裹壮观之景</div>
                    </div>
                </li>
                <li class="item">
                    <img class="item-img" src="http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg" alt="">
                    
                    <div class="item-info">
                        <div class="item-title">南国冰雪乐园</div>
                        <div class="item-desc">这里可以让你在南国感受到北国风光，让南国的你“零距离”感受北国银装素裹壮观之景</div>
                    </div>
                </li>
                <li class="item">
                    <img class="item-img" src="http://img1.qunarzz.com/sight/source/1811/15/66f14e0fd6fbb.jpg_r_640x214_5d69f21d.jpg" alt="">
                    
                    <div class="item-info">
                        <div class="item-title">南国冰雪乐园</div>
                        <div class="item-desc">这里可以让你在南国感受到北国风光，让南国的你“零距离”感受北国银装素裹壮观之景</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'HomeWeekend'
}
</script>

<style lang="stylus" scoped>
    @import '~styles/mixins.styl'
    .weekend-title
        background #eee
        height .8rem
        line-height .8rem
        font-size .28rem
        color #000
        padding-left .3rem

    .item-img
        width 100%
    .item-info
        padding .22rem
        .item-title
            line-height .5rem
            font-size .27rem
            color #212121
        .item-desc
            line-height .38rem
            font-size .25rem
            color #616161
            max-width 80%
            ellipsis()
        
            
    
</style>
