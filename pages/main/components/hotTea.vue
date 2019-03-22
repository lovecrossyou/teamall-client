<template>
	<view class="hot_tea_wrapper">
		<view class="hot_tea_tit">爆款工夫茶</view>
		<view class="hot_tea_content">
			<view class="hot_tea_item" v-for='(item,i) in selllingKungFuTeaList' :key='i' @click="goDetail">
				<view class="hot_tea_item_img">
					<image :src="item.imageUrl" alt="" />
				</view>
				<view class="hot_tea_item_intro">
					<view class="hot_tea_item_intro_content">{{item.name}}</view>
					<view class="hot_tea_item_intro_price">￥{{item.price}}</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import {mapState} from 'vuex';
	export default {
		computed:{
			...mapState({
				selllingKungFuTeaList:state=>state.main.selllingKungFuTeaList
			})
		},
		methods:{
			goDetail(){
				uni.navigateTo({
					url:"/pages/product/product"
				})
			}
		}
	}
</script>

<style lang="less">
	.hot_tea_wrapper {
		width: 100%;
		padding-left: 40upx;
		padding-right: 40upx;
		box-sizing: border-box;

		.hot_tea_tit {
			margin-top: 86upx;
			margin-bottom: 56upx;
			font-size: 44upx;
			font-family: PingFang-SC-Bold;
			color: rgba(31, 31, 31, 1);
		}

		.hot_tea_content {
			width: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;

			.hot_tea_item {
				width: 48%;
				background-color: #fff;
				.hot_tea_item_img {
					width: 100%;
					height: 220upx;
					border-radius: 20upx;

					image {
						width: 100%;
						height: 220upx;
					}

				}

				.hot_tea_item_intro {
					font-size: 28upx;
					font-family: PingFang-SC-Bold;
					font-weight: bold;
					color: rgba(31, 31, 31, 1);
					margin-top: 20upx;

					.hot_tea_item_intro_content {
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}

					.hot_tea_item_intro_price {
						color: rgba(255, 89, 75, 1);
						margin-top: 20upx;
					}
				}
			}
		}
	}
</style>
