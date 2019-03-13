<template>
	<view class="categoryMain">
		<view class="searchbox">
			<search-box></search-box>
		</view>
		<view class="categoryView">
			<view class="categoryList">
				<block v-for="(item,index) in categorylist" :key="index">
					<view class="categoryItem" :class="{'categoryclickItem':isclick===index}" @click="changeStyle(index)">
						<view class="categoryTxt">
							{{item.categoryitem}}
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
	import searchBox from './components/searchBox.vue'
	export default {
		components: {
			searchBox
		},
		data() {
			return {
				isclick: '',
				tealist: [],
				categorylist: [{
						categoryitem: "热卖",
						list: [{
								icon: "/static/category/tea.jpg",
								name: "1.1"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "1.2"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "1.3"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "1.4"
							}
						]
					},
					{
						categoryitem: "绿茶",
						list: [{
								icon: "/static/category/tea.jpg",
								name: "2.1"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "2.2"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "2.3"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "2.4"
							}
						]
					},
					{
						categoryitem: "红茶",
						list: [{
								icon: "/static/category/tea.jpg",
								name: "3.1"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "3.2"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "3.3"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "3.4"
							}
						]
					},
					{
						categoryitem: "乌龙茶",
						list: [{
								icon: "/static/category/tea.jpg",
								name: "4.1"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "4.2"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "4.3"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "4.4"
							}
						]
					},
					{
						categoryitem: "黑茶",
						list: [{
								icon: "/static/category/tea.jpg",
								name: "5.1"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "5.2"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "5.3"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "5.4"
							}
						]
					},
					{
						categoryitem: "白茶",
						list: [{
								icon: "/static/category/tea.jpg",
								name: "6.1"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "6.2"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "6.3"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "6.4"
							}
						]
					},
					{
						categoryitem: "黄茶",
						list: [{
								icon: "/static/category/tea.jpg",
								name: "7.1"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "7.2"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "7.3"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "7.4"
							}
						]
					},
					{
						categoryitem: "花草茶",
						list: [{
								icon: "/static/category/tea.jpg",
								name: "8.1"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "8.2"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "8.3"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "8.4"
							}
						]
					},
					{
						categoryitem: "茶具",
						list: [{
								icon: "/static/category/tea.jpg",
								name: "9.1"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "9.2"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "9.3"
							},
							{
								icon: "/static/category/tea.jpg",
								name: "9.4"
							}
						]
					}
				]
			}
		},
		methods: {
			changeStyle(index) {
				this.isclick = index;
				this.tealist = this.categorylist[index].list;
			},
			getteaList() {
				this.tealist = this.categorylist[0].list
			}
		},
		created() {
			this.getteaList()
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
