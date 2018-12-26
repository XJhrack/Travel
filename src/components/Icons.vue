<template>
    <div class="home-icons">
        <mt-swipe :auto="0" :continuous="false">
            <mt-swipe-item v-for="(item,index) in pages" :key="index">
                <div class="icon" v-for="value in item" :key='value.id'>
                    <div class="icon-image">
                    <img class="icon-content" :src="value.imgUrl">
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
    props:['iconList'],
    data:function(){
        return {
        }
    },
    computed:{
    pages: function(){
        const pages = []
        //每循环8个，push进一次pages
        this.iconList.forEach(
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
        height  3.6rem
        width 100%
        .icon
            position relative
            float left
            width : 25%
            height 1.5rem
            .icon-image
                position absolute
                top : 0
                right : 0
                left : 0
                bottom : .44rem
                .icon-content
                    width 1.1rem
                    height 1.1rem
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
