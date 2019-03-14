<template>
	<view class="uni-tab-bar">
		<scroll-view id="tab-bar" class="uni-swiper-tab" scroll-x :scroll-left="scrollLeft">
			<view v-for="(tab, index) in tabBars" :key="index" :class="['swiper-tab-list',tabIndex==index ? 'active' : '']"
			:data-current="index" @click="tapTab(index)">{{tab.name}}</view>
		</scroll-view>
		<scroll-view class="list" style="listHeight;">
		      <block v-for="(tabItem, idx) in orderList" :key="idx">
				  <view class="item">
					  <view class="item-top">
						  <view class="item-shop-name">{{tabItem.shopName}}</view>
						  <view class="item-shop-status">{{tabItem.status}}</view>
					  </view>
					  <view class="item-order">
						  <image src="../../static/main/recommend_item.png" class="item-pic"></image>
						  <view class="item-order-info">
							  <view class="item-order-info-top">
								  <view class="item-order-info-name">{{tabItem.name}}</view>
								  <view class="item-order-amount-info">
									  <view class="item-order-price">¥{{tabItem.perPrice}}</view>
								  </view>
							  </view>
							  <view class="item-order-info-bottom">共{{tabItem.amount}}件商品 合计¥{{tabItem.totlePrice}}含运费</view>
						  </view>
					  </view>
					  <view style="height: 2upx;background-color: #EAEAEA;"></view>
					  <view class="item-bottom">
						  <view class="item-delete">删除订单</view>
						  <view class="item-delete">追加评论</view>
					  </view>
				  </view>
		      </block>
		 </scroll-view>
	</view>
	
</template>

<script>
	export default{
		computed:{
			listHeight(){
				return {
					height:(412*this.listNum)
				}
			}
		},
		data(){
			return{
				listNum:4,
				scrollLeft: 0,
				tabIndex: 0,
				tabBars:[
					{name:'全部'},
					{name:'待付款'},
					{name:'待发货'},
					{name:'待收货'},
					{name:'待评价'},
				],
				orderList:[
					{shopName:'张一元旗舰店',url:'',name:'白桃乌龙茶15白桃乌龙茶桃乌龙茶15白桃乌',perPrice:'45.00',amount:'1',totlePrice:'45.00',status:'交易成功'},
					{shopName:'张一元旗舰店',url:'',name:'白桃乌龙茶15白桃乌龙茶桃乌龙茶15白桃乌',perPrice:'45.00',amount:'1',totlePrice:'45.00',status:'交易成功'},
					{shopName:'张一元旗舰店',url:'',name:'白桃乌龙茶15白桃乌龙茶桃乌龙茶15白桃乌',perPrice:'45.00',amount:'1',totlePrice:'45.00',status:'交易成功'},
					{shopName:'张一元旗舰店',url:'',name:'白桃乌龙茶15白桃乌龙茶桃乌龙茶15白桃乌',perPrice:'45.00',amount:'1',totlePrice:'45.00',status:'交易成功'},

				]
			}
		},
		methods:{
			 tapTab(index) {
				 if (this.tabIndex === index) {
				 	return false;
				 } else {
					 this.tabIndex = index;
				 }
			 },
			 loadMore() {
			 	console.log('load more');
			 }
		}
		
	}
</script>

<style lang="scss">
	.uni-tab-bar {
		display: flex;
		flex: 1;
		flex-direction: column;
		overflow: hidden;
		background-color: #f5f5f5;
		.active {
			color: #FF594B;
		}
		.list {
			width: 750upx;
			//height: (412*4)upx;
			margin-top: 100upx;
			.item{
				width:750upx;
				height:412upx;
				background:rgba(255,255,255,1);
				margin-top: 20upx;
				display: flex;
				flex-direction: column;
				.item-top{
					display: flex;
					flex-direction: row;
					align-items: center;
					justify-content: space-between;
					padding: 20upx;
					.item-shop-name{
						height:27upx;
						font-size:28upx;
						font-family:PingFang-SC-Medium;
						font-weight:500;
						color:rgba(102,102,102,1);
					}
					.item-shop-status{
						height:23upx;
						font-size:24upx;
						font-family:PingFang-SC-Medium;
						font-weight:500;
						color:rgba(255,89,75,1);
					}
				}
				.item-order{
					display: flex;
					flex-direction: row;
					padding: 20upx 20upx;
					.item-pic{
						width:180upx;
						height:180upx;
						background:rgba(255,89,75,1);
						border-radius:10upx;
					}
					.item-order-info{
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						flex: 1;
						.item-order-info-top{
							display: flex;
							flex-direction: row;
							justify-content: space-between;
							.item-order-info-name{
								font-size:28upx;
								font-family:PingFang-SC-Medium;
								font-weight:500;
								color:rgba(31,31,31,1);
								margin-left: 20upx;
							}
							.item-order-amount-info{
								display: flex;
								flex-direction: column;
								.item-order-price{
									font-size:28upx;
									font-family:PingFang-SC-Bold;
									font-weight:bold;
									color:rgba(31,31,31,1);
								}
							}
						}
						.item-order-info-bottom{
							font-size:24upx;
							font-family:PingFang-SC-Medium;
							font-weight:500;
							color:rgba(102,102,102,1);
							margin-left: 20upx;
						}
					}
				}
				.item-bottom{
					display: flex;
					flex-direction: row;
					justify-content: flex-end;
					align-items: center;
					flex: 1;
					.item-delete{
						background:rgba(254,241,240,0);
						border:1upx solid rgba(153, 153, 153, 1);
						border-radius:24upx;
						font-size:28upx;
						font-family:PingFang-SC-Regular;
						font-weight:400;
						color:rgba(102,102,102,1);
						padding: 8upx 40upx;
					    margin-right: 10upx;
					}
				}
			}
		}
	}
	.uni-swiper-tab {
		width: 100%;
		white-space: nowrap;
		line-height: 100upx;
		height: 100upx;
		position: fixed;
		background: #FFFFFF;
		z-index: 999;
		top: var(--window-top);
		left: 0;
	}
	.swiper-tab-list {
		font-size: 30upx;
		width: 150upx;
		display: inline-block;
		text-align: center;
		color: #555;
	}
	.uni-tab-bar-loading {
		text-align: center;
		padding: 20upx 0;
		font-size: 14px;
		color: #CCCCCC;
	}
</style>
