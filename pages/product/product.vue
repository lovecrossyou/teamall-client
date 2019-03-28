<template>
	<view class="main">
		<!-- 顶部导航 -->
		<view class="header">
			<view class="left-arrow"></view>
			<view class="title-wrapper">
				<view class="title">商品</view>
				<view class="title">详情</view>
				<view class="title">评价</view>
			</view>
			<view class="share"><image :src="shareIcon"></image></view>
		</view>
		<!-- 轮播 -->
		<view class="scroll-wrapper">
			<swiper
				class="swiper"
				:indicator-dots="indicatorDots"
				:autoplay="autoplay"
				:interval="interval"
				:duration="duration"
			>
				<swiper-item>
					<view class="swiper-item" v-for="(item, i) in imageUrlList" :key="i">
						<image :src="item"></image>
					</view>
				</swiper-item>
			</swiper>
		</view>

		<!-- 价格 倒计时 -->
		<view class="price-section">
			<view class="price-section-item">
				<view class="price">￥{{ productInfoModel.currentlyPrice }}</view>
				<view>距结束仅剩</view>
			</view>
			<view class="price-section-item">
				<view>152人购买</view>
				<view>22时30分44秒</view>
			</view>
		</view>

		<!-- 商品信息  -->
		<view class="product-info-title">
			<view>
				<span class="pinkage">{{ freight }}</span>
				<span>{{ productInfoModel.name }}</span>
			</view>
			<view class="product-info-guarantee">
				<view class="product-info-guarantee-item" v-for="(item, i) in commitment" :key="i">
					<image :src="icon_hook"></image>
					<view>{{ item }}</view>
				</view>
			</view>
		</view>
		<view class="product-info-parameter">
			<view class="product-info-parameter-item">
				<view>新人福利：领取新人专享福利</view>
				<image :src="left_btn"></image>
			</view>
			<view class="product-info-parameter-item">
				<view>优惠券</view>
				<image :src="left_btn"></image>
			</view>
			<view class="product-info-parameter-item">
				<view>{{ freight }}</view>
			</view>
			<view class="product-info-parameter-item">
				<view>产品参数</view>
				<image :src="left_btn"></image>
			</view>
		</view>
		<!-- 商品评论 -->
		<view class="product-comment-container">
			<view class="product-info-parameter-item">
				<view>商品评价（{{ commentAmount }}）</view>
				<image :src="left_btn"></image>
			</view>
			<view class="product-comment">
				<view
					class="product-comment-item"
					v-for="(commentUser, index) in commentModelList"
					:key="index"
				>
					<image :src="commentUser.userIcoin"></image>
					<view class="product-comment-item-message">
						<view>{{ commentUser.userName }}</view>
						<view class="add_time">
							<span class="add_time_left">{{ commentUser.time }}</span>
							<span>分类：{{ commentUser.category }}</span>
						</view>
						<view class="comment-content">{{ commentUser.content }}</view>
						<view class="comment-img">
							<block v-for="(item, i) in commentUser.imageUrlList" :key="i">
								<image :src="item"></image>
							</block>
						</view>
					</view>
				</view>
			</view>
		</view>

		<!-- 店铺 -->
		<view class="shop-wrapper">
			<view class="shop_info">
				<view class="left">
					<image :src="shopInfoModel.shopIocn"></image>
					<view class="name-wrapper">
						<view class="name">{{ shopInfoModel.shopName }}</view>
						<view class="number">全部宝贝：{{ shopInfoModel.productAmount }}</view>
					</view>
				</view>
				<view class="right" style="margin-top: 18upx;">
					<view class="all">全部宝贝</view>
					<view class="shop" @click="goShop">进店逛逛</view>
				</view>
			</view>
			<view class="des_info"></view>
			<view class="product_info">
				<view class="product-info-guarantee-item" v-for="i in [1, 2, 3]" :key="i">
					<view>宝贝描述：4.8</view>
					<image :src="icon_high"></image>
				</view>
			</view>
			<image :src="icon_high"></image>
		</view>

		<view class="maybe_like">你可能喜欢</view>
		<recommend></recommend>

		<!-- 底部菜单 -->
		<view class="footer">
			<view class="shop">
				<image :src="mall_icon"></image>
				<view class="name">店铺</view>
			</view>
			<view class="contact">
				<image :src="service_icon"></image>
				<view class="name">客服</view>
			</view>
			<view class="right">
				<view class="cart" @click="showBuyPopwindow">加入购物车</view>
				<view class="buy" @click="toPay">立即购买</view>
			</view>
		</view>
		<!-- 加入购物车弹窗 -->
		<view class="pop-window" v-if="popShowed" >
			<view class="top" @click="hideWindow">
				
			</view>
			<image class="product-icon"  :src="imageUrlList[0]"></image>
			<view class="window-content">
				<view class="price">￥{{productInfoModel.currentlyPrice}}</view>
				<view class="name">{{productInfoModel.name}}</view>
				<view class="size-title">规格</view>
				<view class="size-content">
					<view  v-for="(sizeText, index) in sizeList" :key="index" @click="changeSize(index)">
						<view class="size-selected" v-if="size === index">
							{{ sizeText }}
						</view>
							<view class="size" v-else>
							{{ sizeText }}
						</view>
					</view>
				</view>
				<view class="count-content">
					<text class="count-title">数量</text>
					<image v-bind:src="countLeft" class="choose-count" @click="reduce"></image>
					<text class="count">{{count}}</text>
					<image v-bind:src="countRight" class="choose-count" @click="plus"></image>
				</view>
				<view class="confirm-button" @click="addToCart">确定</view>
			</view>
		</view>
	</view>
