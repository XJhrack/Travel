<template>
    <div class="home-icons">
        <mt-swipe :auto="0" :continuous="false">
            <mt-swipe-item v-for="(item,index) in pages" :key="index">
                <div class="icon" v-for="value in item" :key='value.id'>
                    <div class="icon-image">
                    <img class="icon-content" :src="value.imgurl">
                    </div>
                    <p class="icon-desc">{{value.desc}}</p>
                </div>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default {
    name:'HomeIcons',
    data:function(){
        return {
            iconArr: [
                {
                id:'001',
                imgurl:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                desc:'景点门票'
                },
                {
                id:'002',
                imgurl:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
                desc:'广州必游'
                },
                {
                id:'003',
                imgurl:"http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
                desc:'动植物园'
                },
                {
                id:'004',
                imgurl:"http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
                desc:'游乐场'
                },
                {
                id:'005',
                imgurl:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
                desc:'广州必游'
                },
                {
                id:'006',
                imgurl:"http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
                desc:'动植物园'
                },
                {
                id:'007',
                imgurl:"http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
                desc:'游乐场'
                },
                {
                id:'008',
                imgurl:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
                desc:'一日游'
                },
                {
                id:'009',
                imgurl:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
                desc:'一日游'
                }
            ]
        }
    },
    computed:{
    pages: function(){
        const pages = []
        //每循环8个，push进一次pages
        this.iconArr.forEach(
            function(item,index){
                const page = Math.floor(index/8)
                if(!pages[page]){
                    pages[page] = []
                }
                pages[page].push(item)
            }
        )
        return pages;
    }
	}
}
</script>


<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    @import '~styles/mixins.styl'
    .home-icons
        height  60vw
        width 100%
        .icon
            position relative
            float left
            width : 25%
            height 0
            padding-bottom : 25%
            .icon-image
                position absolute
                top : 0
                right : 0
                left : 0
                bottom : .44rem
                .icon-content
                    height 100%
                    display block
                    margin 0 auto 
                    box-sizing border-box
                    padding .1rem
            .icon-desc
                position absolute
                right : 0
                left : 0
                bottom : 0
                height .44rem
                line-height .44rem
                text-align center
                color $darkTextColor
                ellipsis()
               
</style>
