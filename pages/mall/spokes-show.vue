<template>
	<view class="main">
		<view class="header">
			<view class="personInfo">
				<image v-bind:src="pIcon" class="userImg"></image>
				<view class="info">
					<view class="userName">圆蒸锅</view>
					<view class="description">代言20款商品 3个店铺</view>
				</view>
			</view>
			<view class="select">
				<view class="selectTitle">店铺</view>
				<view class="selectTitle">商品</view>
			</view>
		</view>
		<view class="space"></view>
		<view class="shopList">
			<block v-for="(shop,index) in list" :key="index">
							<view class="item">
					<view class="back">
						<image v-bind:src="shopImg" class="image"></image>
						<view class="content">
							<view class="nameCount">
								<view class="shopName">{{shop.shopName}}</view>
								<view class="productCount">在售商品{{shop.productCount}}</view>
							</view>
							<view class="rightTurn">
								<view class="turnToShop">进店逛逛</view>
								<image v-bind:src="turnImg" class="turnToImg"></image>
							</view>
						</view>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pIcon: '../../static/mall/goodtea_p.png',
				turnImg: '../../static/mall/btn_right.png',
				shopImg: '../../static/mall/spokes_shopImg.png',
				list: [{
					shopImg: '../../static/mall/spokes_shopImg.png',
					shopName: '张一元旗舰店',
					productCount: '256',
				}, {
					shopImg: '../../static/mall/spokes_shopImg.png',
					shopName: '张二元旗舰店',
					productCount: '257',
				}, {
					shopImg: '../../static/mall/spokes_shopImg.png',
					shopName: '张三元旗舰店',
					productCount: '258',
				}],
			}
		},
		computed: {
		}
		,
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.main {
		width:100%;
		.space {
			display: flex;
			width: 100%;
			height: 34upx;
			background-color: #999999;
		}
		.header {
			display: flex;
			flex: 1;
			flex-direction: column;
			align-items: center; 
			width: 100%;
			height: 380upx;
			background-color: #0A0909;
			.personInfo {
				display: flex;
				width: 100%;
				align-items: center;
				height: 120upx;
				margin-top: 150upx;
				// margin-left: 30upx;
				.userImg {
					width: 120upx;
					height: 120upx;
					margin-left: 30upx;
					border-style: solid;
					border-radius: 60upx;
				}
				.info {
					flex-direction: column;
					justify-content: space-between;
					height : 80upx;
					margin-left: 24upx;
					.userName {
						font-size: 36upx;
						font-weight: bold;
						color: white;
					}
					.description {
						font-size: 26upx;
						color: white;
					}
				}
			}
			.select {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				width: 280upx; 
				height: 32upx;
				margin-top: 42upx;
				.selectTitle {
					font-size: 30upx;
					font-weight: bold;
					color: white;
				}
			}
		}
		.shopList {
			background-color: #999999;
			.item {
				display: flex;
				justify-content: center;
				flex: 1;
				height: 156upx;
				background-color: #999999;
				padding-left: 32upx;
				padding-right: 32upx;
				padding-bottom: 20upx;
				.back {
					display: flex;
					flex: 1;
					flex-direction: row;
					align-items: center;
					// height: 136upx;
					border-radius: 6upx;
					background-color: white;
					.iamge {
						width: 120upx;
						height: 100upx;
						margin-left: 32upx;
						background-color: #333333;
					}
					.content {
						display: flex;
						flex: 1;
						flex-direction: row;
						justify-content: space-between;
						align-items: center;
						height: 68upx;
						padding-left: 24upx;
						padding-right: 32upx;
						background-color: white;
						.nameCount {
							flex-direction: column;
							justify-content: space-between;
							height: 68upx;
							.shopName {
								font-size: 28upx;
								font-family: 'PingFang-SC-Medium';
								color: #333333;
							}
							.productCount {
								font-size: 26upx;
								font-family: 'PingFang-SC-Medium';
								color: #999999;
							}
						}
						.rightTurn {
							display: flex;
							flex-direction: row;
							justify-content: space-between;
							align-items: center;
							width: 140upx;
							height: 30upx;
							.turnToShop {
								font-size: 26upx;
								font-family: 'PingFang-SC-Medium';
								color: #333333;
							}
							.turnToImg {
								width: 14upx;
								height: 24upx;
							}
						}
					}
				}
			}
		}
	}
</style>
