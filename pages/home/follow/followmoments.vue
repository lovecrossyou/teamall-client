<template>
	<view class="momentsMain">
		<block v-for="(item,index) in momentslist" :key="index">
			<view class="momentsItem">
				<view class="topItem">
					<view class="userItem">
						<image class="userIcon" :src="item.usericon"></image>
						<view class="userName">{{item.username}}</view>
					</view>
					<view class="weatherItem">
						<image class="weatherIcon" :src="item.weathericon"></image>
						<view class="weather">{{item.weather}} {{item.weathertemperature}}°C</view>
					</view>
					<view class="heartItem">
						<view class="heart">心情：{{item.heart}}°C</view>
					</view>
				</view>
				<view class="momentsBanner">
					<banner></banner>
				</view>
				<view class="momentsTitle">
					{{item.momentstitle}}
				</view>
				<view class="momentsNum">
					<view class="like">
						<image class="lIcon" :src="likeicon"></image>
						<view class="lNum">{{item.momentslike}}w</view>
					</view>
					<view class="forwarding">
						<image class="fIcon" :src="forwardingicon"></image>
						<view class="fNum">{{item.momentsforward}}w</view>
					</view>
					<view class="commens">
						<image class="cIcon" :src="commentsicon"></image>
						<view class="cNum">{{item.momentscomment}}</view>
					</view>

				</view>
			</view>
			<block v-if="index===0 ||  (index+1)%3===0">
				<view class="maybeLike">
					<view class="maybeLiketitle">
						你或许喜欢TA们
					</view>
					<scroll-view class="like-users" scroll-x="true" @scroll="scroll" scroll-left="120">
						<block v-for="(item,userindex) in likeuserlist" :key="userindex">
							<view class="like-user">
								<image class="likeuserIcon" :src="item.likeusericon"></image>
								<view class="likeusertxt">
									<view class="likeuserName">{{item.likeusername}}</view>
									<view class="likeuserFans">粉丝：{{item.likeuserfans}}w</view>
								</view>
							</view>
						</block>
					</scroll-view>
				</view>
			</block>
		</block>
	</view>
</template>

<script>
	import banner from './components/banner.vue';
	export default {
		components: {
			banner
		},
		methods: {
			scroll: function(e) {
				this.old.scrollTop = e.detail.scrollTop
			}
		},
		data() {
			return {
				momentslist: [{
						userid: 1,
						username: "富腾",
						usericon: "../../../static/user/user_herd.png",
						weather: "雨",
						weathericon: "../../../static/moments/weather.png",
						weathertemperature: 22,
						heart: 55,
						momentstitle: "喜腾山泉，一桶天下",
						momentslike: 1.3,
						momentsforward: 1.5,
						momentscomment: 1222
					},
					{
						userid: 2,
						username: "猪猪侠",
						usericon: "../../../static/user/user_herd.png",
						weather: "霾",
						weathericon: "../../../static/moments/weather.png",
						weathertemperature: 3,
						heart: -100,
						momentstitle: "一张蓝图绘到底",
						momentslike: 0.5,
						momentsforward: 0.8,
						momentscomment: 11111
					},
					{
						userid: 3,
						username: "喜娃",
						usericon: "../../../static/user/user_herd.png",
						weather: "雷阵雨",
						weathericon: "../../../static/moments/weather.png",
						weathertemperature: 14,
						heart: 1,
						momentstitle: "自强不息，厚德载物",
						momentslike: 2.1,
						momentsforward: 2.4,
						momentscomment: 44444
					},
					{
						userid: 4,
						username: "黄金大佬",
						usericon: "../../../static/user/user_herd.png",
						weather: "雪",
						weathericon: "../../../static/moments/weather.png",
						weathertemperature: -22,
						heart: 38,
						momentstitle: "2019年上市",
						momentslike: 11.1,
						momentsforward: 8.8,
						momentscomment: 224
					}

				],
				likeuserlist: [{
						likeusericon: "/static/user/user_herd.png",
						likeusername: "猪猪侠",
						likeuserfans: 1.7
					},
					{
						likeusericon: "/static/user/user_herd.png",
						likeusername: "喜娃",
						likeuserfans: 3.1
					},
					{
						likeusericon: "/static/user/user_herd.png",
						likeusername: "波哥",
						likeuserfans: 0.1
					},
					{
						likeusericon: "/static/user/user_herd.png",
						likeusername: "阳哥",
						likeuserfans: 4.7
					},
					{
						likeusericon: "/static/user/user_herd.png",
						likeusername: "强哥",
						likeuserfans: 0.9
					}
				],
				likeicon: "../../../static/moments/doucha_btn_like.png",
				forwardingicon: "../../../static/moments/doucha_btn_forwarding.png",
				commentsicon: "../../../static/moments/doucha_btn_comments.png",
				scrollTop: 0,
				old: {
					scrollTop: 0
				}
			}
		}
	}
</script>

