<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list></city-list>
    <city-alphabet></city-alphabet>
  </div>
</template>

<script>
import CityHeader from '@/components/CityHeader.vue'
import CitySearch from '@/components/CitySearch.vue'
import CityList from '@/components/CityList.vue'
import CityAlphabet from '@/components/CityAlphabet.vue'
export default {
  name: 'City',
  components:{
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>