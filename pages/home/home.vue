<template>
	<view class="water_fail_view">
		<block v-for="(product, index) in recommendList" :key="index">
			<view class="water_fail_product_item">
				<view class="water_fail_product_img">
					<img src="http://qnimage.xiteng.com/zhulizhe.jpg" alt="" />
				</view>
				<view class="water_fail_product_content">
					<view class="water_fail_product_tit">茶艺修行之礼仪篇</view>
					<view class="water_fail_product_intro">茶艺修行之礼仪篇茶艺修行之礼仪篇</view>
					<view class="water_fail_product_personal_data">
						<view class="water_fail_product_personal_data_img">
							<img src="http://qnimage.xiteng.com/zhulizhe.jpg" alt="" />
							<text>猪猪侠</text>
						</view>
						<view class="water_fail_product_personal_data_love">
							<img src="http://qnimage.xiteng.com/found_btn_nolike@2x.png" alt="" />
							<text>1294</text>
						</view>
					</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
export default {
	data() {
		return {
			recommendList:[1,2,3,4,5,6,7]
		};
	},
	components: {},
	computed: {},
	methods: {}
};
</script>

<style scoped>
.water_fail_view {
	width: 100%;
	padding:40upx 20upx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
.water_fail_product_item {
	width: 48%;
	border-radius: 4upx;
	font-size: 26upx;
	font-family: PingFang-SC-Medium;
	font-weight: 500;
	color: #333333;
	line-height: 34upx;
	margin-bottom: 20upx;
}
.water_fail_product_item .water_fail_product_img,
.water_fail_product_item .water_fail_product_img img {
	width: 100%;
}
.water_fail_product_content {
	width: 100%;
	padding-left: 20upx;
	padding-right: 20upx;
	box-sizing: border-box;
	background: #ffffff;
	box-shadow: 0upx 3upx 12upx 0upx rgba(219, 225, 230, 0.8);
}
.water_fail_product_tit {
	color: #333;
	font-size: 28upx;
	font-size: 28upx;
	padding-top: 16upx;
	margin-bottom: 10upx;
	box-sizing: border-box;
}
.water_fail_product_intro {
	color: #666;
	font-size: 26upx;
	width: 300upx;
	height: 30upx;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.water_fail_product_personal_data {
	padding-top: 20upx;
	padding-bottom: 20upx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
}
.water_fail_product_personal_data_img {
	display: flex;
	align-items: center;
	color: #333333;
	font-size: 26upx;
}
.water_fail_product_personal_data_img img {
	width: 50upx;
	height: 50upx;
	border-radius: 50%;
	overflow: hidden;
	margin-right: 6upx;
}
.water_fail_product_personal_data_love {
	display: flex;
	align-items: center;
	color: #333333;
	font-size: 26upx;
}
.water_fail_product_personal_data_love img {
	width: 28upx;
	height: 25upx;
	margin-right: 6upx;
}
</style>
