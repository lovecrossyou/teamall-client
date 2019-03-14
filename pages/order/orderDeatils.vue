<template>
	<view class="order_details_wrapper">
		<!-- 订单状态 -->
		<view class="order_details_header">
			<text class="commodity_status">卖家已发货</text>
			<text class="remaining_time">剩9小时59分自动收货</text>
		</view>
		<!-- 包裹状态 -->
		<view class="package_status_wrapper">
			<img
				src="http://qnimage.xiteng.com/prosperity_icon_car@2x.png"
				alt=""
				class="car_icon"
			/>
			<view class="package_status_info">
				<text class="package_status_text">包裹正在等待揽件</text>
				<text class="package_status_time">2019-1-10 16 ：40</text>
			</view>
		</view>
		<!-- 退款信息 -->
		<view class="refund_info_wrapper">
			<text class="title_text">退款信息</text>
			<view class="commodity_details_wrapper">
				<img
					src="http://qnimage.xiteng.com/_prosperity_img_1@2x.png"
					alt=""
					class="product_img"
				/>
				<view class="product_info">
					<view class="product_name">
						洞庭碧螺春洞庭碧螺春洞庭碧螺春洞庭 碧螺春洞庭碧螺春洞庭碧螺春
					</view>
					<view class="product_specification">规格6小包80g</view>
				</view>
			</view>
		</view>
		<view class="refund_btn_wrapper"><button class="refund_btn">退款</button></view>
		<!-- 支付详情 -->
		<view class="payment_area_wrapper">
			<paymentInfo paymentText="运费" paymentPrice="¥12"></paymentInfo>
			<paymentInfo paymentText="优惠券" paymentPrice="¥7"></paymentInfo>
			<paymentInfo paymentText="喜币折扣" paymentPrice="¥2"></paymentInfo>
			<paymentInfo paymentText="实付款" paymentPrice="¥500"></paymentInfo>
		</view>
		<!-- 订单详情 -->
		<view class="order_details_list">
			<view>订单编号：13456131454364163418543</view>
			<view>创建时间：2018-9-10 12：10</view>
			<view>成交时间：2018-9-10 14：25</view>
			<view>发货时间：2018-9-10 14：25</view>
		</view>
		<!-- 商品列表 -->
		<view class="product_wrapper">
			<block v-for="(product, index) in shopList" :key="index">
				<view class="home_top_selling_tea_item">
					<view class="home_top_selling_tea_item_img">
					  <img src="http://qnimage.xiteng.com/store_p@2x.png" alt=""/>
					</view>
					<view class="home_top_selling_tea_item_intro">
					  <view class="home_top_selling_tea_item_intro_content">自桃树乌龙茶15包组合自桃树乌龙茶15包组合</view>
					  <view class="home_top_selling_tea_item_intro_price">￥58.3</view>
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
import paymentInfo from '@/components/orderDetails/paymentInfo.vue';
export default {
	data() {
		return {
			shopList:[1,2,3,4]
		};
	},
	components: {
		paymentInfo
	},
	computed: {},
	methods: {}
};
</script>

<style scoped>
.order_details_wrapper {
	width: 100%;
	background-color: #f4f8fb;
}
.order_details_header {
	width: 100%;
	height: 200upx;
	background-color: #ff594b;
	padding: 50upx 0 0 33upx;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
}
.commodity_status {
	font-size: 44upx;
	font-weight: bold;
	color: #fff;
}
.remaining_time {
	font-size: 26upx;
	color: #fff;
	margin-top: 18upx;
}
.package_status_wrapper {
	width: 100%;
	height: 130upx;
	margin-top: 20upx;
	background-color: #fff;
	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0 30upx;
	box-sizing: border-box;
}
.car_icon {
	width: 55upx;
	height: 40upx;
}
.package_status_info {
	flex: 1;
	height: 70upx;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-left: 15upx;
}
.package_status_text {
	color: #2bb241;
	font-size: 26upx;
}
.package_status_time {
	color: #999;
	font-size: 24upx;
}
.refund_info_wrapper {
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-top: 20upx;
	background-color: #fff;
	padding: 30upx;
	box-sizing: border-box;
}
.title_text {
	color: #1f1f1f;
	font-size: 28upx;
}
.commodity_details_wrapper {
	width: 100%;
	display: flex;
	flex-direction: row;
	margin-top: 23upx;
}
.product_img {
	width: 160upx;
	height: 160upx;
}
.product_info {
	width: 475upx;
	margin-left: 18upx;
	display: flex;
	flex-direction: column;
}
.product_name {
	color: #333333;
	font-size: 28upx;
}
.product_specification {
	color: #999;
	font-size: 24upx;
	margin-top: 23upx;
}
.refund_btn_wrapper {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
	background-color: #fff;
}
.refund_btn {
	width: 140upx;
	height: 58upx;
	border: 1px solid rgba(213, 213, 213, 1);
	border-radius: 29px;
	line-height: 58upx;
	text-align: center;
	background-color: #fff;
	color: #999;
	font-size: 28upx;
	margin-left: 77%;
}
.payment_area_wrapper{
	width: 100%;
	background-color: #fff;
	padding:35upx 55upx 10upx 31upx;
	box-sizing: border-box;
}
.order_details_list{
	width: 100%;
	height: 242upx;
	background-color: #fff;
	padding: 32upx 30upx;
	box-sizing: border-box;
	margin-top: 20upx;
	color: #666;
	font-size: 24upx;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.product_wrapper{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 15upx;
    padding: 0 25upx 70upx 25upx;
    box-sizing: border-box;
}
.home_top_selling_tea_item{
  width:48%;
  background-color: #fff;
  margin-bottom: 20upx;
}
.home_top_selling_tea_item_img{
  border-radius:20upx;
}
.home_top_selling_tea_item_img,
.home_top_selling_tea_item_img img{
  width:100%;
  height:220upx;
}
.home_top_selling_tea_item_intro{
  font-size:28upx;
  font-weight:bold;
  color:rgba(31,31,31,1);
  margin-top:20upx;
}
.home_top_selling_tea_item_intro_content{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.home_top_selling_tea_item_intro_price{
  color:rgba(255,89,75,1);
  margin-top:26upx;
  margin-bottom:20upx;
}
</style>
