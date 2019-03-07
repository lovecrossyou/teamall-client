<template>
	<view class="free_tea_wrapper">
		<view class="free_tea_left">
			<view class="free_tea_intro">
				<view class="free_tea_intro_tit">好茶试饮</view>
				<view>人气好茶免费送</view>
			</view>
			<view class="free_tea_image">
				<image :src="mall_main_img_1" alt="" />
			</view>
		</view>
		<view class="free_tea_right">
			<view class="free_tea_right_item">
				<view class="free_tea_intro">
					<view class="free_tea_intro_tit">名品优店</view>
					<view>回头客</view>
					<view>私藏好店</view>
				</view>
				<view class="free_tea_image">
					<image :src="mall_main_img_2" alt="" />
				</view>
			</view>
			<view class="free_tea_right_item">
				<view class="free_tea_intro">
					<view class="free_tea_intro_tit">名品优店</view>
					<view>回头客</view>
					<view>私藏好店</view>
				</view>
				<view class="free_tea_image">
					<image :src="mall_main_img_3" alt="" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mall_main_img_1: "../../static/main/mall_main_img_1.png",
				mall_main_img_2: "../../static/main/mall_main_img_2.png",
				mall_main_img_3: "../../static/main/mall_main_img_3.png",
			}
		}
	}
</script>

<style lang="less">
	.free_tea_wrapper {
		display: flex;
		margin-top: 70upx;
		padding-left: 40upx;
		padding-right: 40upx;
		box-sizing: border-box;

		.free_tea_left {
			width: 240upx;
			height: 352upx;
			background: rgba(248, 250, 252, 1);
			box-shadow: 0upx 2upx 15upx 1upx rgba(230, 235, 239, 1);
			border-radius: 4upx;
			margin-right: 32upx;

			.free_tea_intro {
				width: 100%;
				height: 116upx;
				color: rgba(54, 59, 66, 1);
				padding-left: 18upx;
				padding-top: 20upx;
				box-sizing: border-box;
				font-size: 24upx;
				line-height: 1.5;
				font-family: PingFang-SC-Regular;
				font-weight: 400;
				color: rgba(54, 59, 66, 1);
				box-sizing: border-box;

				.free_tea_intro_tit {
					font-size: 28upx;
					font-weight: bold;
					color: rgba(54, 59, 66, 1);
				}
			}

			.free_tea_image {
				width: 240upx;
				height: 236upx;

				image {
					width: 240upx;
					height: 236upx;
				}
			}
		}

		.free_tea_right {
			flex: 1;
			height: 352upx;
			box-shadow: 0upx 2upx 15upx 1upx rgba(230, 235, 239, 1);
			border-radius: 4upx;
			display: flex;
			flex-direction: column;
			justify-content: space-between;

			.free_tea_right_item {
				display: flex;
				justify-content: space-between;
				background: rgba(248, 250, 252, 1);

				.free_tea_intro {
					color: rgba(54, 59, 66, 1);
					padding-left: 18upx;
					padding-top: 20upx;
					box-sizing: border-box;
					font-size: 24upx;
					line-height: 1.5;
					font-family: PingFang-SC-Regular;
					font-weight: 400;
					color: rgba(54, 59, 66, 1);
					box-sizing: border-box;

					.free_tea_intro_tit {
						font-size: 28upx;
						font-weight: bold;
						color: rgba(54, 59, 66, 1);
					}
				}

				.free_tea_image {
					width: 220upx;
					height: 166upx;

					image {
						width: 220upx;
						height: 166upx;
					}
				}
			}
		}

	}
</style>
