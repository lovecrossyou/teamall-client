<template>
	<view class="tea_mall_home_page">
		<searchBox></searchBox>
		<!-- 导航栏 -->
		<navBarList :data="navBarListArr" @sendSelectedInd='sendSelectedInd' ></navBarList>
		<Block v-if="carefullyChosen">
			<view>
				<view class="banner-wrapper">
					<banner></banner>
				</view>
				<view class="tea_mall_home_page_section">
					<!-- 免费试饮 -->
					<freeTea></freeTea>
					<!-- 爆款工夫茶 -->
					<hotTea></hotTea>
					<!-- 限时秒杀 -->
					<seckill></seckill>
				</view>
			</view>
		</Block>
		<!-- 推荐 -->
		<recommend></recommend>
		<view class="cart-wrapper">
			<floatShoppingCart/>
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
	import recommend from './components/recommend.vue';
	import floatShoppingCart from './components/floatShoppingCart'
	
	import api  from "../../util/api.js"
	
	export default {
		data() {
			return {
				list:[],
				sendSelectedTabInd:0
			}
		},
		computed:{
			...mapState({
				navBarListArr:state=>state.main.navBarListArr,
				carefullyChosen:state=>state.main.carefullyChosen
			})
		},
		methods:{
			async fetchCategory(){
				let res = await api.HomeCategoryList({
					accessInfo:{}
				})
				this.$store.commit('main/setArr',res.respCategoryModelList)	
			},
			async fetchTeaMallContent(ind){
				const res = await api.HomeTeaMallContent({
					  "accessInfo": {},
					  "categoryId": 0
				})
				this.$store.commit('main/setMallContent',res)
			},
			sendSelectedInd(i){
				this.sendSelectedTabInd=i;
			}
		},
		onLoad(opt) {
			this.fetchCategory();
			this.fetchTeaMallContent();
			return;
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
			recommend,
			floatShoppingCart
		}
	}
</script>

<style lang="less">
	.tea_mall_home_page {
		width: 100%;
		background: #ffffff;
		overflow-x: hidden;

		// 		padding: 54upx 30upx;
		// 		box-sizing: border-box;
		.banner-wrapper {
			width: 100%;
			height: 240upx;
		}

		.tea_mall_home_page_section {
			width: 100%;
		}
		
		.cart-wrapper{
			position: fixed;
			right: 30upx;
			top: 50%;
			width: 120upx;
			height: 120upx;
			background: #FF594B;
			border-radius: 50%;
		}
	}
</style>
