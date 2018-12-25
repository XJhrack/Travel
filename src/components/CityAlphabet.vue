<template>
    <div class="list">
        <ul>
            <li class="item" 
            :class="value"
            v-for="value in arr" 
            :key="value"
            @click="send(value)"
            @touchstart="handleTouchStart()"
            @touchend="handleTouchEnd()"
            @touchmove="handleTouchMove($event)"
            >{{value}}</li>
        </ul>
    </div>
</template>

<script>
export default {

  name: 'CityAlphabet',
  props:['cities'],
  data () {
    return {
        touchStatus:false
    }
  },
  computed:{
      arr:function(){
          const letters = []
          console.log(this.cities);
          for(let item in this.cities){
              console.log(item)
              letters.push(item)
          }
          return letters
      }
  },
  methods:{
      handleTouchStart(){
          this.touchStatus=true
      },
      handleTouchEnd(){
          this.touchStatus=false
      },
      handleTouchMove($event){
          if(this.touchStatus){
              console.log($event.touches[0]);
              const startY = document.querySelector('.A').offsetTop
              let clientY = $event.touches[0].clientY
              let index = Math.floor((clientY - startY)/22)
            //   console.log(index);
              this.$emit('letter',this.arr[index])
          }
      },
      send(key){
        // console.log(key)
        this.$emit('letter',key)
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