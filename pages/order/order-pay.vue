<template>
	<view class="container">
		<view class="order_content">
			<view class="order_pay_top">
				<view class="order_pay_top_time">支付剩余时间1:0:0</view>
				<view class="order_pay_top_amount">¥6.00</view>
			</view>
			<view >
				<block v-for="(channel,index) in paychannels" :key="index">
					<view class="p_option">
						<view class="p_option_left">
							<image v-bind:src="channel.icon" class="pay_icon">
							</image>
							<view class="p_option_title">{{channel.title}}</view>
						</view>
						<image v-if="selectIndex==index" v-bind:src="channel.selIcon" class="pay_icon_right" @click="selectIndex=index"></image>
						<image v-else v-bind:src="channel.unselIcon" class="pay_icon_right" @click="selectIndex=index"></image>
					</view>
				</block>	
			</view>
		</view>
		<view class="confirm_footer" @click="toPay(payResult)">确认支付</view>
	</view>
</template>

<script>
	import pay from '../../util/apis/pay.js';
	export default {
		methods:{
			toPay(callback) {
				pay.pay({
					provider:'wxpay',
					orderInfo:'orderInfo'
				},callback)
			},
			payResult(msg){
				console.log('支付结果:' + JSON.stringify(msg));
				uni.navigateTo({
					url: "/pages/order/order-pay-result"
				})
			}
		},	
		data() {
			return {
				selectIndex:0,
				paychannels:[{
                            icon: '../../static/order/pay_icon_weixin@2x.png',
                            selIcon: '../../static/order/pay_btn_selected_weixin@2x.png',
                            title: "微信支付",
                            unselIcon: '../../static/order/pay_btn@2x.png'
                            },
                            {
                            icon: '../../static/order/pay_icon_zhifubao@2x.png',
                            selIcon: '../../static/order/pay_btn_selected_zhifubao@2x.png',
                            title: "支付宝付款",
                            unselIcon: '../../static/order/pay_btn@2x.png'
                            }]
			}
		}
	}
</script>

<style lang="scss">
	.container {
        background-color: #f5f5f5;
		width: 100%;
		.order_content {
              height: 718upx;
              margin: 20upx 40upx;
              background-color: #ffffff;
              padding: 0 29upx;
			  border-radius: 20upx;
              box-sizing: border-box;
			  .order_pay_top {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    margin-bottom: 101upx;
					.order_pay_top_time {
                           margin-top: 6upx;
                           height: 23upx;
                           font-size: 24upx;
                           font-family: PingFang-SC-Medium;
                           font-weight: 500;
                           color: rgba(153, 153, 153, 1);
                           line-height: 23upx;
						   margin-top: 50upx
                    }
					.order_pay_top_amount {
                              margin-top: 39upx;
                              height: 55upx;
                              font-size: 73upx;
                              font-family: PingFang-SC-Bold;
                              font-weight: bold;
                              color: rgba(31, 31, 31, 1);
                              line-height: 73upx;
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
				   .pay_icon {
                           width: 38upx;
                           height: 38upx;
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
				.pay_icon_right {
                        width: 44upx;
                        height: 44upx;
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
