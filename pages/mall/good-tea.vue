<template>
	<view class="main">
		<view class='endorsement_nav' @click="goBack">
			<image class="endorsement_nav_arrow" :src="nav_right" ></image>
			<view class='endorsement_nav_title'>好茶试饮</view>
			<view class='endorsement_nav_right' />
		</view>
		<view class="header">
			<view class="title">
				好茶试饮
			</view>
			<view class="subtitle">
				新用户福利 人气种草好茶免费送
			</view>
		</view>
		<view class="product-list">
			<block v-for="(product,index) in list" :key="index">
				<view class="p-item">
					<image v-bind:src="pIcon" class="p-icon">
					</image>
					<view class="p-info">
						<view class="p-name">
							{{product.name}}
						</view>
						<view class="p-desc">
							{{product.desc}}
						</view>
						<view class="p-footer-wrapper">
							<view class="price">
								{{product.price}}
							</view>
							<image v-bind:src="cartIcon" class="cart">

							</image>
						</view>
					</view>

				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		methods:{
			goBack(){
				uni.navigateBack();
			}
		},
		data() {
			return {
				nav_right: "../../static/represent/nav_right.png",
				pIcon: '../../static/mall/goodtea_p.png',
				cartIcon: '../../static/mall/goodtea_btn_shopping.png',
				list: [{
					name: '蜜桃乌龙茶花果茶买2送1白桃乌龙茶15包组',
					price: '￥9.9',
					desc: '热泡、冷泡随心泡买二送一 ',
				}, {
					name: '蜜桃乌龙茶花果茶买2送1白桃乌龙茶15包组',
					price: '￥10',
					desc: '热泡、冷泡随心泡买二送一 ',
				},{
					name: '蜜桃乌龙茶花果茶买2送1白桃乌龙茶15包组',
					price: '￥9.9',
					desc: '热泡、冷泡随心泡买二送一 ',
				}, {
					name: '蜜桃乌龙茶花果茶买2送1白桃乌龙茶15包组',
					price: '￥10',
					desc: '热泡、冷泡随心泡买二送一 ',
				},{
					name: '蜜桃乌龙茶花果茶买2送1白桃乌龙茶15包组',
					price: '￥9.9',
					desc: '热泡、冷泡随心泡买二送一 ',
				}, {
					name: '蜜桃乌龙茶花果茶买2送1白桃乌龙茶15包组',
					price: '￥10',
					desc: '热泡、冷泡随心泡买二送一 ',
				}]
			}
		}
	}
</script>

<style lang="scss">
	.main {
		width: 100%;
		
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

		.header {
			height: 372upx;
			width: 100%;
			background: url('http://qnimage.xiteng.com/goodtea_top_bg.png') no-repeat;
			background-size: 100% 372upx;
			position: relative;

			.title {
				font-size: 60upx;
				font-family: PingFang-SC-Bold;
				font-weight: bold;
				color: rgba(255, 255, 255, 1);
				position: absolute;
				bottom: 133upx;
				left: 65upx;
			}

			.subtitle {
				font-size: 28upx;
				font-family: PingFang-SC-Regular;
				font-weight: 400;
				color: rgba(255, 255, 255, 1);
				position: absolute;
				bottom: 72upx;
				left: 65upx;
			}
		}

		.product-list {
			.p-item {
				padding: 33upx 33upx 44upx 36upx;
				display: flex;
				flex-direction: row;
				align-items: center;
				border-bottom: solid 1upx #EAEAEA;

				// box-sizing: border-box;
				.p-icon {
					width: 296upx;
					height: 208upx;
				}

				.p-info {
					display: flex;
					flex: 1;
					padding-left: 32upx;
					flex-direction: column;

					.p-name {
						font-weight: bold;
						color: rgba(31, 31, 31, 1);
						font-size: 28upx;
					}

					.p-desc {
						margin-top: 23upx;
						font-size: 24upx;
						font-family: PingFang-SC-Regular;
						font-weight: 400;
						color: rgba(102, 102, 102, 1);
						line-height: 30upx;
					}

					.p-footer-wrapper {
						display: flex;
						flex-direction: row;
						height: 64upx;
						justify-content: space-between;
						align-items: center;

						.price {
							font-size: 32upx;
							font-family: PingFang-SC-Bold;
							font-weight: bold;
							color: rgba(255, 89, 75, 1);
						}

						.cart {
							width: 64upx;
							height: 64upx;
						}
					}
				}
			}
		}
	}
</style>