<style lang="scss">
	.momentsMain {
		width: 100%;
		background: rgba(244, 248, 251, 1);

		.momentsItem {
			width: 100%;
			background: rgba(255, 255, 255, 1);
			border-top: solid 20upx rgba(244, 248, 251, 1);

			.topItem {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				width: 100%;
				height: 96upx;

				.userItem {
					display: flex;
					flex-direction: row;
					flex: 1;
					margin-left: 49upx;
					margin-top: 28upx;

					.userIcon {
						width: 54upx;
						height: 54upx;
						border-radius: 50%;
					}

					.userName {
						font-size: 24upx;
						font-family: PingFang-SC-Bold;
						font-weight: bold;
						color: rgba(102, 102, 102, 1);
						margin-top: 16upx;
						margin-left: 24upx;
					}
				}

				.weatherItem {
					display: flex;
					flex-direction: row;
					margin-top: 42upx;
					margin-right: 47upx;

					.weatherIcon {
						width: 29upx;
						height: 27upx;
					}

					.weather {
						font-size: 24upx;
						font-family: PingFang-SC-Regular;
						font-weight: 400;
						color: rgba(51, 51, 51, 1);
						line-height: 31upx;
						margin-top: 5upx;
						margin-left: 15upx;
					}
				}

				.heartItem {
					margin-top: 44upx;
					margin-right: 39upx;

					.heart {
						font-size: 24upx;
						font-family: PingFang-SC-Regular;
						font-weight: 400;
						color: rgba(51, 51, 51, 1);
						line-height: 31upx;
					}
				}
			}

			.momentsBanner {
				width: 100%;
				height: 576upx;
			}

			.momentsTitle {
				width: 669upx;
				height: 87upx;
				font-size: 32upx;
				font-family: PingFang-SC-Bold;
				font-weight: bold;
				color: rgba(24, 24, 24, 1);
				padding: 32upx 41upx 48upx 40upx;
				box-sizing: border-box;

			}

			.momentsNum {
				display: flex;
				flex-direction: row;
				padding-left: 44upx;
				padding-bottom: 31upx;


				.like {
					display: flex;
					flex-direction: row;
					align-items: baseline;

					.lIcon {
						width: 29upx;
						height: 24upx;
					}

					.lNum {
						width: 56upx;
						height: 19upx;
						font-size: 24upx;
						font-family: PingFang-SC-Medium;
						font-weight: 500;
						color: rgba(102, 102, 102, 1);
						margin-left: 9upx;
					}
				}

				.forwarding {
					display: flex;
					flex-direction: row;
					margin-left: 40upx;
					align-items: baseline;

					.fIcon {
						width: 29upx;
						height: 24upx;
					}

					.fNum {
						width: 56upx;
						height: 19upx;
						font-size: 24upx;
						font-family: PingFang-SC-Medium;
						font-weight: 500;
						color: rgba(102, 102, 102, 1);
						margin-left: 9upx;
					}
				}

				.commens {
					display: flex;
					flex-direction: row;
					margin-left: 40upx;
					align-items: baseline;

					.cIcon {
						width: 29upx;
						height: 24upx;
					}

					.cNum {
						width: 56upx;
						height: 19upx;
						font-size: 24upx;
						font-family: PingFang-SC-Medium;
						font-weight: 500;
						color: rgba(102, 102, 102, 1);
						margin-left: 9upx;
					}
				}
			}
		}

		.maybeLike {
			width: 100%;
			margin-top: 47upx;
			margin-bottom: 48upx;

			.maybeLiketitle {
				width: 308upx;
				height: 39upx;
				font-size: 40upx;
				font-family: PingFang-SC-Bold;
				font-weight: bold;
				color: rgba(24, 24, 24, 1);
				margin-left: 39upx;
			}

			.like-users {
				display: flex;
				flex-direction: row;
				width: 750upx;
				padding-left: 40upx;
				white-space: nowrap;
				box-sizing: border-box;


				.like-user {
					height: 196upx;
					width: 196upx;
					background: rgba(255, 255, 255, 1);
					position: relative;
					margin-top: 74upx;
					margin-right: 28upx;
					box-sizing: border-box;
					display: inline-block;

					.likeuserIcon {
						position: absolute;
						top: -37upx;
						width: 96upx;
						height: 96upx;
						border-radius: 50%;
						margin-left: 50upx;
					}

					.likeusertxt {
						display: flex;
						flex-direction: column;
						align-items: center;
						margin-top: 85upx;

						.likeuserName {
							height: 26upx;
							font-size: 28upx;
							font-family: PingFang-SC-Bold;
							font-weight: bold;
							color: rgba(24, 24, 24, 1);
						}

						.likeuserFans {
							height: 23upx;
							font-size: 24upx;
							font-family: PingFang-SC-Medium;
							font-weight: 500;
							color: rgba(102, 102, 102, 1);
							margin-top: 22upx;
						}
					}
				}
			}
		}
	}
</style>
