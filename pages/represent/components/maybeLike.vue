<template>
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
</template>

<script>
	export default {
		data() {
			return {
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
		}
	}
</script>

<style lang="less">
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
</style>
