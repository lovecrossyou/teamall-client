<template>
	<view class="shoppingcar" :style="minHeight">
		<view class="shopList">
			<view class="dianpu" v-for="(item, index) in shopData" :key="index">
				<view class="dianpu-name">
					<checkBox 
					class="select"  
					:isselected="item.checked" 
					@change="shopActive(item)" 
					></checkBox>
					
					<image v-bind:src="shopIcon"></image>
					<view class="text">{{ item.shop_name }}</view>
					<view class="lingquan">领券</view>
				</view>
				<scroll-view
					scroll-x="true"
					class="scrollView"
					v-for="(ite, ind) in item.data"
					:key="ind"
					:id="ite.pro_id"
					:scroll-left="ite.scrollLeft"
					@touchstart="touchS"
					@touchend="touchE"
				>
					<view class="viewbox">
						<view class="shangpin">
							<checkBox
								:isselected="ite.isChecked"
								@change="proActive(item, ite)"
								class="selectIcon"
							></checkBox>
							<view class="shangpin-info">
								<image :src="ite.pro_img"></image>

								<view class="text-info">
									<text class="name">{{ ite.pro_name }}</text>
									<text class="size">{{ ite.pro_count }}</text>

									<view class="price-wrpper">
										<text class="danjia">￥{{ ite.now_price }}</text>

										<view class="numInput">
											<text
												@tap="changeCount(ite, -1)"
												:class="ite.pro_count == 0 ? 'numbox-disabled' : ''"
											>
												-
											</text>
											<input type="number" v-model="ite.pro_count" />
											<text @tap="changeCount(ite, 1)">+</text>
										</view>
									</view>
								</view>
							</view>
						</view>
						<view class="hong" @tap="deletePro(ite.pro_id)">删除</view>
					</view>
				</scroll-view>
			</view>
			<view class="line">
				{{ '一\u2003' }}
				<view class="text">猜你喜欢</view>
				{{ '\u2003一' }}
			</view>
			<recommend></recommend>
		</view>

		<!-- 底部结算 -->
		<view class="bottom-jiesuan">
			<checkBox
				class="bottom-all-icon"
				:isselected="isCheckAll"
				@change="allCheck"
			></checkBox>
			<view class="all-text">全选</view>

			<view class="price-wrpper">
				<text class="price">合计：￥{{ allPrice }}</text>
				<text class="youhui">店铺优惠{{ allPrice }}元</text>
			</view>

			<view class="btn" @tap="jiesuan"><view class="text">去结算(5)</view></view>
		</view>
	</view>
</template>

