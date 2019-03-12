<template>
	<view class="search_box">
		<view class="search_box_left" @click="goMain">
			<image :src="icon_return"></image>
		</view>
		<view class="search_box_right">
			<view class="search_box_right_input">
				<image :src="icon_search"></image>
				<view>搜索商品或品牌</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				icon_return: "/static/img/icon_return.png",
				icon_search: "/static/main/mall_icon_search.png",
			}
		},
		methods:{
			goMain(){
				uni.navigateTo({
					url:"../../main/main"
				})
			}
		}
	}
</script>


<style lang="less">
	.search_box {
		height: 90upx;
		width: 100%;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		box-shadow: 0upx 0upx 22upx 2upx rgba(201, 201, 201, 0.42);

		.search_box_left {
			width: 76upx;
			height: 60upx;
			box-sizing: border-box;
			display: flex;
			align-items: center;
			
			image {
				width: 19upx;
				height: 36upx;
				box-sizing: border-box;
			}
		}

		.search_box_right {
			flex-basis: 85%;

			.search_box_right_input {
				width: 95%;
				height: 60upx;
				line-height: 60upx;
				background: rgba(244, 248, 251, 1);
				border-radius: 4upx;
				font-size: 28upx;
				font-family: PingFang-SC-Regular;
				font-weight: 400;
				color: rgba(153, 153, 153, 1);
				padding-left: 28upx;
				box-sizing: border-box;
				display: flex;
				align-items: center;

				image {
					width: 28upx;
					height: 28upx;
					margin-right: 7upx;
					box-sizing: border-box;
				}
			}
		}
	}
</style>
