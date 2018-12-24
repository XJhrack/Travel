<template>
    <div class="list">
        <ul>
            <li class="item">A</li>
            <li class="item">B</li>
            <li class="item">C</li>
            <li class="item">D</li>
        </ul>
    </div>
</template>

<script>
export default {

  name: 'CityAlphabet',

  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
    .list
        position absolute
        top 1.8rem
        right 0
        bottom 0
        font-size .33rem
        display flex
        flex-direction column
        justify-content center
        width .5rem
        .item
            color #212121
            text-align center
            line-height .44rem

</style>