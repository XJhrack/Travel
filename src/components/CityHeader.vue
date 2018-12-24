<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <div class="iconfont icon-fanhui back-icon"></div>
        </router-link>
    </div>
</template>

<script>
export default {

  name: 'CityHeader',

  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .header
        line-height $headHight
        background $bgColor
        text-align center
        color #fff
        font-size: .34rem
        position relative
        .back-icon
            position absolute
            top 0
            left 0
            width .64rem
            font-size: .45rem
            color #fff

</style>