<template>
	<view class="represent_info_wrapper">
		<view class='endorsement_nav'>
			<image class="endorsement_nav_arrow" :src="nav_right"></image>
			<view class='endorsement_nav_title'>代言商品</view>
			<view class='endorsement_nav_right' />
		</view>
		<view class='endorsement_container'>
			<image :src="bg_banner"></image>
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
					<img class='shopInfo_goto_arrow' :src="btn_right" />
				</view>
			</view>
			<view class='endorsement_commend'>
				<view class='endorsement_commend_title_c'>
					<view class='endorsement_commend_line' />
					<view class='endorsement_commend_title'>你可能喜欢</view>
				</view>
				<view class="seckill_content">
					<view class="seckill_content_item" v-for='(item,i) in arr' :key='i' @click="goList">
						<view class="seckill_content_item_img">
							<image :src="item.img" alt="" />
						</view>
						<view class="seckill_content_item_intro">
							<view class="seckill_content_item_intro_content">{{item.name}}</view>
							<view class="seckill_content_item_intro_price">￥{{item.price}}</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<discuss></discuss>
	</view>
</template>

<script>
	import discuss from './components/discuss'
	export default {
		data() {
			return {
				idol: "../../static/represent/idol.jpg",
				bg_banner: "../../static/represent/idol.jpg",
				nav_right: "../../static/represent/nav_right.png",
				btn_right: "../../static/represent/btn_right.png",
				arr: [{
						price: 9.9,
						img: "../../static/represent/like_item.png",
						name: "自桃树乌龙茶15包组合自桃树乌龙茶15包组合"
					},
					{
						price: 9.9,
						img: "../../static/represent/like_item.png",
						name: "自桃树乌龙茶15包组合自桃树乌龙茶15包组合"
					}, {
						price: 9.9,
						img: "../../static/represent/like_item.png",
						name: "自桃树乌龙茶15包组合自桃树乌龙茶15包组合"
					}, {
						price: 9.9,
						img: "../../static/represent/like_item.png",
						name: "自桃树乌龙茶15包组合自桃树乌龙茶15包组合"
					},
				]
			}
		},
		components: {
			discuss,
		}
	}
</script>

<style lang="less">
	.represent_info_wrapper {
		width: 100%;
		padding-bottom:88upx;
		.endorsement_nav {
			width: 100%;
			position: fixed;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			height: 120upx;
			background-color: transparent;
			padding: 44upx 19upx;
			box-sizing: border-box;
			z-index: 999;

			.endorsement_nav_arrow {
				width: 19upx;
				height: 36upx;
			}

			.endorsement_nav_title {
				height: 100%;
				line-height: 36upx;
				font-size: 36upx;
				font-family: PingFang-SC-Bold;
				font-weight: bold;
				color: white;
			}

			.endorsement_nav_right {
				width: 19upx;
				height: 36upx;
			}
		}

		.endorsement_container {
			width: 100%;

			image {
				width: 100%;
			}

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

			.endorsement_commend {
				padding-top: 31upx;
				padding-left: 24upx;
				background-color: #FFFFFF;

				.endorsement_commend_title_c {
					display: flex;
					flex-direction: row;
					align-items: center;

					.endorsement_commend_line {
						width: 4upx;
						height: 32upx;
						margin-right: 12upx;
						background-color: rgba(255, 89, 75, 1);
						border-radius: 2upx;
					}

					.endorsement_commend_title {
						height: 32upx;
						font-size: 32upx;
						font-family: PingFang-SC-Bold;
						font-weight: bold;
						color: rgba(51, 51, 51, 1);
						line-height: 32upx;
					}
				}

				.seckill_content {
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-top: 45upx;
					overflow-x: scroll;
					border: 2upx solid red;

					.seckill_content_item {
						width: 252upx;
						margin-right: 13upx;

						.seckill_content_item_img {
							width: 252upx;
							height: 240upx;
							border-radius: 20upx;

							image {
								width: 252upx;
								height: 240upx;
							}
						}

						.seckill_content_item_intro {
							width: 252upx;
							font-size: 28upx;
							font-family: PingFang-SC-Bold;
							font-weight: bold;
							color: rgba(31, 31, 31, 1);
							margin-top: 20upx;

							.seckill_content_item_intro_content {
								overflow: hidden;
								text-overflow: ellipsis;
								white-space: nowrap;
							}

							.seckill_content_item_intro_price {
								color: rgba(255, 89, 75, 1);
								margin-top: 20upx;
							}
						}
					}
				}
			}
		}
	}
</style>
