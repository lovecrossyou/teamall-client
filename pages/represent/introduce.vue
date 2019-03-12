<template>
	<view class="introduce_wrapper">
		<view class="introduce_white_space_wrapper">
			<view class="become_spokesperson_container">
				<view class="become_spokesperson_tit">成为代言人</view>
				<view class="become_spokesperson_content">只要粉丝数达到10人，点赞数量100就可以成为代言人了。只要您发布视频或者笔记，在底下选择商品库的产品。只有有人通过您发布的商品点击进去，就可获得收益哦。</view>
				<view class="become_spokesperson_btn">立即申请</view>
			</view>
			<view class="super_spokesperson_title">
				<view class="super_spokesperson_title_left">为TA代言</view>
				<view class="super_spokesperson_title_right">每个人都是生活的明星</view>
			</view>
			<view>
				<commodityArea></commodityArea>
				<commodityAreaProduct></commodityAreaProduct>
				<commodityArea></commodityArea>
			</view>
		</view>
		<recommend></recommend>
	</view>
</template>

<script>
	import commodityArea from './components/commodityArea';
	import commodityAreaProduct from './components/commodityAreaProduct';
	import recommend from '../main/components/recommend'

	export default {

		components: {
			commodityArea,
			commodityAreaProduct,
			recommend
		}
	}
</script>

<style lang="less">
	.introduce_wrapper {
		width: 100%;

		.introduce_white_space_wrapper {
			padding-top: 32upx;
			padding-left: 32upx;
			padding-right: 32upx;
			box-sizing: border-box;

			.become_spokesperson_container {
				width: 100%;
				padding: 30upx;
				box-shadow: 0upx 3upx 18upx 0upx rgba(194, 193, 193, 0.73);
				box-sizing: border-box;

				.become_spokesperson_tit {
					text-align: center;
					font-size: 36upx;
					font-family: PingFang-SC-Bold;
					font-weight: bold;
					color: rgba(31, 31, 31, 1);
					line-height: 70upx;
				}

				.become_spokesperson_content {
					margin-top: 30upx;
					line-height: 46upx;
					font-size: 28upx;
					color: #1F1F1F;
					text-indent: 50upx;
				}

				.become_spokesperson_btn {
					margin: 40upx auto;
					width: 260upx;
					height: 68upx;
					line-height: 68upx;
					text-align: center;
					background: rgba(255, 89, 75, 1);
					border-radius: 34upx;
					box-shadow: 0upx 3upx 18upx 0upx rgba(194, 193, 193, 0.73);
					font-size: 30upx;
					font-family: PingFang-SC-Medium;
					font-weight: 500;
					color: rgba(255, 255, 255, 1);
				}
			}

			.super_spokesperson_title {
				margin-top: 60upx;
				display: flex;
				align-items: center;

				.super_spokesperson_title_left {
					font-size: 36upx;
					font-family: PingFang-SC-Bold;
					font-weight: bold;
					color: rgba(31, 31, 31, 1);
					padding-right: 16upx;
				}

				.super_spokesperson_title_right {
					font-size: 24upx;
					font-family: PingFang-SC-Medium;
					font-weight: 500;
					color: rgba(153, 153, 153, 1);
				}
			}
		}
	}
</style>