</template>

<script>
import api from '../../util/api.js';
import { mapState } from 'vuex';
import recommend from '../main/components/recommend';
export default {
	computed: {
		...mapState({
			productInfoModel: state => state.product.productInfoModel,
			imageUrlList: state => state.product.imageUrlList,
			freight: state => state.product.freight,
			commentAmount: state => state.product.commentAmount,
			commentModelList: state => state.product.commentModelList,
			shopInfoModel: state => state.product.shopInfoModel
		})
	},
	methods: {
		goShop() {
			uni.navigateTo({
				url: '/pages/storeDetails/storeDetails'
			});
		},
		toPay() {
			uni.navigateTo({
				url: '/pages/order/order-confirm'
			});
		},
		async fetchProductDetails(productId) {
			const res = await api.productDetails({
				accessInfo: {},
				productId: productId
			});
			this.$store.commit('product/setProductDetails', res);
		},
		showBuyPopwindow(){
			this.size = 0;
			this.count =1;
			this.popShowed = true;
		},
		addToCart() {
			
			api.addToCart({
				accessInfo: {},
				productId: this.productId,
				byCount: this.count
			}).then(res => {
				if(res){
					uni.showToast({
						title:'添加成功'
					})
				}else{
					uni.showToast({
						title:'添加失败'
					})
				}
				this.popShowed = false;
				
			});
		},
		changeSize(index){
			this.size = index;
		},
		reduce(){
			if(this.count > 1){
				this.count -= 1;
			}
			
		},
		plus(){
			this.count += 1;
		},
		hideWindow(){
			this.popShowed = false;
		}
	},
	data() {
		return {
			returnIcon: '../../static/product/icon_return.png',
			shareIcon: '../../static/product/icon_share.png',
			product_image: '../../static/product/product_image.png',
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500,
			mall_icon: '../../static/product/bottom_icon_mall.png',
			service_icon: '../../static/product/bottom_icon_service.png',
			shop_icon: '../../static/product/store_logo.png',
			icon_hook: '../../static/product/icon_hook.png',
			left_btn: '../../static/product/left_btn.png',
			evaluation_head: '../../static/product/evaluation_head.png',
			icon_high: '../../static/product/icon_high.png',
			like_product: '../../static/product/like_product.png',
			commitment: ['破损包退', '正品保证', '七天退换', '极速退款'],
			productId: 0,
			sizeList: ['50g', '100g', '150g'],
			countLeft: '../../static/product/count_left.png',
			countRight: '../../static/product/count_right.png',
			popShowed:false,
			count:1,
			size:0,
		};
	},
	components: {
		recommend
	},
	onLoad(opt) {
		console.log('productId==========', opt.productId);
		this.fetchProductDetails(opt.productId);
		this.productId = opt.productId;
	}
};
</script>

