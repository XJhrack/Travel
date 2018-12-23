<template>
    <div>
        <div class="like">
            <img class="like-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="猜你喜欢">
            <p class="like-title">猜你喜欢</p>
        </div>
        <div>
            <ul>
                <li class="item" v-for="item in likeList" :key="item.id">
                    <img class="item-img" :src="item.imgUrl" alt="">
                    
                    <div class="item-info">
                        <div class="item-title">{{item.title}}</div>
                        <div class="item-evaluate">
                            <div class="iconfont item-star">&#xe60c;&#xe60c;&#xe60c;&#xe60c;&#xe60c;</div>
                            <span class="evaluate-number">{{item.evaluateNumber}}</span>
                        </div>
                        <div class="item-price">{{item.price}}</div>
                    </div>
                </li>

            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:'HomeLike',
    props:['likeList']
}
</script>


<style lang="stylus" scoped>
     @import '~styles/mixins.styl'
    .like
        background #eee
        height .8rem
        display: flex
        align-items: center;  
        .like-img
            float left
            height 15px
            width 15px
        .like-title
            font-size .32rem
            float left
            color #000
            margin-left .1rem
    .item
        overflow hidden
        display flex
        height 1.9rem
        padding-bottom .1rem
        .item-img
            width 1.7rem
            height 1.7rem
            padding .1rem
        .item-info
            flex 1 //自动撑开宽度
            padding .1rem
            .item-title
                line-height .5rem
                font-size .32rem
                ellipsis()
            .item-evaluate
                line-height .6rem
                .item-star
                    float left
                    color #ffb436
                .evaluate-number
                    color #ccc
                    margin-left .15rem
            .item-price
                color #ff8300
                font-size .4rem
                line-height .7rem
</style>
