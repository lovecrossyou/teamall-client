<template>
	<view class="tea_mall_home_page">
		<searchBox></searchBox>
		<!-- 导航栏 -->
		<navBarList></navBarList>
		<banner></banner>
		<view class="tea_mall_home_page_section">
			<!-- 免费试饮 -->
			<freeTea></freeTea>
			<!-- 爆款工夫茶 -->
			<hotTea></hotTea>
			<!-- 限时秒杀 -->
			<!-- <seckill></seckill> -->
			<!-- 推荐 -->

		</view>

	</view>
</template>

<script>
	
	import {mapState} from "vuex";
	import banner from './components/banner.vue';
	import searchBox from './components/searchBox.vue';
	import navBarList from './components/navBarList.vue';
	import freeTea from './components/freeTea.vue';
	import hotTea from './components/hotTea.vue';
	import seckill from './components/seckill.vue';
	export default {
		data() {
			return {}
		},
		computed: mapState(['forcedLogin', 'hasLogin', 'userName']),
		onLoad() {
			if (!this.hasLogin) {
				uni.showModal({
					title: '未登录',
					content: '您未登录，需要登录后才能继续',
					/**
					 * 如果需要强制登录，不显示取消按钮
					 */
					showCancel: !this.forcedLogin,
					success: (res) => {
						if (res.confirm) {
							/**
							 * 如果需要强制登录，使用reLaunch方式
							 */
							if (this.forcedLogin) {
								uni.reLaunch({
									url: '../login/enter'
								});
							} else {
								uni.navigateTo({
									url: '../login/enter'
								});
							}
						}
					}
				});
			}
		},
		components: {
			banner,
			searchBox,
			navBarList,
			freeTea,
			hotTea,
			seckill,
		}
	}
</script>

<style lang="less">
	.tea_mall_home_page {
		width: 100%;
		background: #ffffff;
		overflow-x: hidden;

		.tea_mall_home_page_section {
			width: 100%;
			padding-left: 40upx;
			padding-right: 40upx;
			box-sizing: border-box;
		}
	}
</style>
