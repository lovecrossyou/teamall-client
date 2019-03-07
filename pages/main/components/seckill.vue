<template>
<<<<<<< HEAD
	<view>
		<view class="home_top_selling_tit" @click="goNext">
			<view>限时秒杀</view>
			<view class="home_top_selling_tit_right">
				<span>23</span>:
				<span>23</span>:
				<span>11.11</span>
=======
	<view class="seckill_wrapper">
		<view class="seckill_tit">
			<view class="seckill_tit_left">限时秒杀</view>
			<view class="seckill_tit_right">
				<view class="seckill_tit_right_item">23</view>:
				<view class="seckill_tit_right_item">23</view>:
				<view class="seckill_tit_right_item">11.11</view>
>>>>>>> 50427ade1068a94421811ba30c4c4f7fd85d6148
			</view>
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
<<<<<<< HEAD
		methods: {
			goNext() {
				uni.navigateTo({
					url: "good-tea"
				})
			},
			sale() {
				uni.navigateTo({
					url:"sale-tea"
				})
			}
=======
		methods:{
			goList(){
				uni.navigateTo({
					url:"/pages/mall/good-tea"
				})
			}
		},
		data() {
			return {
				arr: [{
						price: 9.9,
						img: "../../static/main/seckil_item.png",
						name: "自桃树乌龙茶15包组合自桃树乌龙茶15包组合"
					},
					{
						price: 0.22,
						img: "../../static/main/seckil_item.png",
						name: "没有梦想，何必远方"
					},
					{
						price: 112,
						img: "../../static/main/seckil_item.png",
						name: "我有可爱的嘉宝贝"
					},
					{
						price: 1422,
						img: "../../static/main/seckil_item.png",
						name: "我有可爱的嘉宝贝"
					},
				]
			}
>>>>>>> 50427ade1068a94421811ba30c4c4f7fd85d6148
		}
	}
</script>

<style lang="less">
	.seckill_wrapper {
		width: 100%;
		margin-top: 86upx;
		margin-bottom: 56upx;
		padding-left: 40upx;
		box-sizing: border-box;

		.seckill_tit {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-right: 40upx;
			box-sizing: border-box;

			.seckill_left {
				font-size: 44upx;
				font-family: PingFang-SC-Bold;
				color: rgba(31, 31, 31, 1);
			}

			.seckill_tit_right {
				color: rgba(255, 89, 75, 1);
				font-size: 28upx;

				.seckill_tit_right_item {
					display: inline-block;
					background: rgba(255, 89, 75, 1);
					color: rgba(255, 255, 255, 1);
					border-radius: 4upx;
					padding: 6upx;
					margin-left: 10upx;
					margin-right: 10upx;
				}
			}
		}

		.seckill_content {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-top: 45upx;
			background: #fff;
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
						margin-top: 26upx;
						margin-bottom: 20upx;
					}
				}
			}
		}


	}
</style>