<script>
import checkBox from '@/components/custom-checkbox.vue';
import recommend from '@/pages/main/components/recommend.vue';
var startX = 0;
var endX = 0;
export default {
	data() {
		return {
			// 全选，返回
			isCheckAll: false,
			allPrice: 0, //所有价格
			allShops: 0, //被选中的商店数量
			allCount: 0, //被选中的产品数量
			shopIcon: '../../../static/mall/shop_icon.png',
			shopData: [
				{
					shop_name: '香奈儿专营店',
					checked: false,
					yunfei: 10,
					price: 300,
					checkedCount: 0,
					data: [
						{
							pro_id: 1,
							pro_name: ' 香奈儿可可小姐淡香水 50ml',
							pro_name2: ' (又名：香奈儿 可可小姐淡香水（瓶装）50ml)',
							reduce_price: 16,
							now_price: 100,
							pro_count: 1,
							pro_img: '../../../static/mall/shop_icon.png',
							isChecked: false,
							// 滚动条
							scrollLeft: 0
						},
						{
							pro_id: 2,
							pro_name: ' 香奈儿可可小姐淡香水 50ml',
							pro_name2: ' (又名：香奈儿 可可小姐淡香水（瓶装）50ml)',
							reduce_price: 16,
							now_price: 100,
							pro_count: 1,
							pro_img: '../../../static/mall/shop_icon.png',
							isChecked: false,
							// 滚动条
							scrollLeft: 0
						}
					]
				},
				{
					shop_name: '香奈儿专营店',
					checked: false,
					yunfei: 10,
					price: 300,
					checkedCount: 0,
					data: [
						{
							pro_id: 1,
							pro_name: ' 香奈儿可可小姐淡香水 50ml',
							pro_name2: ' (又名：香奈儿 可可小姐淡香水（瓶装）50ml)',
							reduce_price: 16,
							now_price: 100,
							pro_count: 1,
							pro_img: '../../../static/mall/shop_icon.png',
							isChecked: false,
							// 滚动条
							scrollLeft: 0
						},
						{
							pro_id: 2,
							pro_name: ' 香奈儿可可小姐淡香水 50ml',
							pro_name2: ' (又名：香奈儿 可可小姐淡香水（瓶装）50ml)',
							reduce_price: 16,
							now_price: 100,
							pro_count: 1,
							pro_img: '../../../static/mall/shop_icon.png',
							isChecked: false,
							// 滚动条
							scrollLeft: 0
						}
					]
				},
				{
					shop_name: '香奈儿专营店',
					checked: false,
					yunfei: 10,
					price: 300,
					checkedCount: 0,
					data: [
						{
							pro_id: 1,
							pro_name: ' 香奈儿可可小姐淡香水 50ml',
							pro_name2: ' (又名：香奈儿 可可小姐淡香水（瓶装）50ml)',
							reduce_price: 16,
							now_price: 100,
							pro_count: 1,
							pro_img: '../../../static/mall/shop_icon.png',
							isChecked: false,
							// 滚动条
							scrollLeft: 0
						},
						{
							pro_id: 2,
							pro_name: ' 香奈儿可可小姐淡香水 50ml',
							pro_name2: ' (又名：香奈儿 可可小姐淡香水（瓶装）50ml)',
							reduce_price: 16,
							now_price: 100,
							pro_count: 1,
							pro_img: '../../../static/mall/shop_icon.png',
							isChecked: false,
							// 滚动条
							scrollLeft: 0
						}
					]
				},
				{
					shop_name: '香奈儿专营店',
					checked: false,
					yunfei: 12,
					price: 500,
					checkedCount: 0,
					data: [
						{
							pro_id: 3,
							pro_name: ' 香奈儿可可小姐淡香水 50000ml',
							pro_name2: ' (又名：香奈儿 可可小姐淡香水（瓶装）50ml)',
							reduce_price: 16,
							now_price: 100,
							pro_count: 1,
							pro_img: '../../../static/mall/shop_icon.png',
							isChecked: false,
							// 滚动条
							scrollLeft: 0
						}
					]
				}
			]
		};
	},
	methods: {
		touchS(e) {
			startX = e.mp.changedTouches[0].clientX;
		},
		touchE(e) {
			endX = e.mp.changedTouches[0].clientX;
			if (Math.abs(endX - startX) > 10) {
				if (endX - startX > 0) {
					this.shopData.forEach(item => {
						item.data.forEach(goods => {
							if (goods.pro_id == e.currentTarget.id) {
								goods.scrollLeft = 0;
							}
						});
					});
				} else {
					this.shopData.forEach(item => {
						item.data.forEach(goods => {
							if (goods.pro_id == e.currentTarget.id) {
								goods.scrollLeft = 75;
							}
						});
					});
				}
			}
		},
		// 单击结算
		jiesuan() {
			console.log('跳转到支付详情页面');
			uni.navigateTo({
				url: '/pages/my/zhifu',
				success: res => {},
				fail: () => {},
				complete: () => {}
			});
		},
		// 点击选中与取消===店铺,(选中店铺的所有商品)
		shopActive(item) {
			!item.checked ? this._shopTrue(item) : this._shopFalse(item);
		},
		_shopTrue(item) {
			//遍历商店每一个商品，状态为false的改变为true，又在_checkTrue()方法中将商店状态改为true
			item.data.forEach((pro, index) => {
				pro.isChecked === false ? this._checkTrue(item, pro) : '';
			});
		},
		_shopFalse(item) {
			item.data.forEach((pro, index) => {
				pro.isChecked === true ? this._checkFalse(item, pro) : '';
			});
		},
		// 点击取消选中商品
		proActive(item, pro) {
			pro.isChecked ? this._checkFalse(item, pro) : this._checkTrue(item, pro);
		},
		_checkTrue(item, pro) {
			pro.isChecked = true;
			++item.checkedCount == item.data.length ? (item.checked = true) : '';
			//每选中一个商品，被选中的商品数加一，如果数值等于商品数，商店的全选状态为true
			item.checked
				? ++this.allShops === this.shopData.length
					? (this.isCheckAll = true)
					: (this.isCheckAll = false)
				: '';
			//当商店全选状态，每全选一个商店，被选中商店数加一，数值等于所有商店数，全选状态为true
		},
		_checkFalse(item, pro) {
			pro.isChecked = false;
			//被选中的商品数减一
			--item.checkedCount;
			if (item.checked) {
				item.checked = false;
				--this.allShops;
			}
			this.isCheckAll = false;
		},
		// 全选
		allCheck() {
			this.isCheckAll = !this.isCheckAll;
			this.isCheckAll
				? this.shopData.forEach(item => {
						this._shopTrue(item);
				  })
				: this.shopData.forEach(item => {
						this._shopFalse(item);
				  });
		},
		changeCount(val, way) {
			if (way > 0) {
				val.pro_count++;
			} else {
				val.pro_count--;
				if (val.pro_count < 0) {
					val.pro_count = 0;
				}
			}
		},
		// 每次调用此方法，将初始值为0，便利价格并累加
		_totalPrice() {
			this.allPrice = 0;
			this.shopData.forEach(item => {
				let products = item.data;
				products.forEach(pros => {
					if (pros.isChecked) {
						this.allPrice += pros.now_price * pros.pro_count;
					}
				});
			});
		},
		_totalCount() {
			this.allCount = 0;
			this.shopData.forEach(item => {
				this.allCount += item.checkedCount;
			});
		},
		// 删除商品
		deletePro(id) {}
	},
	components: {
		checkBox,
		recommend,
	},
	// 单间商品的价格 x 数量
	filters: {
		totalprice(price, count) {
			console.log('当前项', price, count);
			return price * count;
		}
	},
	computed: {
		minHeight() {
			var systemInfo = uni.getSystemInfoSync();
			return `min-height:${systemInfo.windowHeight}px`;
		}
	},
	watch: {
		//深度监听所有数据，每次改变重新计算总价和总数
		shopData: {
			deep: true,
			handler(val, oldval) {
				this._totalPrice();
				this._totalCount();
			}
		}
	}
};
</script>

