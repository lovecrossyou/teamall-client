<template>
	<view class="talk_wrapper">
		<view class="publish_message">
			<view class='publishinfo_header'>
				<view class='publishinfo_header_left'>
					<image class='publishinfo_icon' :src="idol" />
					<view class='publishinfo_name'>Mr张</view>
					<view class='publishinfo_level'>LV5</view>
				</view>
				<view class='publishinfo_attention'>关注</view>
			</view>
			<view class='publishinfo_content'>
				对于出门旅行，我的两个信条：好好体验当地生活拍下美美的照片（包括风景和我）。如果你也和我一样那么恭喜你，打开了一篇正确的游记！
				趁着一年 申根 签的热度，去完 伦敦 巴黎 ，没隔四个月，我们又捡起规划好很久的 意大利 行程表，去看看这个“ 欧洲 的 中国 ”到底什么样。
				相比于 法国 ， 意大利 人的英语可以说普及得很好了。旅游景点处的商贩们和外国游客交流都没有什么困难，当然前提是你能适应 意大利
			</view>
			<view class='publishinfo_bottom'>
				<view class='publishinfo_bottom_time'>2018-8-25 15：15</view>
				<view class='publishinfo_bottom_praisecount'>
					点赞12456次
				</view>
			</view>
		</view>
		<view class='vistor'>
			<view class='vistor_count'>访客1.5万人</view>
			<view class='vistor_imgs_c'>
				<!-- listArr.map((value, index) => { -->
				<image class='vistor_img' :src="idol" />
				<image class='vistor_img' :src="idol" />
				<image class='vistor_img' :src="idol" />
				<image class='vistor_img' :src="idol" />
				<image class='vistor_img' :src="idol" />
				<image class='vistor_img' :src="idol" />
				<image class='vistor_img' :src="idol" />
				<image class='vistor_img' :src="idol" />
				<image class='vistor_img' :src="idol" />

			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				idol: "../../static/represent/idol.jpg",
			}
		}
	}
</script>

<style lang="less">
	.talk_wrapper {


		.publish_message {

			.publishinfo_header {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				padding: 21upx 32upx;
				box-sizing: border-box;
				border-bottom: 1upx solid rgba(234, 234, 234, 1);

				.publishinfo_header_left {
					display: flex;
					align-items: center;

					.publishinfo_icon {

						width: 68upx;
						height: 68upx;
						border-radius: 50%;
					}

					.publishinfo_name {

						line-height: 28upx;
						font-size: 28upx;
						font-family: PingFang-SC-Medium;
						font-weight: 500;
						color: rgba(51, 51, 51, 1);
						margin-left: 9upx;
						margin-right: 11upx;
					}

					.publishinfo_level {
						height: 32upx;
						background: rgba(255, 89, 75, 1);
						border-radius: 4upx;
						padding: 2upx 8upx;
						box-sizing: border-box;
						text-align: center;
						font-size: 24upx;
						line-height: 32upx;
						font-family: PingFang-SC-Medium;
						font-weight: 500;
						color: rgba(255, 255, 255, 1);
					}

				}


			}



			.publishinfo_attention {
				background: rgba(212, 209, 209, 0);
				border: 1upx solid rgba(255, 89, 75, 1);
				border-radius: 24upx;
				height: 48upx;
				padding: 0 36upx;

				text-align: center;
				font-size: 28upx;
				font-family: PingFang-SC-Medium;
				font-weight: 500;
				color: rgba(255, 89, 75, 1);
				line-height: 48upx;
			}

			.publishinfo_content {

				padding: 32upx 36upx 32upx 32upx;
				font-size: 30upx;
				font-family: PingFang-SC-Medium;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				line-height: 44upx;
				box-sizing: border-box;
			}

			.publishinfo_bottom {

				display: flex;
				flex-direction: row;
				justify-content: space-between;
				padding-left: 22upx;
				padding-right: 45upx;
				box-sizing: border-box;
				align-items: center;

				.publishinfo_bottom_time {

					font-size: 24upx;
					font-family: PingFang-SC-Regular;
					font-weight: 400;
					color: rgba(102, 102, 102, 1);
					line-height: 40upx;
				}

				.publishinfo_bottom_praisecount {

					font-size: 24upx;
					font-family: PingFang-SC-Regular;
					font-weight: 400;
					color: rgba(102, 102, 102, 1);
					line-height: 40upx;
				}

			}

		}

		.vistor {

			padding: 28upx 19upx;
			box-sizing: border-box;
			background: rgba(255, 255, 255, 1);

			.vistor_count {

				font-size: 30upx;
				font-family: PingFang-SC-Medium;
				font-weight: 500;
				color: rgba(51, 51, 51, 1);
				line-height: 40upx;
				margin-bottom: 16upx;
			}

			.vistor_imgs_c {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
			}

			.vistor_img {

				width: 64upx;
				height: 64upx;
				border-radius: 50%;
				margin: 16upx 24upx 16upx 0;
			}
		}



	}
</style>
