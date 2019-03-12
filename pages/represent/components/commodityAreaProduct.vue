<template>
	<view class="commodity_area_product_wrapper">
		<view class="product_item" v-for="(item,i) in arr" :key='i'>
			<view class="product_item_img">
				<image :src="item.img"></image>
			</view>
			<view class="product_item_sale">销量 {{item.sale}}</view>
			<view class="product_item_price">代言：￥{{item.price}}</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				arr: [{
					img: "../../static/represent/idol.jpg",
					sale: 8998,
					price: 22
				}, {
					img: "../../static/represent/idol.jpg",
					sale: 8998,
					price: 22
				}, {
					img: "../../static/represent/idol.jpg",
					sale: 8998,
					price: 22
				}, {
					img: "../../static/represent/idol.jpg",
					sale: 8998,
					price: 22
				}, {
					img: "../../static/represent/idol.jpg",
					sale: 8998,
					price: 22
				}, ]
			}
		}
	}
</script>

<style lang="less">
	.commodity_area_product_wrapper {
		width: 100%;
		height: 296upx;
		padding-left: 10upx;
		padding-right: 10upx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		overflow-x: scroll;

		.product_item {
			width: 186upx;
			height: 276upx;
			background: rgba(255, 255, 255, 1);
			box-shadow: 0upx 2upx 24upx 0upx rgba(194, 193, 193, 0.73);
			border-radius: 4upx;
			margin-right: 22upx;

			.product_item_img {
				width: 186upx;
				height: 172upx;

				image {
					width: 100%;
					height: 172upx;
				}
			}

			.product_item_sale {
				font-size: 24upx;
				color: #999999;
				margin-top: 18upx;
				margin-bottom: 8upx;
				padding-left: 10upx;
			}

			.product_item_price {
				font-size: 28upx;
				color: #FF594B;
				padding-left: 10upx;
			}
		}


	}
</style>
