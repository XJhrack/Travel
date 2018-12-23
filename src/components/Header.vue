<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont icon-fanhui back-icon"></div>
        </div>
        <div class="header-input">
            <span class="iconfont icon-fangdajing"></span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
			<div class="header-right">城市
            	<span class="iconfont icon-xiala arrow-icon"></span>
        	</div>
		</router-link>
    </div>
</template>
<style lang="stylus" scoped>
	@import '~styles/varibles.styl'
	.header
		display: flex
		line-height: .86rem
		background: #00bcd4
		color:#fff
		.header-left
			width: .64rem
			float: left
			.back-icon
				text-align: center
				font-size: .45rem
		.header-input
			flex: 1
			color:gray
			height: .64rem
			line-height: .64rem
			margin-top: .12rem
			margin-left: .2rem
			padding-left: .2rem
			background:#fff
			border-radius: .1rem
		.header-right
			color #fff
			width: 1.24rem
			float: right
			text-align: center
			.arrow-icon
				font-size:.28rem

</style>
<script>
</script>