<template>
	<view class='shopInfo_c'>
		<view class='shopInfo_left'>
			<image class='shopInfo_img' :src="idol" />
			<view class='shopInfo_name_c'>
				<view class='shopInfo_name'>纪梵希官方旗舰店</view>
				<view class='shopInfo_views'>233万人</view>
			</view>
		</view>
		<view>
			<view class='shopInfo_goto_name'>
				<!-- router.push("./storeDetails")  -->
				进店逛逛
			</view>
			<image class='shopInfo_goto_arrow' :src="btn_right" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				idol: "../../static/represent/idol.jpg",
				btn_right: "../../static/represent/btn_right.png",
			}
		}
	}
</script>

<style lang="less">
	.shopInfo_c {

		display: flex;
		flex-direction: row;
		padding: 20upx 60upx 20upx 42upx;
		box-sizing: border-box;
		justify-content: space-between;
		align-items: center;
		background-color: #FFFFFF;

		.shopInfo_left {

			display: flex;
			flex-direction: row;
			align-items: center;

			.shopInfo_img {
				width: 82upx;
				height: 82upx;
				border-radius: 4upx;
				margin-right: 40upx;
			}

			.shopInfo_name_c {
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.shopInfo_name {
					font-size: 28upx;
					font-family: PingFang-SC-Medium;
					font-weight: 500;
					color: rgba(51, 51, 51, 1);
				}

				.shopInfo_views {

					font-size: 26upx;
					font-family: PingFang-SC-Medium;
					font-weight: 500;
					color: rgba(153, 153, 153, 1);
				}

			}


		}

		.shopInfo_goto_name {

			display: inline-block;
			height: 28upx;
			font-size: 28upx;
			font-family: PingFang-SC-Regular;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);
		}

		.shopInfo_goto_arrow {
			margin-left: 11upx;
			display: inline-block;
			width: 13upx;
			height: 24upx;
		}


	}
</style>
