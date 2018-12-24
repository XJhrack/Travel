<template>
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
    </div>
</template>

<script>
export default {

  name: 'CityList',

  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
    .area
        overflow hidden
        background #f5f5f5
        .title
            line-height .44rem
            padding .2rem
            color #212121
        .button-list
            overflow hidden
            padding-right .35rem
            .button
                display block
                background #fff
                color #212121
                width 32.5%
                height .88rem
                line-height .88rem
                text-align center
                float left
                margin-left .06rem
                margin-top .06rem

</style>