<style lang="scss">
.shoppingcar {
	background-color: white;
	.shopList {
		padding-bottom: 98upx;
		.dianpu {
			background-color: #ffffff;

			.dianpu-name {
				height: 100upx;
				align-items: center;
				padding-left: 40upx;
				padding-right: 40upx;
				display: flex;

.select{
margin-right: 20upx;
}

				image {
					width: 38upx;
					height: 35upx;
					margin-right: 8upx;
				}
				.text {
					font-size: 28upx;
					font-family: PingFang-SC-Medium;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);
					flex: 1;
				}
				.lingquan {
					font-size: 28upx;
					font-family: PingFang-SC-Medium;
					font-weight: 500;
					color: rgba(153, 153, 153, 1);
				}
			}
			.scrollView {
				width: 750upx;
				display: flex;
				.viewbox {
					width: 900upx;
					display: flex;
					height: 160upx;
					.shangpin {
						width: 750upx;
						padding-left: 40upx;
						padding-right: 40upx;
						display: flex;

						.selectIcon {
							align-self: center;
							margin-right: 20upx;
						}
						.shangpin-info {
							display: flex;
							flex: 1;
							image {
								width: 160upx;
								height: 160upx;
							}

							.text-info {
								display: flex;
								flex-direction: column;

								flex: 1;
								.name {
									font-size: 28upx;
									font-family: PingFang-SC-Medium;
									font-weight: 500;
									color: rgba(51, 51, 51, 1);
								}
								.size {
									font-size: 24upx;
									font-family: PingFang-SC-Regular;
									font-weight: 400;
									color: rgba(153, 153, 153, 1);
								}
							}
							.price-wrpper {
								display: flex;
								flex: 1;

								align-items: flex-end;
								.danjia {
									font-size: 28upx;
									font-family: PingFang-SC-Medium;
									font-weight: 500;
									color: rgba(254, 89, 75, 1);
									flex: 1;
								}
								.numInput {
									display: flex;
									align-items: center;

									text {
										color: #999;
										font-size: 70upx;
										font-weight: 100;
									}
									input {
										width: 80upx;
										text-align: center;
										font-size: 28upx;
										font-family: PingFang-SC-Medium;
										font-weight: 500;
										color: rgba(153, 153, 153, 1);
									}
									.numbox-disabled {
										color: #c0c0c0;
									}
								}
							}
						}
					}
					.hong {
						width: 150upx;
						background-color: red;
						color: #ffffff;
						text-align: center;
						display: flex;
						justify-content: center;
						align-items: center;
					}
				}
			}
		}
	}

	.line {
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: #999999;
		display: flex;
		margin-top: 43upx;
		justify-content: center;
		.text {
			font-size: 28upx;
			font-family: PingFang-SC-Medium;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}
	}

	.bottom-jiesuan {
		width: 100%;
		height: 98upx;
		position: fixed;
		bottom: 0;
		display: flex;
		padding-left: 23upx;
		justify-content: flex-end;
		background: #ffffffff;
		.bottom-all-icon {
			align-self: center;
			margin-right: 11upx;
		}

		.all-text {
			align-self: center;
			font-size: 28upx;
			font-family: PingFang-SC-Medium;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
			flex: 1;
		}

		.price-wrpper {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			margin-top: 16upx;
			margin-bottom: 6upx;
			margin-right: 16upx;
			.price {
				font-size: 32upx;
				font-family: PingFang-SC-Bold;
				font-weight: bold;
				color: rgba(254, 90, 76, 1);
			}
			.youhui {
				font-size: 24upx;
				font-family: PingFang-SC-Medium;
				font-weight: 500;
				color: rgba(102, 102, 102, 1);
			}
		}

		.btn {
			width: 316upx;
			height: 98upx;
			background: rgba(254, 89, 75, 1);
			justify-content: center;
			display: flex;
			align-items: center;

			.text {
				font-size: 28upx;
				font-family: PingFang-SC-Medium;
				font-weight: 500;
				color: rgba(255, 255, 255, 1);
			}
		}
	}
}
</style>
