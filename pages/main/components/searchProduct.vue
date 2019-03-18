<template>
	<view class="searchproductMain">
		<searchBox></searchBox>
		<drawer :visible="openDrawer" mask="true" mode="right" ref="close">
			<view class="drawerMain">
				<view class="brandList">
					<view class="title">
						<view class="titleTxt">品牌</view>
						<view class="more">
							<view class="txt">更多</view>
							<image class="img" src="../../../static/img/icon_down.png"></image>
						</view>
					</view>
					<view class="nameList">
						<block v-for="(item,index) in brandlist" :key="index">
							<view class="nameItem" @click="filterBybrand(item.brandnum)">
								<view class="nameTxt"> {{item.name}}</view>
							</view>
						</block>
					</view>
				</view>
				<view class="categoryList">
					<view class="titleTxt">分类</view>
					<view class="nameList">
						<block v-for="(item,index) in categorylist" :key="index">
							<view class="nameItem" @click="filterBycategory(item.categorynum)">
								<view class="nameTxt"> {{item.name}}</view>
							</view>
						</block>
					</view>
				</view>
				<view class="priceSelect">
					<view class="titleTxt">价格</view>
					<view class="price">
						<view class="priceTxt">价格区间</view>
						<view class="minPrice">
							<input class="min" placeholder="最低价" v-model.number="minnum"/>
						</view>
						<view class="line"></view>
						<view class="maxPrice">
							<input class="max" placeholder="最高价" v-model.number="maxnum"/>
						</view>
					</view>
				</view>
				<view class="drawerBtn">
					<button class="leftBtn" @click="closeDrawer">
						<view class="btnTxt">取消</view>
					</button>
					<button class="rightBtn" @click="filterByprice(minnum,maxnum)">
						<view class="btnTxt">完成</view>
					</button>
				</view>
			</view>
		</drawer>
		<view class="bannerList">
			<block v-for="(item,index) in bannerlist" :key="index">
				<view class="bannerTxt" :class="{'bannerIsclick':isClick===index}" @click="changeStyle(index)">
					{{item}}
				</view>
			</block>
		</view>
		<view class="productList">
			<block v-for="(item,index) in list" :key="index">
				<view class="productItem">
					<image class="productIcon" :src="item.icon"></image>
					<view class="productName">{{item.name}}</view>
					<view class="productPrice">￥{{item.price}}</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	import searchBox from "../../category/components/searchBox.vue";
	import drawer from "../../../components/drawer.vue";

	export default {
		components: {
			searchBox,
			drawer
		},
		methods: {
			changeStyle(index) {
				this.isClick = index;
				switch (index) {
					case 0:
						this.list = this.productlist;
						break;
					case 1:
						this.sorttype = "volume";
						this.sortkey = this.sortkey == 0 ? 1 : 0;
						this.list.sort(this.productSort(this.sorttype, this.sortkey));
						break;
					case 2:
						this.sorttype = "price";
						this.sortkey = this.sortkey == 0 ? 1 : 0;
						this.list.sort(this.productSort(this.sorttype, this.sortkey));
						break;
					case 3:
						this.openDrawer = true;
						break;
				}
			},
			productSort(type, key) {
				if (key === 0) {
					return (a,b)=>b[type] - a[type];
					}
				else {
					return (a,b)=>a[type] - b[type];
				}
			},
			filterBybrand(key){
				this.list=this.productlist;
				this.list=this.list.filter(product=>product.brandnum===key);
				this.$refs.close.close();
				this.openDrawer=false;
			},
			filterBycategory(key){
				this.list=this.productlist;
				this.list=this.list.filter(product=>product.categorynum===key);
				this.$refs.close.close();
				this.openDrawer=false;
			},
			filterByprice(minnum,maxnum){
				this.list=this.productlist;
				if(minnum<maxnum){
				this.list=this.list.filter(product=>minnum<product.price&&product.price<maxnum);	
				this.$refs.close.close();
				this.openDrawer=false;
				}
				else{
					alert("请输入正确的价格！")
				}
			},
			closeDrawer(){
				this.$refs.close.close();
				this.openDrawer=false;
			}
		},
		data() {
			return {
				isClick: 0,
				sortkey: 0,
				sorttype: "",
				openDrawer: false,
				list:[],
				bannerlist: ["综合", "销量", "价格", "筛选"],
				productlist: [{
						name: "张一元福建铁观音福建福建铁观音",
						icon: "/static/category/product_icon.png",
						volume: 100,
						brandnum: 0,
						categorynum: 3,
						price: 552
					},
					{
						name: "张一元福建铁观音福建福建碧螺春",
						icon: "/static/category/product_icon.png",
						volume: 88,
						brandnum: 0,
						categorynum: 0,
						price: 661
					},
					{
						name: "张一元福建铁观音福建福建铁观音",
						icon: "/static/category/product_icon.png",
						volume: 100,
						brandnum: 0,
						categorynum: 3,
						price: 313
					},
					{
						name: "张️二元福建铁观音福建福建铁观音",
						icon: "/static/category/product_icon.png",
						volume: 0,
						brandnum: 1,
						categorynum: 3,
						price: 111
					},
					{
						name: "张三元福建铁观音福建福建铁观音",
						icon: "/static/category/product_icon.png",
						volume: 166,
						brandnum: 2,
						categorynum: 3,
						price: 111
					},
				],
				brandlist: [{
						brandnum: 0,
						name: "张一元"
					},
					{
						brandnum: 1,
						name: "张二元"
					},
					{
						brandnum: 2,
						name: "张三元"
					},
					{
						brandnum: 3,
						name: "张四元"
					},
					{
						brandnum: 4,
						name: "张五元"
					},
					{
						brandnum: 5,
						name: "张六元"
					}
				],
				categorylist: [{
						categorynum: 0,
						name: "红茶"
					},
					{
						categorynum: 1,
						name: "黄茶"
					},
					{
						categorynum: 2,
						name: "白茶"
					},
					{
						categorynum: 3,
						name: "绿茶"
					},
					{
						categorynum: 4,
						name: "青茶"
					},
					{
						categorynum: 5,
						name: "花茶"
					},
					{
						categorynum: 6,
						name: "茶周边"
					},
					{
						categorynum: 7,
						name: "礼盒"
					}

				]
			}
		},
		created() {
			this.list=this.productlist
		}
	}
