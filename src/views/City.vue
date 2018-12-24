<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :hotCities="hotCities" :cities="cities"></city-list>
    <city-alphabet :cities="cities"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
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
      cities:{},
      hotCities:[]
    }
  },
  methods:{
    getCityList(){
      const vm = this
      axios.get('/api/city.json').then(
        function(response){
          // console.log(response.data.data);
          vm.cities = response.data.data.cities
          vm.hotCities = response.data.data.hotCities
        }
      )
    }
  },
  mounted(){
    this.getCityList()
  }
}
</script>

<style lang="css" scoped>
</style>