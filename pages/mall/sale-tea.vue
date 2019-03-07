<template>
	<view class="main">
		<view class="header">
			<view class="title">
				限时秒杀
			</view>
			<view class="subtitle">
				超值最低价 优惠好茶
			</view>
		</view>
		
		<view class="selectheader">
			<view class="selectback">
				<view class="selectleftbtn" v-bind:class="[activeSegment===0?selectedclass:unselectedclass]" @click="didselected">今日秒杀</view>
				<view class="selectrightbtn" v-bind:class="[activeSegment===1?selectedclass:unselectedclass]" @click="didselected">明日预告</view>
			</view>
			<view class="countdown">23：15：24.12</view>
		</view>
		<scroll-view scroll-x>
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
		</scroll-view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
				}],
				activeSegment:0,
				selectedclass : {
					selected:true
				},
				unselectedclass : {
					unselected : true
				}
			}
		},
		computed: {
		}
		,
		methods: {
			didselected() {
				this.activeSegment=!this.activeSegment;
				console.log(this.activeSegment);
			}
		}
	}
</script>

<style lang="scss">
	.main {
		width: 100%;

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
		.selectheader {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			width: 100%;
			height:240upx;
			.selectback {
				display: flex;
				flex-direction: row;
				width: 400upx;
				height: 88upx;
				border-radius: 44upx;
				.selectleftbtn {
					display: flex;
					justify-content: center;
					align-items: center;
					width:200upx;
					height:88upx;
					border-style: solid;
					border-top-left-radius:44upx;
					border-bottom-left-radius: 44upx;
					border-color: #FF8279;
					border-width: 1upx;
					font-size: 26upx;
					font-weight: bold;
				}
				.selectrightbtn {
					display: flex;
					justify-content: center;
					align-items: center;
					width:200upx;
					height:88upx;
					border-style: solid;
					border-top-right-radius: 44upx;
					border-bottom-right-radius: 44upx;
					border-color: #FF8279;
					border-width: 1upx;
					font-size: 26upx;
					font-weight: bold;
				}
				.selected {
					background-color: #FF8279;
					color: #FFFFFF;
				}
				.unselected {
					background-color: white;
					color: #FF8279;
				}
			}
			.countdown {
				margin-top: 32upx;
				font-size: 26upx;
				color: #FF8279;
				
			}
		}
		.scroll-list {
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
