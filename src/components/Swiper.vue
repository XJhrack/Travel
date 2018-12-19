<template>
    <div class="home-swipe">
			<mt-swipe :auto="5000">
				<mt-swipe-item>
					<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1812/47/a51fe403715df102.jpg_750x200_085792b6.jpg">
				</mt-swipe-item>
				<mt-swipe-item>
					<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1811/d4/7fa0b173c269f802.jpg_750x200_b8d88f51.jpg">
				</mt-swipe-item>
				<mt-swipe-item>
					<img class="swiper-img" src="http://img1.qunarzz.com/piao/fusion/1812/d4/d51b0de13bdaeb02.jpg_750x200_a16ebfe3.jpg">
				</mt-swipe-item>
   	 	</mt-swipe>
		</div>
</template>

<script>
export default {
  name: "Swiper",

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