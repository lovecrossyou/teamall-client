<template>
	<view class="store_wrapper">
		<!-- 头部搜索 -->
		<view class="top_area">
			<view class="top_search">
				<view class="back_icon">
					<img src="http://qnimage.xiteng.com/store_top_icon_return@2x.png" alt="" />
				</view>
				<view class="top_search_input">
					<input type="text" placeholder="搜索店铺内商品" />
				</view>
				<view class="classfiy_icon">
					<view>
						<img
							src="http://qnimage.xiteng.com/store_top_icon_classification@2x.png"
							alt=""
						/>
					</view>
					<view class="classfiy_text">分类</view>
				</view>
			</view>
			<view class="store_info">
				<view class="store_info_left">
					<view class="store_img">
						<img src="http://qnimage.xiteng.com/store_logo@2x.png" alt="" />
					</view>
					<view class="store_name_area">
						<view class="store_name">张一元旗舰店</view>
						<p class="store_fans">粉丝数21.5万</p>
					</view>
				</view>
				<view class="store_attention">
					<img src="http://qnimage.xiteng.com/store_Focus@2x.png" alt="" />
				</view>
			</view>
		</view>

		<!-- 首页&新品&热门&活动 -->
		<view class="option_list_wrapper">
			<view
				class="option_item_text"
				@click="changeTab(0)"
				v-bind:class="[activeTabIndex === 0 ? activeClass : normalClass]"
			>
				首页
			</view>
			<view
				class="option_item_text"
				@click="changeTab(1)"
				v-bind:class="[activeTabIndex === 1 ? activeClass : normalClass]"
			>
				新品
			</view>
			<view
				class="option_item_text"
				@click="changeTab(2)"
				v-bind:class="[activeTabIndex === 2 ? activeClass : normalClass]"
			>
				热门
			</view>
			<view
				class="option_item_text"
				@click="changeTab(3)"
				v-bind:class="[activeTabIndex === 3 ? activeClass : normalClass]"
			>
				活动
			</view>
		</view>
		<!-- banner -->
		<view class="store_banner">
			<img src="http://qnimage.xiteng.com/store_banner@2x.png" alt="" />
		</view>
		<!-- 优惠券 -->
		<view class="discount_wrapper">
			<block v-for="(product, index) in couponsList" :key="index">
				<view class="discount_img_area">
					<img src="http://qnimage.xiteng.com/store_coupon_bg@2x.png" alt="" class="discount_img" />
					<view class="discount_position">
						<view class="discount_price_area">
							<view class="discount_price_symbol">¥</view>
							<view class="discount_price">20</view>
						</view>
						<view class="discount_info">
							<view class="discount_top_text">领取优惠券</view>
							<view class="discount_bottom_text">满199可用</view>
						</view>
					</view>
				</view>
			</block>
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
	export default {
		data() {
			return {
				activeTabIndex: 0,
				activeClass: {
					active_tab: true
				},
				normalClass: {},
				shopList: [1,2,4,5,6,7],
				couponsList:[1,2]
			};
		},
		components: {},
		computed: {},
		methods: {
			changeTab(index) {
				console.log('index ', index);
				this.activeTabIndex = index;
			}
		}
	};
</script>

