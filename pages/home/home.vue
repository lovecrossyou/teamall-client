<template>
	<view class="home_wrapper">
		<view>
			<view class="home_find_list">
				<view class="home_find_list_left">
					<view
						class="home_find_list_item"
						v-for="(item, i) in homeFindList"
						:key="i"
						@click="selectedIndex = i"
						v-bind:class="[selectedIndex == i ? 'activeClass' : 'initialClass']"
					>
						{{ item }}
					</view>
				</view>
				<view class="home_find_list_right">
					<image :src="icon_search"></image>
					<view>搜索</view>
				</view>
			</view>
			<navBarList
				v-if="selectedIndex == 0"
				:data="homeFindListSecond"
				:IndexChange="IndexChange"
			></navBarList>
		</view>

		<view v-if="selectedIndex == 0" >
			<view v-if="subPageIndex == 2"><teaFight></teaFight></view>

			<view v-else style="width: 100%;" class="water_fail_view">
				<block v-for="(product, index) in recommendList" :key="index">
					<view class="water_fail_product_item" @click="goDetail">
						<view class="water_fail_product_img">
							<img src="http://qnimage.xiteng.com/zhulizhe.jpg" alt="" />
						</view>
						<view class="water_fail_product_content">
							<view class="water_fail_product_tit">茶艺修行之礼仪篇</view>
							<view class="water_fail_product_intro">
								茶艺修行之礼仪篇茶艺修行之礼仪篇
							</view>
							<view class="water_fail_product_personal_data">
								<view class="water_fail_product_personal_data_img">
									<img src="http://qnimage.xiteng.com/zhulizhe.jpg" alt="" />
									<text>猪猪侠</text>
								</view>
								<view class="water_fail_product_personal_data_love">
									<img
										src="http://qnimage.xiteng.com/found_btn_nolike@2x.png"
										alt=""
									/>
									<text>1294</text>
								</view>
							</view>
						</view>
					</view>
				</block>
			</view>
		</view>
		<view v-else-if="selectedIndex == 1"><follow></follow></view>
	</view>
</template>

<script>
import navBarList from '../main/components/navBarList';
import follow from '../follow/follow';
import teaFight from '../teaFight/teaFight';
export default {
	data() {
		return {
			recommendList: [1, 2, 3, 4, 5, 6, 7],
			icon_search: '../../static/home/icon_search.png',
			homeFindList: ['发现', '关注'],
			homeFindListSecond: ['推荐', '视频', '斗茶', '约茶', '茶具', '生活'],
			selectedIndex: 0,
			subPageIndex: 0
		};
	},
	components: {
		navBarList,
		follow,
		teaFight
	},
	computed: {},
	methods: {
		IndexChange(index) {
			console.log('index', index);
			this.subPageIndex = index;
		},
		goDetail() {
			uni.navigateTo({
				url: '/pages/represent/representInfo'
			});
		}
	}
};
</script>

<style lang="less">
.home_wrapper {
	width: 100%;
}

.home_find_list {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 40upx 40upx 0;

	.home_find_list_left {
		font-size: 44upx;
		font-weight: bold;
		display: flex;

		.home_find_list_item {
			padding-bottom: 10upx;
			margin-right: 56upx;
		}
	}

	.home_find_list_right {
		font-size: 20upx;
		font-family: PingFang-SC-Bold;
		color: rgba(37, 37, 37, 1);

		image {
			width: 40upx;
			height: 40upx;
		}
	}
}

.initialClass {
	border: none;
	color: #cccccc;
}

.activeClass {
	border-bottom: 6upx solid #ff594b;
	color: #333333;
}

.water_fail_view {
	width: 100%;
	padding: 40upx 20upx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
}

.water_fail_product_item {
	width: 49%;
	border-radius: 4upx;
	font-size: 26upx;
	font-family: PingFang-SC-Medium;
	font-weight: 500;
	color: #333333;
	line-height: 34upx;
	margin-bottom: 20upx;
}

.water_fail_product_item .water_fail_product_img,
.water_fail_product_item .water_fail_product_img img {
	width: 100%;
}

.water_fail_product_content {
	width: 100%;
	padding-left: 20upx;
	padding-right: 20upx;
	box-sizing: border-box;
	background: #ffffff;
	box-shadow: 0upx 3upx 12upx 0upx rgba(219, 225, 230, 0.8);
}

.water_fail_product_tit {
	color: #333;
	font-size: 28upx;
	font-size: 28upx;
	padding-top: 16upx;
	margin-bottom: 10upx;
	box-sizing: border-box;
}

.water_fail_product_intro {
	color: #666;
	font-size: 26upx;
	width: 300upx;
	height: 30upx;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}

.water_fail_product_personal_data {
	padding-top: 20upx;
	padding-bottom: 20upx;
	box-sizing: border-box;
	display: flex;
	justify-content: space-between;
}

.water_fail_product_personal_data_img {
	display: flex;
	align-items: center;
	color: #333333;
	font-size: 26upx;
}

.water_fail_product_personal_data_img img {
	width: 50upx;
	height: 50upx;
	border-radius: 50%;
	overflow: hidden;
	margin-right: 6upx;
}

.water_fail_product_personal_data_love {
	display: flex;
	align-items: center;
	color: #333333;
	font-size: 26upx;
}

.water_fail_product_personal_data_love img {
	width: 28upx;
	height: 25upx;
	margin-right: 6upx;
}
</style>
