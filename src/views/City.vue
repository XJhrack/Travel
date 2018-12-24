<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
  </div>
</template>

<script>
import CityHeader from '@/components/CityHeader.vue'
import CitySearch from '@/components/CitySearch.vue'
export default {
  name: 'City',
  components:{
    CityHeader,
    CitySearch
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>