<template>
	<view class="categoryMain">
		<view class="searchbox">
			<search></search>
		</view>
		<view class="categoryView">
			<view class="categoryList">
				<block v-for="(item,index) in categorylist" :key="index">
					<view class="categoryItem" :class="{'categoryclickItem':isclick===index}" @click="changeStyle(index)">
						<view class="categoryTxt">
							{{item.name}}
						</view>
					</view>
				</block>
			</view>
			<view class="tealistView">
				<block v-for="(item,index) in tealist" :key="index">
					<view class="teaItem">
						<image class="teaIcon" :src="item.icon"></image>
						<view class="teaTxt">{{item.name}}</view>
					</view>
				</block>
			</view>
		</view>
	</view>
</template>

<script>
	import search from '../main/components/search.vue';
	import { mapMutations,mapState,mapActions} from 'vuex';
	export default {
		components: {
			search
		},
		data() {
			return {
				
			}
		},
		methods: {
			...mapMutations({
				changeStyle: 'category/changeStyle'
			}),
			...mapActions({
				getTeaList: 'category/getTeaList'
			})
			
		},
		computed: {
			...mapState({
				isclick:state=>state.category.isclick,
				tealist:state=>state.category.tealist,
				categorylist:state=>state.category.categorylist
			})
		},
		onLoad(opt) {
			this.getTeaList();
		}
	}
</script>

<style lang="scss">
	.categoryMain {
		width: 100%;

		.searchbox {
			width: 100%;
			height: 90upx;
		}

		.categoryView {
			width: 100%;
			display: flex;
			flex-direction: row;

			.categoryList {
				width: 140upx;

				.categoryItem {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					height: 120upx;
					background-color: rgba(247, 247, 247, 1);
					border-bottom: solid 1upx rgba(255, 255, 255, 1);

					.categoryTxt {
						font-size: 28upx;
						font-family: PingFang-SC-Regular;
						font-weight: 400;
						color: rgba(42, 42, 43, 1);
					}
				}

				.categoryclickItem {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 100%;
					height: 120upx;
					background-color: rgba(255, 255, 255, 1);
					border-left: solid 4upx rgba(255, 89, 75, 1);

					.categoryTxt {
						font-size: 28upx;
						font-family: PingFang-SC-Regular;
						font-weight: 400;
						color: rgba(42, 42, 43, 1);
					}
				}
			}

			.tealistView {
				width: 100%;
				box-sizing: border-box;

				.teaItem {
					display: inline-block;
					box-sizing: border-box;
					margin: 32upx 14upx 29upx 52upx;

					.teaIcon {
						width: 120upx;
						height: 120upx;
					}

					.teaTxt {
						display: flex;
						justify-content: center;
						font-size: 28upx;
						font-family: PingFang-SC-Medium;
						font-weight: 500;
						color: rgba(51, 51, 51, 1);
						margin-top: 26upx;
					}
				}
			}
		}
	}
</style>
