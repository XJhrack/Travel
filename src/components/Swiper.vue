<template>
    <div class="home-swipe">
			<mt-swipe :auto="5000">
				<mt-swipe-item v-for="item in swiperList" :key="item.id">
					<img class="swiper-img" :src="item.imgUrl">
				</mt-swipe-item>
   	 	</mt-swipe>
		</div>
</template>

<script>
export default {
  name: "Swiper",
  props :['swiperList'],
  data() {
    return {};
	}
};
</script>

<style lang="stylus" scoped>
		.home-swipe
			height : 26.6vw
			width : 100%
			.swiper-img
				height : 100%
				width : 100%
	</style>