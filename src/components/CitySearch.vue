<template>
    <div>
        <div class="search">
            <input type="text" v-model="keyword" class="search-input" placeholder="输入城市名或拼音">
        </div>
        <div class="search-content" v-show="keyword">
            <ul>
                <li class="search-item" @click="change(item.name)" v-for="item in list" :key="item.id">{{item.name}}</li>
            </ul>
            <div class="tip" v-show="tipshow">无法匹配到城市</div>
        </div>
        
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {

  name: 'CitySearch',
  props:['cities'],
  data () {
    return {
        keyword:'',
        list : []
    }
  },
  methods:{
      change(city){
          this.$store.dispatch('changeCity',city)
          this.$router.push('/')
      }
  },
  computed:{
      tipshow(){
          return this.list.length == 0
      }
  },
  mounted(){
      const scroll = new BScroll('.search-content')
  },
  watch:{
      keyword(){
          const result = []
          for(let key in this.cities){
            this.cities[key].forEach(
                (value)=>{
                    if(value.spell.indexOf(this.keyword)>-1 || 
                    value.name.indexOf(this.keyword)>-1){
                        result.push(value)
                    }
                }
            )
          }
          this.list = result
      }
  }
}
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .search
        height .72rem
        background $bgColor
        padding .1rem .2rem
        .search-input
            box-sizing border-box
            padding 0 .1rem
            width 100%
            height .62rem
            line-height .62rem
            text-align center
            border-radius .06rem
            color #666
    .search-content
        overflow hidden
        position absolute
        top 1.8rem
        right 0 
        left 0
        bottom 0
        background #eee
        z-index 1
        .tip
        .search-item
            line-height .8rem
            padding-left .2rem
            font-size .32rem
            background #fff
            color #666
            
</style>