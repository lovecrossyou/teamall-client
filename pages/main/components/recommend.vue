<template>
	<view class="recommend_wrapper">
		<view class="recommend_item" v-for='(item,i) in arr' :key='i' >
			<view class="recommend_item_img">
				<image :src="item.img" alt="" />
			</view>
			<view class="recommend_item_intro">
				<view class="recommend_item_intro_content">{{item.name}}</view>
				<view class="recommend_item_intro_price">￥{{item.price}}</view>
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
						img: "../../static/main/recommend_item.png",
						name: "自桃树乌龙茶15包组合自桃树乌龙茶包组合自桃树乌龙茶包组合自桃树乌龙茶	15包组合"
					},
					{
						price: 0.22,
						img: "../../static/main/recommend_item.png",
						name: "没有梦想，何必远方"
					},
					{
						price: 112,
						img: "../../static/main/recommend_item.png",
						name: "我有可爱的嘉宝贝"
					},
					{
						price: 1422,
						img: "../../static/main/recommend_item.png",
						name: "我有可爱的嘉宝贝"
					},
				]
			}
		}
	}
</script>

<style lang="less">
	.recommend_wrapper {
		width: 100%;
		padding-top: 50upx;
		box-sizing: border-box;
		background: rgba(244, 248, 251, 1);
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding-left: 40upx;
		padding-right: 40upx;
		box-sizing: border-box;

		.recommend_item {
			flex-basis: 48%;
			height: 508upx;
			background: rgba(255, 255, 255, 1);
			border-radius: 10upx;
			overflow:hidden;
			margin-bottom: 30upx;
			.recommend_item_img{
				width:100%;
				height: 344upx;
				image{
					width:100%;
					height: 344upx;
				}
			}
			.recommend_item_intro {
				width: 100%;
				font-size: 28upx;
				font-family: PingFang-SC-Bold;
				font-weight: bold;
				color: rgba(31, 31, 31, 1);
				padding:20upx 14upx;
				box-sizing: border-box;
			
				.recommend_item_intro_content {
					width:100%;
					height:42px;
					overflow: hidden;
					text-overflow: ellipsis;
				}
			
				.recommend_item_intro_price {
					color: rgba(255, 89, 75, 1);
					margin-top: 10upx;
				}
			}
		}
	}
</style>
