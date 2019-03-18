<template>
	<view class="main">
		<view class="top-img"></view>
		<view class="header">
			<view class="productStatus">
				<image v-bind:src="proIcon" class="productImg"></image>
				<view class="productName">白桃乌龙茶15白桃乌龙茶桃乌龙 茶15白桃乌</view>
				<view class="breakLine"></view>
				<view class="status">待签收</view>
			</view>
			<view class="evaluate">
				<view class="starScore">
					<image v-bind:src="profileIcon" class="dispatcherImg"></image>
					<view class="dispatchScore">
						<view class="dispatchName">韵达快递 </view>
						<view class="star">
							<!-- <block v-for="star in starList">
								<image v-bind:src="starUnselectIcon" class="starImg"></image>
							</block> -->
						</view>
					</view>
				</view>
				<view class="logisticsNo">
					<view class="name">韵达快递</view>
					<view class="No">3154634631634631</view>
					<view class="logImg"></view>
				</view>
			</view>
		</view>
		<view class="logistic-list">
			<view class="log-header">
				<view class="title">物流信息</view>
				<view class="end-address">
					<view class="sep-line">
						<view class="end-spot"></view>
					</view>
					<view class="end-add-detail">{{shipAdd}}</view>
				</view>
			</view>
			<block v-for="(process,index) in processList" :key="index">
				<view class="log-item">
					<view class="node-time">
						<view class="date">{{process.date}}</view>
						<view class="time">{{process.time}}</view>
					</view>

					<view class="process-img">
						<view v-bind:class="[process.isCurrent?inproImgClass:corssproImgClass]"></view>
					</view>

					<view class="process-detail">
						<view class="pro-status"  v-bind:class="[process.isCurrent?inproTitleClass:crossproTitleClass]">{{process.status}}</view>
						<view class="pro-address-list">
							<block v-for="(address,index) in process.detail" :key="index">
								<view class="pro-address">
									<view class="current-add" v-bind:class="[process.isCurrent?inproTitleClass:crossproTitleClass]">{{address.currentCity}}{{address.currentAdd}}</view>
								</view>
							</block>
						</view>


					</view>
				</view>
			</block>
			
			<view class="log-footer">
				<view class="click-title">点击查看更多物流信息</view>
				<view class="click-img"></view>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				backIcon: "../../static/mall/logistics_top_bg.png",
				proIcon: "../../static/mall/logistics_pro_img.png",
				profileIcon: "../../static/mall/logistics_profile_photo.png",
				starUnselectIcon: "../../static/mall/logistics_star.png",
				starSelectedIcon: "../../static/mall/logistics_star_selected.png",
				starList: [1, 2, 3, 4, 5],
				score: 2,
				shipAdd: "[收货地址]北京市丰台区万寿路丽水小区2号楼2单元305",
				processList: [{
					date: "12-27",
					time: "11：39",
					status: "已签收",
					isCurrent: true,
					detail: [{
						currentCity: "",
						currentAdd: "快递已被本人签收，如有问题请电联业务员陈晓宇（18515255789），如您对快递员服务满意请给五星好评。"
					}, ]
				}, {
					date: "12-27",
					time: "11：39",
					status: "派送中",
					isCurrent: false,
					detail: [{
						currentCity: "[北京市]",
						currentAdd: "北京市丰台区陈晓宇（18515255789）正在为您派件",
					}, ]
				}, {
					date: "12-24",
					time: "11：39",
					status: "运输中",
					isCurrent: false,
					detail: [{
						currentCity: "[北京市]",
						currentAdd: "快件已从北京发出，准备发往北京丰台",
					}, {
						currentCity: "[北京市]",
						currentAdd: "快件已从大兴德贤发出，准备发往北京",
					}, ]
				}, {
					date: "12-23",
					time: "11：39",
					status: "已揽件",
					isCurrent: false,
					detail: [{
						currentCity: "[北京市]",
						currentAdd: "大兴小刘1371778245已揽收"
					}, ]
				
				}, ],
				inproImgClass: {
					inprocessImg: true,
					processed: false,
				},
				corssproImgClass: {
					inprocessImg: false,
					processed: true,	
				},
				inproTitleClass: {
					inproTitle: true,
					crossproTitle: false,
				},
				crossproTitleClass: {
					inproTitle: false,
					crossproTitle: true,
				}
			}
		}
	}
</script>

