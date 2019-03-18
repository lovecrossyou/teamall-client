<template>
	<view class="user_wrapper">
		<view class="header_bg">
			<!-- 个人信息 -->
			<view class="person_info_area">
				<view class="person_img">
					<img src="http://qnimage.xiteng.com/zhulizhe.jpg" alt="" />
				</view>
				<view class="person_info_list">
					<view class="user_name_grade">
						<view class="user_name">开荒者朱理哲</view>
						<view class="user_grade">lv5</view>
					</view>
					<view class="num_details">
						<view class="user_attention">22 关注</view>
						<view class="user_fans">250 粉丝</view>
						<view class="praise_num">5216 获赞</view>
					</view>
				</view>
			</view>

			<!-- 发布 & 喜欢 & 代言 -->
			<view class="person_info_bottom_area">
				<view class="my_operation">
					<view class="operation_title">我的发布</view>
					<view class="operation_num">24</view>
				</view>
				<view class="my_operation">
					<view class="operation_title">我的喜欢</view>
					<view class="operation_num">555</view>
				</view>
				<view class="my_operation">
					<view class="operation_title">我的代言</view>
					<view class="operation_num">666</view>
				</view>
			</view>
		</view>

		<view class="white_bg">
			<view @click="toOrderList">
				<listItemTemplate title="我的订单" desc="全部订单"></listItemTemplate>
			</view>

			<view class="order_item">
				<orderOperation img="http://qnimage.xiteng.com/Center_icon_obligations@2x.png" operation="待付款"></orderOperation>
				<orderOperation img="http://qnimage.xiteng.com/center_icon_Dropship@2x.png" operation="待发货"></orderOperation>
				<orderOperation img="http://qnimage.xiteng.com/center_icon_receiving@2x.png" operation="待收货"></orderOperation>
				<orderOperation img="http://qnimage.xiteng.com/center_icon_evaluated@2x.png" operation="待评价"></orderOperation>
				<orderOperation img="http://qnimage.xiteng.com/center_icon_%20refund@2x.png" operation="退款/售后"></orderOperation>
			</view>

			<view class="bottom_list_wrapper">
				<view class="bottom_list_item">
					<img src="http://qnimage.xiteng.com/center_icon_Wallet@2x.png" class="right_icon" style="width: 36upx;height: 40upx;">
					<listItemTemplate title="我的钱包"></listItemTemplate>
				</view>
				<view class="bottom_list_item">
					<img src="http://qnimage.xiteng.com/center_icon_Coupon@2x.png" class="right_icon" style="width: 39upx;height: 33upx;">
					<listItemTemplate title="优惠券" desc="三张优惠券"></listItemTemplate>
				</view>
				<view class="bottom_list_item" @click="goNext">
					<img src="http://qnimage.xiteng.com/center_icon_store@2x.png" class="right_icon" style="width: 40upx;height: 34upx;">
					<listItemTemplate title="我要开店"></listItemTemplate>
				</view>
				<view class="bottom_list_item" @click="goSetting">
					<img src="http://qnimage.xiteng.com/center_icon_Setting@2x.png" class="right_icon" style="width: 40upx;height: 36upx;">
					<listItemTemplate title="设置"></listItemTemplate>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	import listItemTemplate from "@/components/user/listItemTemplate.vue";
	import orderOperation from "@/components/user/orderOperation.vue";
	export default {
		data() {
			return {

			}

		},
		components: {
			listItemTemplate,
			orderOperation

		},
		computed: {

		},
		methods: {
			goSetting() {
				uni.navigateTo({
					url: "../setting/setting"
				})
			},
			goNext() {
				uni.navigateTo({
					url: "/pages/order/order-confirm"
				})
			},
			toOrderList() {
				uni.navigateTo({
					url: "/pages/order/order-list"
				})
			}
		}
	}
</script>

<style>
	.user_wrapper {
		width: 100%;
	}

	.header_bg {
		width: 100%;
		height: 570upx;
		background: linear-gradient(0deg, rgba(255, 111, 99, 1), rgba(255, 138, 128, 1));
		padding: 99upx 0 0 0;
		box-sizing: border-box;
	}

	.person_info_area {
		width: 100%;
		height: 138upx;
		display: flex;
		flex-direction: row;
		padding: 0 40upx;
		box-sizing: border-box;
	}

	.person_img img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.person_img {
		width: 138upx;
		height: 138upx;
		border-radius: 50%;
		border: 2upx solid #FFF;
	}

	.person_info_list {
		width: 440upx;
		display: flex;
		flex-direction: column;
		margin-left: 25upx;
	}

	.user_name_grade {
		display: flex;
		flex-direction: row;
		margin-top: 15upx;
	}

	.user_name {
		font-size: 48upx;
		color: rgba(255, 255, 255, 1);
		font-family: PingFang-SC-Bold;
	}

	.user_grade {
		width: 52upx;
		height: 32upx;
		background: rgba(255, 210, 28, 1);
		box-shadow: 0 3upx 5upx 0 rgba(255, 210, 28, 0.41);
		border-radius: 4upx;
		font-size: 26upx;
		color: rgba(255, 255, 255, 1);
		line-height: 32upx;
		text-align: center;
		margin: 28upx 0 0 13upx;
	}

	.num_details {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		font-size: 28upx;
		color: #fff;
		margin-top: 21upx;
	}

	.person_info_bottom_area {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin-top: 60upx;
	}

	.my_operation {
		display: flex;
		flex: 1;
		flex-direction: column;
		border-right: 1upx solid #FB9C95;
	}

	.my_operation:nth-child(3) {
		display: flex;
		flex: 1;
		flex-direction: column;
		border-right: none;
	}

	.operation_title {
		width: 100%;
		text-align: center;
		font-size: 28upx;
		color: #fff;
	}

	.operation_num {
		font-size: 32upx;
		color: #fff;
		width: 100%;
		text-align: center;
		margin-top: 25upx;
	}

	.white_bg {
		width: 100%;
		height: 300upx;
		background-color: #fff;
		border-radius: 20upx 20px 0 0;
		margin-top: -130upx;
		padding: 40upx;
		box-sizing: border-box;
	}

	.order_item {
		width: 100%;
		height: 150upx;
		display: flex;
		flex-direction: row;
		margin-top: 46upx;
		border-bottom: 1upx solid #EAEAEA;
	}

	.bottom_list_wrapper {
		width: 100%;
		margin-top: 40upx;
	}

	.bottom_list_item {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin: 50upx 0;
	}

	.right_icon {
		margin-right: 23upx;
	}
</style>
