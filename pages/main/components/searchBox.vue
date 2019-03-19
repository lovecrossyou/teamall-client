<template>
	<view class="search_box">
		<view class="search_box_left" @click="goCategory">
			<image :src="mall_classification" alt="" />
			<view class="cate-title">分类</view>
		</view>
		<view class="search_box_right" @click="goSearchproduct">
			<view class="search_box_right_input">
				<image :src="mall_icon_search" alt="" />
				<view>大家正在搜：喝茶时间表</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mall_classification: "../../static/main/mall_icon_classification.png",
				mall_icon_search: "../../static/main/mall_icon_search.png",
			}
		},
		methods:{
			goCategory(){
				uni.navigateTo({
					url:"/pages/category/category"
				})
			},
			goSearchproduct(){
				uni.navigateTo({
					url:"/pages/main/components/searchProduct"
				})
			}
		}
	}
</script>


<style lang="less">
	.search_box {
		height: 90upx;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0upx 0upx 22upx 2upx rgba(201, 201, 201, 0.42);

		.search_box_left {
			flex-basis: 15%;
			font-size: 20upx;
			font-family: PingFang-SC-Medium;
			font-weight: 500;
			color: rgba(102, 102, 102, 1);
			text-align: center;
			margin-left: 20upx;
			.cate-title{
				margin-left: 10upx;
			}
			image {
				width: 32upx;
				height: 25upx;
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
