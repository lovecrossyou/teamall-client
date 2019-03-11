<template>
	<view class='endorsement_bottom_c'>
		<view class='endorsement_bottom_left'>
			<view class='endorsement_bottom_left_c'>
				<view class='endorsement_bottom_title'>评论</view>
				<image class='endorsement_bottom_icon' :src='btn_message' />
				<view class='endorsement_bottom_count'>154</view>
			</view>
		</view>

		<view class='endorsement_bottom_line' />

		<view class='endorsement_bottom_left'>
			<view class='endorsement_bottom_left_c'>
				<view class='endorsement_bottom_title'>点赞</view>
				<img class='endorsement_bottom_icon' :src='btn_like' />
				<view class='endorsement_bottom_count'>154</view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				btn_message: "../../static/represent/message.png",
				btn_like: "../../static/represent/like.png",
			}
		}
	}
</script>

<style lang="less">
	.endorsement_bottom_c {

		position: fixed;
		display: flex;
		flex-direction: row;
		width: 100%;
		background: rgba(0, 0, 0, 1);
		height:88upx;
		bottom: 0;
		

		.endorsement_bottom_left {
			display: flex;
			flex: 1;
			flex-direction: column;
			align-items: center;
			background-color: rgba(0, 0, 0, 1);

			.endorsement_bottom_left_c {
				margin-top: 33upx;
				display: flex;
				justify-content: center;
				align-items: center;

				.endorsement_bottom_title {

					display: inline-block;
					font-size: 28upx;
					font-family: PingFang-SC-Regular;
					font-weight: 400;
					color: rgba(255, 255, 255, 1);
					line-height: 28upx;
				}

				.endorsement_bottom_icon {
					display: inline-block;
					width: 28upx;
					height: 28upx;
					margin-left: 8upx;
				}

				.endorsement_bottom_count {

					display: inline-block;
					font-size: 28upx;
					font-family: PingFang-SC-Regular;
					font-weight: 400;
					color: rgba(255, 255, 255, 1);
					line-height: 28upx;
					margin-left: 20upx;
				}

			}

		}

		.endorsement_bottom_line {
			margin-top: 24upx;
			width: 1upx;
			height: 40upx;
			background: rgba(58, 58, 58, 1);
		}


	}
</style>
