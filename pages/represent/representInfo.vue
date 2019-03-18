<template>
	<view class="represent_info_wrapper">
		<view class='endorsement_nav'>
			<image class="endorsement_nav_arrow" :src="nav_right"></image>
			<view class='endorsement_nav_title'>代言商品</view>
			<view class='endorsement_nav_right' />
		</view>
		<view class='endorsement_container'>
			<image :src="bg_banner"></image>
			<talk></talk>
			<shop></shop>
			<maybeLike></maybeLike>
		</view>
		<discuss></discuss>
	</view>
</template>

<script>
	import discuss from './components/discuss';
	import talk from './components/talk';
	import shop from './components/shop';
	import maybeLike from './components/maybeLike';

	export default {
		data() {
			return {
				bg_banner: "../../static/represent/idol.jpg",
				nav_right: "../../static/represent/nav_right.png",
			}
		},
		components: {
			discuss,
			talk,
			shop,
			maybeLike,
		}
	}
</script>

<style lang="less">
	.represent_info_wrapper {
		width: 100%;
		padding-bottom: 100upx;

		.endorsement_nav {
			width: 100%;
			position: fixed;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			height: 120upx;
			background-color: transparent;
			padding: 44upx 19upx;
			box-sizing: border-box;
			z-index: 999;

			.endorsement_nav_arrow {
				width: 19upx;
				height: 36upx;
			}

			.endorsement_nav_title {
				height: 100%;
				line-height: 36upx;
				font-size: 36upx;
				font-family: PingFang-SC-Bold;
				font-weight: bold;
				color: white;
			}

			.endorsement_nav_right {
				width: 19upx;
				height: 36upx;
			}
		}

		.endorsement_container {
			width: 100%;

			image {
				width: 100%;
			}


		}
	}
</style>
