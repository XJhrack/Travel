<template>
    <div class="list">
        <div>
            <div class="area">
            <div class="title">热门城市</div>
            <div class="button-list">
                <div class="button">珠海</div>
                <div class="button">珠海</div>
                <div class="button">珠海</div>
                <div class="button">珠海</div>
                <div class="button">珠海</div>
                <div class="button">珠海</div>
            </div>
            </div>
            <div class="area">
                <div class="title">A</div>
                <div class="button-list">
                    <div class="button">珠海</div>
                    <div class="button">珠海</div>
                    <div class="button">珠海</div>
                    <div class="button">珠海</div>
                    <div class="button">珠海</div>
                    <div class="button">珠海</div>
                </div>
            </div>
            <div class="area">
                <div class="title">A</div>
                <div class="button-list">
                    <div class="button">珠海</div>
                    <div class="button">珠海</div>
                    <div class="button">珠海</div>
                    <div class="button">珠海</div>
                    <div class="button">珠海</div>
                    <div class="button">珠海</div>
                </div>
            </div>
            <div class="area">
                <div class="title">A</div>
                <div class="button-list">
                    <div class="button">珠海</div>
                    <div class="button">珠海</div>
                    <div class="button">珠海</div>
                    <div class="button">珠海</div>
                    <div class="button">珠海</div>
                    <div class="button">珠海</div>
                </div>
            </div>
            <div class="area">
                <div class="title">A</div>
                <div class="button-list">
                    <div class="button">珠海</div>
                    <div class="button">珠海</div>
                    <div class="button">珠海</div>
                    <div class="button">珠海</div>
                    <div class="button">珠海</div>
                    <div class="button">珠海</div>
                </div>
            </div>
            <div class="area">
                <div class="title">A</div>
                <div class="button-list">
                    <div class="button">珠海</div>
                    <div class="button">珠海</div>
                    <div class="button">珠海</div>
                    <div class="button">珠海</div>
                    <div class="button">珠海</div>
                    <div class="button">珠海</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {

  name: 'CityList',

  data () {
    return {

    }
  },
  mounted:function(){
      const scroll = new BScroll('.list')
  }
}
</script>

<style lang="stylus" scoped>
    .list
        overflow hidden
        position absolute
        top 1.8rem
        left 0
        right 0
        bottom 0
        background #f5f5f5
        .area
            overflow hidden
            .title
                line-height .44rem
                padding .2rem
                color #212121
            .button-list
                overflow hidden
                padding-right 5.5%
                .button
                    display block
                    background #fff
                    color #212121
                    width 32.5%
                    height .88rem
                    line-height .88rem
                    text-align center
                    float left
                    margin-left 0.5%
                    margin-top .06rem
                    font-size .32rem

</style>