<style lang="less">
.main {
	width: 100%;
	background-color: #f4f8fb;
	padding-bottom: 102upx;

	.header {
		padding: 44upx 24upx;
		box-sizing: border-box;
		// height: 96upx;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		background: #fff;

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

	.price-section {
		height: 126upx;
		background: #ff594b;
		color: #ffffff;
		font-size: 28upx;
		padding: 20upx 24upx 0 24upx;
		box-sizing: border-box;

		.price-section-item {
			display: flex;
			align-items: center;
			justify-content: space-between;

			.price {
				font-size: 40upx;
			}
		}
	}

	.product-info-title {
		font-size: 28upx;
		line-height: 1.5;
		background: #ffffff;
		padding: 22upx;
		box-sizing: border-box;

		.pinkage {
			display: inline-block;
			height: 36upx;
			line-height: 36upx;
			text-align: center;
			background: #ff594b;
			border-radius: 6upx;
			color: #ffffff;
			font-size: 24upx;
			margin-right: 8upx;
			padding-left: 10upx;
			padding-right: 10upx;
		}

		.product-info-guarantee {
			display: flex;
			align-items: center;
			justify-content: space-around;
			margin-top: 20upx;

			.product-info-guarantee-item {
				display: flex;
				align-items: center;

				image {
					width: 28upx;
					height: 28upx;
					margin-right: 12upx;
				}
			}
		}
	}

	.product-info-parameter {
		margin-top: 10upx;
		background: #ffffff;
		padding-left: 22upx;
		box-sizing: border-box;

		.product-info-parameter-item {
			height: 86upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-right: 22upx;
			font-size: 28upx;
			font-weight: 400;
			color: #333333;
			border-bottom: 1upx solid #eaeaea;

			image {
				width: 14upx;
				height: 28upx;
			}
		}

		:nth-child(4) {
			border: none;
		}
	}

	.product-comment-container {
		margin-top: 10upx;
		background: #ffffff;
		padding: 0 22upx;
		box-sizing: border-box;

		.product-info-parameter-item {
			height: 94upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			padding-right: 22upx;
			font-size: 32upx;
			font-weight: 500;
			color: #333333;

			image {
				width: 14upx;
				height: 28upx;
			}
		}

		.product-comment {
			.product-comment-item {
				display: flex;
				font-size: 28upx;

				image {
					width: 68upx;
					height: 68upx;
					border-radius: 50%;
					margin-right: 16upx;
				}

				.product-comment-item-message {
					padding-bottom: 32upx;

					.add_time {
						font-size: 24upx;
						font-family: PingFang-SC-Regular;
						font-weight: 400;
						color: rgba(153, 153, 153, 1);
						margin-top: 10upx;
						margin-bottom: 22upx;
						.add_time_left {
							padding-right: 22upx;
						}
					}

					.comment-content {
						line-height: 1.5;
					}

					.comment-img {
						margin-top: 22upx;

						image {
							width: 148upx;
							height: 148upx;
							border-radius: 4upx;
						}
					}
				}
			}
		}
	}

	.shop-wrapper {
		padding: 30upx 24upx;
		box-sizing: border-box;
		background: #ffffff;
		margin-top: 10upx;

		.shop_info {
			display: flex;
			flex-direction: row;
			align-items: center;

			.left {
				display: flex;
				flex-direction: row;
				align-items: center;

				image {
					width: 76upx;
					height: 74upx;
				}

				.name-wrapper {
					margin-left: 12upx;
					display: flex;
					flex-direction: column;

					.name {
						font-size: 32upx;
						font-family: PingFang-SC-Medium;
						font-weight: 500;
						color: rgba(51, 51, 51, 1);
					}

					.number {
						font-size: 24upx;
						font-family: PingFang-SC-Medium;
						font-weight: 500;
						color: rgba(153, 153, 153, 1);
					}
				}
			}

			.right {
				display: flex;
				flex: 1;
				justify-content: flex-end;

				.shop {
					width: 140upx;
					height: 48upx;
					background: rgba(255, 89, 75, 1);
					border-radius: 24upx;
					color: #fff;
					font-size: 24upx;
					text-align: center;
					line-height: 48upx;
				}

				.all {
					margin-right: 20upx;
					width: 140upx;
					height: 48upx;
					background: rgba(188, 188, 188, 0);
					border: 1upx solid rgba(255, 89, 75, 1);
					border-radius: 24upx;
					color: #ff594b;
					font-size: 24upx;
					text-align: center;
					line-height: 48upx;
				}
			}
		}

		.des_info {
		}

		.product_info {
			display: flex;
			justify-content: space-around;
			align-items: center;
			margin: 28upx 0;

			.product-info-guarantee-item {
				display: flex;
				align-items: center;
				font-size: 24upx;

				image {
					width: 28upx;
					height: 28upx;
					margin-left: 12upx;
				}
			}
		}

		image {
			width: 100%;
			height: 500upx;
		}
	}

	.maybe_like {
		font-size: 32upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		padding-left: 40upx;
		margin-top: 48upx;
	}

	.footer {
		height: 102upx;
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background: #ffffff;

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
	.pop-window {
		width: 100%;
		height: 100%;
		display: flex;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(19, 21, 22, 0.78);
		z-index: 100;
		flex-direction: column;
		.top{
			flex: 1;
			width: 100%;
			
		}
		.product-icon {
			width: 236upx;
			height: 236upx;
			position: absolute;
			bottom: 525upx;
			left: 45upx;
			border: 1upx solid #eaeaea;
		}
		.window-content {
			
			display: flex;
			background: rgba(255, 255, 255, 1);
			flex-direction: column;
			
			
			.price {
				margin-left: 298upx;
				font-size: 35upx;
				font-family: PingFang-SC-Bold;
				font-weight: bold;
				color: rgba(255, 89, 75, 1);
			}
			.name{

font-size:24upx;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(51,51,51,1);
margin-left: 298upx;
margin-right: 27upx;
			}
			.size-title{
margin-left: 45upx;
font-size:32upx;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(31,31,31,1);
margin-top: 90upx;
			}
			.size-content{
				margin-left: 45upx;
				display: flex;
				padding-top: 47upx;
				padding-bottom: 68upx;
				
				
				.size{
					margin-right: 32upx;
					padding-left: 45upx;
					padding-right: 45upx;
height:52upx;
background:rgba(236,236,236,1);
border-radius:24px;



				}
				.size-selected{
								margin-right: 32upx;
													padding-left: 45upx;
													padding-right: 45upx;
								height:52upx;
								background:rgba(236,236,236,1);
								border-radius:24px;
									border: 2upx solid #FF594B;
								}
			}
			.count-content{
				margin-left: 45upx;
				margin-right: 45upx;
				display: flex;
				padding-top: 67upx;
				padding-bottom: 67upx;
				.count-title{
					flex: 1;
				}
				text{
		
font-size:32upx;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(31,31,31,1);
				}
				.count{
					padding-left: 21upx;
					padding-right: 21upx;
				}
				.choose-count{
					width: 79upx;
					height: 48upx;
				}
			}
			.confirm-button{
				width:100%;
height:98upx;
background:rgba(255,89,75,1);

font-size:32upx;
font-family:PingFang-SC-Medium;
font-weight:500;
color:rgba(255,255,255,1);
display: flex;
justify-content: center;
align-items: center;
			}
		}
	}
}
</style>
