<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
    <city-alphabet :cities="cities" @letter="getLetter($event)"></city-alphabet>
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
      hotCities:[],
      letter:''
    }
  },
  methods:{
    getCityList(){
      const vm = this
      axios.get('/api/city.json').then(
        function(response){
          vm.cities = response.data.data.cities
          vm.hotCities = response.data.data.hotCities
        }
      )
    },
    getLetter($event){
      this.letter = $event
    }
  },
  mounted(){
    this.getCityList()
  }
}
</script>

<style lang="css" scoped>
</style>