</script>

<style lang="scss">
	.searchproductMain {
		width: 100%;

		.bannerList {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			width: 100%;
			height: 82upx;
			margin-top: 11upx;
			border-bottom: solid 1upx rgba(234, 234, 234, 1);

			.bannerTxt {
				font-size: 28upx;
				font-family: PingFang-SC-Medium;
				font-weight: 500;
				color: rgba(153, 153, 153, 1);
			}

			.bannerIsclick {
				font-family: PingFang-SC-Bold;
				font-weight: bold;
				color: rgba(0, 0, 0, 1);
			}
		}

		.drawerMain {

			.brandList {
				width: 100%;
				margin-top: 64upx;

				.title {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					margin-left: 29upx;

					.titleTxt {
						font-size: 28upx;
						font-family: PingFang-SC-Bold;
						font-weight: bold;
						color: rgba(31, 31, 31, 1);
					}

					.more {
						display: flex;
						flex-direction: row;
						align-items: center;
						margin-right: 32upx;

						.txt {
							font-size: 24upx;
							font-family: PingFang-SC-Medium;
							font-weight: 500;
							color: rgba(153, 153, 153, 1);
						}

						.img {
							width: 24upx;
							height: 13upx;
						}
					}
				}

				.nameList {
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
					margin-top: 8upx;

					.titleTxt {
						font-size: 28upx;
						font-family: PingFang-SC-Bold;
						font-weight: bold;
						color: rgba(31, 31, 31, 1);
					}

					.nameItem {
						display: flex;
						justify-content: center;
						align-items: center;
						width: 190upx;
						height: 72upx;
						background: rgba(245, 248, 250, 1);
						border-radius: 4upx;
						margin-left: 28upx;
						margin-top: 24upx;

						.nameTxt {
							font-size: 28upx;
							font-family: PingFang-SC-Medium;
							font-weight: 500;
							color: rgba(102, 102, 102, 1);
						}
					}
				}
			}

			.categoryList {
				width: 100%;
				margin-top: 36upx;

				.titleTxt {
					font-size: 28upx;
					font-family: PingFang-SC-Bold;
					font-weight: bold;
					color: rgba(31, 31, 31, 1);
					margin-left: 28upx;
				}

				.nameList {
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
					margin-top: 8upx;

					.nameItem {
						display: flex;
						justify-content: center;
						align-items: center;
						width: 190upx;
						height: 72upx;
						background: rgba(245, 248, 250, 1);
						border-radius: 4upx;
						margin-left: 28upx;
						margin-top: 24upx;

						.nameTxt {
							font-size: 28upx;
							font-family: PingFang-SC-Medium;
							font-weight: 500;
							color: rgba(102, 102, 102, 1);
						}
					}
				}
			}

			.priceSelect {
				width: 100%;
				margin-top: 36upx;

				.titleTxt {
					font-size: 28upx;
					font-family: PingFang-SC-Bold;
					font-weight: bold;
					color: rgba(31, 31, 31, 1);
					margin-left: 28upx;
				}

				.price {
					display: flex;
					flex-direction: row;
					align-items: center;
					width: 100%;
					height: 72upx;

					.priceTxt {
						font-size: 24upx;
						font-family: PingFang-SC-Medium;
						font-weight: 500;
						color: rgba(102, 102, 102, 1);
						margin-left: 28upx;
					}

					.minPrice {
						display: flex;
						justify-content: center;
						align-items: center;
						width: 190upx;
						height: 72upx;
						background: rgba(245, 248, 250, 1);
						border-radius: 4upx;
						margin-left: 24upx;

						.min {
							width: 70upx;
							height: 23upx;
							font-size: 24upx;
							font-family: PingFang-SC-Medium;
							font-weight: 500;
							color: rgba(153, 153, 153, 1);
						}
					}

					.line {
						width: 34upx;
						height: 3upx;
						background: rgba(204, 204, 204, 1);
						margin-left: 12upx;
					}

					.maxPrice {
						display: flex;
						justify-content: center;
						align-items: center;
						width: 190upx;
						height: 72upx;
						background: rgba(245, 248, 250, 1);
						border-radius: 4upx;
						margin-left: 12upx;

						.max {
							width: 70upx;
							height: 23upx;
							font-size: 24upx;
							font-family: PingFang-SC-Medium;
							font-weight: 500;
							color: rgba(153, 153, 153, 1);
						}
					}
				}
			}

				.drawerBtn {
					display: flex;
					flex-direction: row;
					flex:1;
					align-items: center;
					justify-content: space-between;
					height:94upx;
					position: fixed;
					bottom: 0;
					
					.leftBtn{
						width:340upx;
						background:rgba(255,255,255,1);
						box-shadow:0px 3px 24px 0px rgba(214,214,214,0.65);
						font-size:32upx;
						font-family:PingFang-SC-Medium;
						font-weight:500;
						color:rgba(31,31,31,1);
					}
					.rightBtn{
						width:340upx;
						background:rgba(255,89,75,1);
						box-shadow:0px 3px 24px 0px rgba(214,214,214,0.65);
						font-size:32upx;
						font-family:PingFang-SC-Medium;
						font-weight:500;
						color:rgba(31,31,31,1);
					}
				}
			}

			.productList {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				flex-wrap: wrap;
				width: 100%;
				background: rgba(245, 248, 250, 1);

				.productItem {
					display: inline-block;
					height: 508upx;
					background-color: rgba(255, 255, 255, 1);
					margin-bottom: 14upx;

					.productIcon {
						width: 368upx;
						height: 344upx;
					}

					.productName {
						width: 283upx;
						font-size: 28upx;
						font-family: PingFang-SC-Medium;
						font-weight: 500;
						color: rgba(51, 51, 51, 1);
						line-height: 40upx;
						margin-top: 20upx;
						margin: 20upx 70upx 5upx 15upx;
						box-sizing: border-box;
					}

					.productPrice {
						font-size: 32upx;
						font-family: PingFang-SC-Medium;
						font-weight: 500;
						color: rgba(254, 89, 75, 1);
						line-height: 40upx;
						margin-left: 10upx;
					}
				}

			}
		}
</style>
