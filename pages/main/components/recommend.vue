<template>
	<view class="recommend_wrapper">
		<view class="recommend_item" v-for='(item,i) in recommendProductModelList' :key='i' @click="goProduct(item)">
			<view class="recommend_item_img">
				<image :src="item.imageUrl" alt="" />
			</view>
			<view class="recommend_item_intro">
				<view class="recommend_item_intro_content">{{item.name}}</view>
				<view class="recommend_item_intro_price">￥{{item.price}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex';
	export default {
		computed:{
			...mapState({
				recommendProductModelList:state=>state.main.recommendProductModelList
			})
		},
		methods:{
			goProduct(item){
				uni.navigateTo({
					url:"/pages/product/product"
				})
			}
		}
	}
</script>

<style lang="less">
	.recommend_wrapper {
		width: 100%;
		padding-top: 50upx;
		box-sizing: border-box;
		background: rgba(244, 248, 251, 1);
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding-left: 40upx;
		padding-right: 40upx;
		box-sizing: border-box;

		.recommend_item {
			flex-basis: 48%;
			height: 508upx;
			background: rgba(255, 255, 255, 1);
			border-radius: 10upx;
			overflow: hidden;
			margin-bottom: 30upx;

			.recommend_item_img {
				width: 100%;
				height: 344upx;

				image {
					width: 100%;
					height: 344upx;
				}
			}

			.recommend_item_intro {
				width: 100%;
				font-size: 28upx;
				font-family: PingFang-SC-Bold;
				font-weight: bold;
				color: rgba(31, 31, 31, 1);
				padding: 20upx 14upx;
				box-sizing: border-box;

				.recommend_item_intro_content {
					width: 100%;
					height: 42px;
					overflow: hidden;
					text-overflow: ellipsis;
				}

				.recommend_item_intro_price {
					color: rgba(255, 89, 75, 1);
					margin-top: 10upx;
				}
			}
		}
	}
</style>
