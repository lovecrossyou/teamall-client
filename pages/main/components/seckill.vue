<template>
	<view class="seckill_wrapper">
		<view class="seckill_tit">
			<view class="seckill_tit_left" @click="sale">限时秒杀</view>
			<view class="seckill_tit_right">
				<view class="seckill_tit_right_item">{{countDownTime}}</view>:
				<view class="seckill_tit_right_item">23</view>:
				<view class="seckill_tit_right_item">11.11</view>
			</view>
		</view>
		<view class="seckill_content">
			<view class="seckill_content_item" v-for='(item,i) in seckKillProduct' :key='i' @click="goDetail(item.productId)">
				<view class="seckill_content_item_img">
					<image :src="item.imageUrl" alt="" />
				</view>
				<view class="seckill_content_item_intro">
					<view class="seckill_content_item_intro_content">{{item.productName}}</view>
					<view class="seckill_content_item_intro_price">￥{{item.productPrice}}</view>
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
				countDownTime:state=>state.main.countDownTime,
				seckKillProduct:state=>state.main.seckKillProduct,
			})
		},
		onLoad(opt) {
// 			setInterval(()=>{
// 				this.$store.commit('main/updateTimer');
// 			},1000);
		},
		methods: {
			sale() {
				uni.navigateTo({
					url: "/pages/mall/sale-tea"
				})
			},
			goDetail(productId){
				uni.navigateTo({
					url:"/pages/product/product?productId="+productId
				})
			}
		}
	}
</script>

<style lang="less">
	.seckill_wrapper {
		width: 100%;
		margin-top: 86upx;
		margin-bottom: 56upx;
		padding-left: 40upx;
		box-sizing: border-box;

		.seckill_tit {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-right: 40upx;
			box-sizing: border-box;

			.seckill_tit_left {
				font-size: 44upx;
				font-family: PingFang-SC-Bold;
				color: rgba(31, 31, 31, 1);
			}

			.seckill_tit_right {
				color: rgba(255, 89, 75, 1);
				font-size: 28upx;

				.seckill_tit_right_item {
					display: inline-block;
					background: rgba(255, 89, 75, 1);
					color: rgba(255, 255, 255, 1);
					border-radius: 4upx;
					padding: 6upx;
					margin-left: 10upx;
					margin-right: 10upx;
				}
			}
		}

		.seckill_content {
			display: flex;
			align-items: center;
			margin-top: 45upx;
			background: #fff;
			overflow-x: scroll;

			.seckill_content_item {
				width: 252upx;
				margin-right: 13upx;

				.seckill_content_item_img {
					width: 252upx;
					height: 240upx;
					border-radius: 20upx;

					image {
						width: 252upx;
						height: 240upx;
					}
				}

				.seckill_content_item_intro {
					width: 252upx;
					font-size: 28upx;
					font-family: PingFang-SC-Bold;
					font-weight: bold;
					color: rgba(31, 31, 31, 1);
					margin-top: 20upx;

					.seckill_content_item_intro_content {
						overflow: hidden;
						text-overflow: ellipsis;
						white-space: nowrap;
					}

					.seckill_content_item_intro_price {
						color: rgba(255, 89, 75, 1);
						margin-top: 20upx;
					}
				}
			}
		}


	}
</style>