<style lang="scss">
	.main {
		width: 100%;
		height: 100%;
		background-color: #f4f8fb;

		.top-img {
			width: 100%;
			height: 268upx;
			display: block;
			background: url("../../static/mall/logistics_top_bg.png") no-repeat;
			background-size: 100% 100%;
		}

		.header {
			z-index: 10;
			margin-top: -82upx;
			width: 100%;
			// background-color: #f4f8fb;

			.productStatus {
				display: flex;
				flex: 1;
				flex-direction: row;
				align-items: center;
				height: 132upx;
				margin-left: 20upx;
				margin-right: 20upx;
				border-radius: 10upx;
				background-color: white;

				.productImg {
					width: 68upx;
					height: 68upx;
					margin-left: 32upx;
				}

				.productName {
					margin-left: 12upx;
					margin-right: 20upx;
					font-size: 28upx;
					color: #666666;
				}

				.breakLine {
					height: 64upx;
					width: 2upx;
					background: #DEDEDE;
				}

				.status {
					display: flex;
					flex-direction: row;
					justify-content: center;
					align-items: center;
					height: 32upx;
					width: 160upx;
					font-size: 30upx;
					color: #FF594B;
				}
			}

			.evaluate {
				margin-left: 20upx;
				margin-right: 20upx;
				margin-top: 24upx;

				.starScore {
					display: flex;
					flex: 1;
					flex-direction: row;
					align-items: center;
					height: 170upx;
					border-radius: 10upx 10upx 0upx 0upx;
					background-color: white;

					.dispatcherImg {
						margin-left: 32upx;
						width: 88upx;
						height: 88upx;
						border-radius: 44upx;
					}

					.dispatchScore {
						display: flex;
						flex: 1;
						flex-direction: column;
						justify-content: space-between;
						height: 88upx;
						margin-left: 28upx;

						.dispatchName {}

						.star {
							display: flex;
							flex: 1;
							flex-direction: row;
							justify-content: space-between;
							align-items: center;
							height: 40upx;
							width: 256upx;

							.starImg {
								width: 40upx;
								height: 40upx;
								background-color: #2BB241;
							}
						}
					}
				}

				.logisticsNo {
					display: flex;
					flex-direction: row;
					flex: 1;
					align-items: center;
					height: 88upx;
					background-color: #F2F4F6;
					border-radius: 0upx 0upx 10upx 10upx;

					.name {
						margin-left: 30upx;
						font-size: 24upx;
						color: #1F1F1F;
					}

					.No {
						font-size: 24upx;
						color: #999999;
					}

					.logImg {
						margin-left: 22upx;
						height: 22upx;
						width: 22upx;
						background: url("../../static/mall/logistics_copy.png") no-repeat;
						background-size: 100% 100%;
					}
				}
			}
		}

		.logistic-list {
			margin: 24upx 20upx 24upx 20upx;
			border-radius: 10upx;
			background-color: white;

			.log-header {
				padding-top: 24upx;
				.title {
					margin-top: 46upx;
					margin-left: 32upx;
					font-size: 26upx;
					color: #1F1F1F;
				}

				.end-address {
					display: flex;
					flex: 1;
					flex-direction: row;
					margin-top: 46upx;
					.sep-line {
						flex-direction: column;
						justify-content: center;
						align-items: center;
						margin-left: 146upx;
						width: 1upx;
						background-color: #C1C4C7;

						.end-spot {
							margin-left: -9.5upx;
							width: 20upx;
							height: 20upx;
							border-radius: 10upx;
							background-color: #2BB241;
						}
					}

					.end-add-detail {
						margin-left: 26upx;
						margin-right: 44upx;
						margin-bottom: 40upx;
						font-size: 24upx;
						color: #999999;
					}
				}
			}
			.log-footer {
				display: flex;
				flex: 1;
				flex-direction: row;
				justify-content: center;
				align-items: center;
				height: 100upx;
				.click-title {
					font-size: 22upx;
					color: #C1C4C7;
				}
				.click-img {
					margin-left: 7upx;
					width: 22upx;
					height: 22upx;
					background: url("../../static/mall/logistics_down.png") no-repeat;
					background-size: 100% 100%;
				}
			}

			.log-item {
				display: flex;
				flex: 1;
				flex-direction: row;

				.node-time {
					display: flex;
					flex-direction: column;
					align-items: center;
					width: 146upx;

					.date {
						font-size: 28upx;
						color: #666666;
					}

					.time {
						margin-top: 14upx;
						font-size: 24upx;
						color: #999999;
					}
				}

				.process-img {
					flex-direction: column;
					width: 1upx;
					background-color: #C1C4C7;

					.inprocessImg {
						margin-left: -14.5upx;
						width: 30upx;
						height: 30upx;
						background-color: white;
						background: url("../../static/mall/logistics_in_pro.png") no-repeat;
						background-size: 100% 100%;
					}

					.processed {
						margin-top: 8upx;
						margin-left: -7.5upx;
						width: 16upx;
						height: 16upx;
						border-radius: 8upx;
						background-color: #C1C4C7;
					}
				}

				.process-detail {
					display: flex;
					flex: 1;
					flex-direction: column;
					.pro-status {
						margin-left: 26upx;
						height: 44upx;
						font-size: 24upx;
					}
					.pro-address-list {
						flex-direction: column;

						.current-add {
							margin-left: 26upx;
							margin-right: 44upx;
							margin-bottom: 40upx;
							font-size: 24upx;
						}
					}
					.inproTitle {
						color: #2BB241;
					}
					.crossproTitle {
						color: #999999;
					}
				}
			}
		}
	}
</style>
