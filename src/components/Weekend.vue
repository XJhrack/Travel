<template>
    <div>
        <div class="weekend-title">
            周末去哪儿
        </div>
        <div>
            <ul>
                <li class="item" v-for="item in weekendList" :key="item.id">
                    <img class="item-img" :src="item.imgUrl">
                    
                    <div class="item-info">
                        <div class="item-title">{{item.title}}</div>
                        <div class="item-desc">{{item.desc}}</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'HomeWeekend',
    props:['weekendList']
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
