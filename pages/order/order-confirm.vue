<template>
	<view class="main">
		<view class="ordercontent">
			<view class="addr" @click="selectAddress">
				<image v-bind:src="addIcon" class="addr_icon"></image>
				<view class="addr_info">
					<view class="addr_info_position">北京市西城区百万庄大街粮科大厦</view>
					<view class="addr_info_phone">15210963519</view>
				</view>
				<uni-icon type="arrowright" size="20"></uni-icon>
			</view>
			<view>
				<view class="shop_info">
					<image v-bind:src="storeIcon" class="product_shop_icon"></image>
					<view class="shop_info_name">茶茶旗舰店</view>
				</view>
				<view class="p_info">
					<image v-bind:src="storeIcon" class="p_icon"></image>
					<view class="p_info_wrapper">
						<view class="p_name">
							买一送一】蜜桃乌龙茶 白桃乌龙蜜 茶三角茶包水果味茶蜜桃茶
						</view>
						<view class="p_special">规格：45G</view>
					</view>
				</view>
			</view>
			<view class="p_option">
					<view class="p_option_left">
						<image v-bind:src="numIcon" class="p_option_icon"></image>
						<view class="p_option_title">购买数量</view>
					</view>
					<uni-number-box></uni-number-box>
			</view>
			<view class="p_option">
				<view class="p_option_left">
						<image v-bind:src="distributionIcon" class="p_option_icon"></image>
						<view class="p_option_title">配送方式</view>
				</view>
				<view style="font-size:28upx">快递¥6.00</view>
			</view>
			<view class="p_option">
				<view class="p_option_left">
					<image v-bind:src="couponsIcon" class="p_option_icon"></image>
                    <view class="p_option_title">优惠券</view>
				</view>
				<view style="display: flex;flex-direction: row;align-items: center;">
					<view style="font-size:28upx">暂无可用优惠券</view>
                    <uni-icon type="arrowright" size="20"></uni-icon>
				</view>
			</view>
		</view>
		<view class="p_opt_footer">
			<view class="p_option">
				<view class="p_option_left">
					<image v-bind:src="moneyIcon" class="p_option_icon"></image>
				    <view class="p_option_title">实付款</view>
				</view>
				<view style="font-size: 28upx;color: #FF594B;">¥6.00</view>
			</view>
		</view>
		<view class="confirm_footer" @click="toPay">去支付</view>
	</view>
</template>

<script>
import uniNumberBox from "@/components/uni-number-box/uni-number-box.vue"
import uniIcon from "@/components/uni-icon/uni-icon.vue"
export default {
	methods:{
		toPay() {
			uni.navigateTo({
				url: "/pages/order/order-pay"
			})
		},
		selectAddress(){
			uni.navigateTo({
				url: "/pages/address/address"
			})
		}
	},
	components: {uniNumberBox,uniIcon},
	data() {
		return {
			addIcon: '../../static/order/order_icon_address@2x.png',
			arrowRight: '../../static/order/order_icon_next@2x.png',
			storeIcon: '../../static/order/order_icon_stor@2x.png',
			numIcon:'../../static/order/order_icon_number@2x.png',
			distributionIcon:'../../static/order/order_icon_distribution@2x.png',
			couponsIcon:'../../static/order/order_icon_coupons@2x.png',
			moneyIcon:'../../static/order/order_icon_money@2x.png'
		};
	}
};
</script>

<style lang="scss">
.main {
	background-color: #f5f5f5;
	width: 100%;

	.ordercontent {
		background: rgba(255, 255, 255, 1);
		border-radius: 20upx;
		margin: 40upx 40upx 0upx 40upx;
		padding: 32upx;
		box-sizing: border-box;
		height: 800upx;

		.addr {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			box-sizing: border-box;
			height: 68px;

			.addr_icon {
				width: 29upx;
				height: 35upx;
			}
			.addr_info {
				display: flex;
				flex-direction: column;
				height: 68upx;

				.addr_info_position {
					height: 27upx;
					font-size: 28upx;
					font-family: PingFang-SC-Medium;
					font-weight: 500;
					color: rgba(31, 31, 31, 1);
					line-height: 27upx;
				}
				.addr_info_phone {
					height: 21upx;
					font-size: 28upx;
					font-family: PingFang-SC-Medium;
					font-weight: 500;
					color: rgba(153, 153, 153, 1);
					line-height: 21upx;
					margin-top: 19upx;
				}
			}

			.arrow_right {
				width: 29upx;
				height: 29upx;
			}
		}

		.shop_info {
			display: flex;
			flex-direction: row;
			align-items: center;
			margin-top: 39upx;

			.product_shop_icon {
				width: 29upx;
				height: 27upx;
			}
			.shop_info_name {
				height: 26upx;
				font-size: 28upx;
				font-family: PingFang-SC-Medium;
				font-weight: 500;
				color: rgba(31, 31, 31, 1);
				line-height: 26upx;
				margin-left: 17upx;
			}
		}
		.p_info {
			display: flex;
			flex-direction: row;
			height: 140upx;
			margin-top: 40upx;
			margin-bottom: 40upx;
			.p_icon {
				width: 140upx;
				height: 140upx;
				background-color: #cccccc;
			}
			.p_info_wrapper {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				padding-left: 23upx;
				box-sizing: border-box;
				.p_name {
					width: 440upx;
					height: 67upx;
					font-size: 28upx;
					font-family: PingFang-SC-Bold;
					font-weight: bold;
					color: rgba(31, 31, 31, 1);
					line-height: 40upx;
				}
				.p_special {
					height: 23upx;
					font-size: 24upx;
					font-family: PingFang-SC-Medium;
					font-weight: 500;
					color: rgba(153, 153, 153, 1);
				}
			}
		}
	}
	.p_option {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 117upx;
		.p_option_left {
             display: flex;
             flex-direction: row;
             align-items: center;
             height: 117upx;
			 .p_option_icon {
                   width: 28upx;
				   height: 28upx;
                }
				.p_option_title {
                    height: 97upx;
                    font-size: 28upx;
                    font-family: PingFang-SC-Medium;
                    font-weight: 500;
                    color: rgba(31, 31, 31, 1);
                    line-height: 97upx;
                    margin-left: 20upx;
                   }
           }
       }
	.p_opt_footer {
		height: 122upx;
		background: rgba(255, 255, 255, 1);
		border-radius: 20upx;
		margin-top: 17upx;
		margin-left: 40upx;
		margin-right: 40upx;
		padding-left: 32upx;
		padding-right: 32upx;
		box-sizing: border-box;
		.p_option_left {
		     display: flex;
		     flex-direction: row;
		     align-items: center;
		     height: 117upx;
			 .p_option_icon {
		           width: 28upx;
				   height: 28upx;
		        }
				.p_option_title {
		            height: 97upx;
		            font-size: 28upx;
		            font-family: PingFang-SC-Medium;
		            font-weight: 500;
		            color: rgba(31, 31, 31, 1);
		            line-height: 97upx;
		            margin-left: 20upx;
		           }
		   }
	}
	.confirm_footer {
		height: 98upx;
		background: rgba(255, 89, 75, 1);
		position: fixed;
		bottom: 0;
		width: 100%;
		font-size: 32upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		line-height: 98upx;
		text-align: center;
	}
}
</style>
