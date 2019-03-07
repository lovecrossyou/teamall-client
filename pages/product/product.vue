<template>
	<view class="main">
		<!-- 顶部导航 -->
		<view class="header">
			<view class="left-arrow">
			</view>
			<view class="title-wrapper">
				<view class="title">
					商品008
				</view>
				<view class="title">
					详情
				</view>
				<view class="title">
					评价
				</view>
			</view>
			<view class="share">
				<image :src="shareIcon"></image>
			</view>
		</view>
		<!-- 轮播 -->
		<view class="scroll-wrapper">
			<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item>
					<view class="swiper-item">
						<image :src="product_image"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image :src="product_image"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>

		<!-- 价格 倒计时 -->
		<view class="price-section">
			<view class="left">
				<view class="price">

				</view>
				<view class="number">

				</view>
			</view>
			<view class="right">
				<view class="price">

				</view>
				<view class="number">

				</view>
			</view>
		</view>

		<!-- 底部菜单 -->
		<view class="footer">
			<view class="shop">
				<image :src="mall_icon"></image>
				<view class="name">
					店铺
				</view>
			</view>
			<view class="contact">
				<image :src="service_icon"></image>
				<view class="name">
					客服
				</view>
			</view>
			<view class="right">
				<view class="cart">
					加入购物车
				</view>
				<view class="buy" @click="toPay">
					立即购买
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		methods:{
			toPay() {
				uni.navigateTo({
					url: "/pages/order/order-confirm"
				})
			}
		},
		data() {
			return {
				returnIcon: "../../static/product/icon_return.png",
				shareIcon: "../../static/product/icon_share.png",
				product_image: "../../static/product/product_image.png",
				indicatorDots: true,
				autoplay: true,
				interval: 2000,
				duration: 500,
				mall_icon: "../../static/product/bottom_icon_mall.png",
				service_icon: "../../static/product/bottom_icon_service.png"
			};
		}
	}
</script>

<style lang="less">
	.main {
		width: 100%;

		.header {
			padding: 0 24upx;
			box-sizing: border-box;
			height: 96upx;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;

			.left-arrow {
				image {
					width: 19upx;
					height: 36upx;
				}
			}

			.title-wrapper {
				display: flex;
				flex-direction: row;
				justify-content: space-around;
				align-items: center;
				width: 267upx;

				.title {
					font-size: 32upx;
					color: #333;
				}
			}

			.share {
				image {
					width: 36upx;
					height: 30upx;
				}
			}
		}

		.scroll-wrapper {
			height: 700upx;
			width: 100%;

			.swiper {
				width: 100%;
				height: 100%;

				.swiper-item {
					image {
						width: 100%;
						height: 700upx;
					}
				}
			}
		}

		.price-section {}

		.footer {
			height: 102upx;
			display: flex;
			position: fixed;
			bottom: 0;
			left: 0;
			right: 0;

			.shop {
				width: 116upx;
				height: 100%;
				display: flex;
				justify-content: space-around;
				align-items: center;
				flex-direction: column;

				.name {
					font-size: 24upx;
					color: #333;
				}

				image {
					width: 40upx;
					height: 40upx;
				}
			}

			.contact {
				width: 116upx;
				height: 100%;
				flex-direction: column;
				display: flex;
				justify-content: space-around;
				align-items: center;

				.name {
					color: #333;
					font-size: 24upx;
				}

				image {
					width: 40upx;
					height: 40upx;
				}
			}

			.right {
				display: flex;
				flex: 1;
				flex-direction: row;

				.cart {
					flex: 1;
					color: #fff;
					background: rgba(255, 121, 110, 1);
					font-size: 32upx;
					text-align: center;

					line-height: 102upx;
				}

				.buy {
					flex: 1;
					background: rgba(255, 89, 75, 1);
					color: #fff;
					font-size: 32upx;
					text-align: center;
					line-height: 102upx;
				}
			}
		}
	}
</style>