<style scoped>
.store_wrapper {
	width: 100%;
	height: 100%;
}
.nav_bar_list {
	background-color: #fff;
}
.top_area {
	width: 100%;
	height: 313upx;
	background: url('http://qnimage.xiteng.com/store_top_bg@2x.png') no-repeat center center;
	background-size: 100% 313upx;
	padding: 54upx 30upx;
	box-sizing: border-box;
	background-color: #fff;
}
.top_search {
	width: 100%;
	height: 60upx;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.top_search_input input {
	width: 580upx;
	height: 60upx;
	background: rgba(229, 229, 229, 1);
	opacity: 0.5;
	border-radius: 30upx;
	font-size: 28upx;
	color: rgba(102, 102, 102, 1);
	border: 0;
	padding-left: 20upx;
	box-sizing: border-box;
}
.back_icon img {
	width: 19upx;
	height: 36upx;
}
.classfiy_icon {
	width: 48upx;
	/* height: 55upx; */
	display: flex;
	flex-direction: column;
	align-items: center;
	/* margin: 10upx 10upx 0 0; */
}
.classfiy_icon img {
	width: 32upx;
	height: 25upx;
}
.classfiy_text {
	font-size: 20upx;
	color: rgba(255, 255, 255, 1);
	/* margin-top: 8upx; */
	width: 100%;
	text-align: center;
}
.store_info {
	width: 100%;
	display: flex;
	flex-direction: row;
	margin-top: 70upx;
	justify-content: space-between;
}
.store_img img {
	width: 74upx;
	height: 74upx;
}
.store_name_area {
	flex: 1;
	height: 100%;
	margin-left: 20upx;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.store_name {
	font-size: 32upx;
	color: rgba(51, 51, 51, 1);
}
.store_fans {
	font-size: 24upx;
	color: rgba(51, 51, 51, 1);
}
.store_attention {
	width: 136upx;
	display: flex;
	align-items: center;
}
.store_attention img {
	width: 136upx;
	height: 52upx;
}
.store_info_left {
	width: 290upx;
	height: 75upx;
	display: flex;
	flex-direction: row;
	align-items: center;
}
.store_classify_area {
	width: 100%;
	display: flex;
	flex-direction: column;
}
.store_classify_option {
	width: 100%;
	padding: 0 50upx;
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
}
.onclick_before {
	width: 60upx;
	font-size: 28upx;
	font-weight: 500;
	color: #333;
}
.onclick_after {
	width: 60upx;
	font-size: 28upx;
	font-weight: 500;
	color: #ff594b;
}
.store_banner img {
	width: 100%;
	height: 280upx;
}
.discount_wrapper {
	width: 100%;
	height: 200upx;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 25upx 30upx;
	box-sizing: border-box;
	background-color: #fff;
}
.discount_img_area {
	width: 340upx;
	height: 128upx;
	box-shadow: 5upx 5upx 30upx #efeeee;
	position: relative;
}
.discount_img {
	width: 340upx;
	height: 128upx;
}
.discount_position {
	width: 340upx;
	height: 128upx;
	display: flex;
	flex-direction: row;
	justify-content: center;
	position: absolute;
	top: 0;
	left: 0;
}
.discount_price_area {
	width: 50%;
	height: 128upx;
	display: flex;
	flex-direction: row;
	align-items: center;
}
.discount_price_symbol {
	font-size: 32upx;
	color: rgba(255, 89, 75, 1);
	width: 45%;
	text-align: right;
	margin-top: 3upx;
}
.discount_price {
	font-size: 40upx;
	color: rgba(255, 89, 75, 1);
	flex: 1;
	text-align: left;
}
.discount_info {
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
}
.discount_top_text {
	font-size: 28upx;
	color: rgba(51, 51, 51, 1);
	margin-top: 30upx;
}
.discount_bottom_text {
	font-size: 24upx;
	color: rgba(153, 153, 153, 1);
	margin-top: 5upx;
}
.home_footer {
	width: 100%;
	padding: 50upx 40upx;
	box-sizing: border-box;
	background: rgba(244, 248, 251, 1);
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}
.footer_option_wrapper {
	width: 100%;
	height: 102upx;
	background-color: #fff;
	display: flex;
	flex-direction: row;
	position: fixed;
	bottom: 0;
}
.footer_option {
	flex: 1;
	height: 102upx;
	border-right: 1upx solid #e9e9e9;
	font-size: 32upx;
	color: rgba(51, 51, 51, 1);
	line-height: 102upx;

	text-align: center;
}
.footer_option:nth-child(1) {
	display: flex;
	flex-direction: row;
	justify-content: center;
}
.footer_option:nth-child(3) {
	border-right: none;
}
.imsg_icon img {
	width: 40upx;
	height: 40upx;
	margin-right: 10upx;
}
.wrap_body {
	height: 100%;
}
.option_list_wrapper {
	width: 100%;
	padding: 0 122upx 27upx 122upx;
	box-sizing: border-box;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
}
.option_item_text {
	color: #333333;
	font-size: 28upx;
}

.active_tab {
	color: #cc2636;
}
.product_wrapper{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 15upx;
    padding: 0 25upx;
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
