<template>
	<view class="searchproductMain">
		<searchBox></searchBox>
		<view class="bannerList">
			<block v-for="(item,index) in bannerlist" :key="index">
				<view class="bannerTxt" :class="{'bannerIsclick':isClick===index}" @click="changeStyle(index)">
					{{item}}
				</view>
			</block>
		</view>
		<view class="productList">
			<block v-for="(item,index) in productlist" :key="index">
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
	import searchBox from "../../category/components/searchBox.vue"

	export default {
		components: {
			searchBox
		},
		methods: {
			changeStyle(index) {
				this.isClick = index;
				this.productlist.sort(this.productSort())
				switch(index){
					case 0 :
						this.productlist=this.productlist;
						break;
					case 1:
						this.sorttype="volume";
						this.sortkey==0?1:0;
						this.productlist.sort(this.productSort(this.sorttype),this.sortkey);
						break;
					case 2 :
						this.sorttype="price";
						this.sortkey==0?1:0;
						this.productlist.sort(this.productSort(this.sorttype),this.sortkey);
						break;
				}
			},
			productSort(list,key){
				return function(a,b){
				    var val1 = a[list];
				    var val2 = b[list];
				    return val2 - val1;}
// 				if(key===0){
// 					return function(a,b){
// 					    var val1 = a[list];
// 					    var val2 = b[list];
// 					    return val2 - val1;
// 					};
// 				}	
// 				else{
// 					return function(a,b){
// 					    var val1 = a[list];
// 					    var val2 = b[list];
// 					    return val1 - val2;
// 					};
// 				}
			}
		},
		data() {
			return {
				isClick: 0,
				sortkey:0,
				sorttype:"",
				bannerlist: ["综合", "销量", "价格", "筛选"],
				productlist: [{
						name: "张一元福建铁观音福建福建铁观音",
						icon: "/static/category/product_icon.png",
						volume:100,
						brandnum: 0,
						categorynum: 3,
						price: 552
					},
					{
						name: "张一元福建铁观音福建福建碧螺春",
						icon: "/static/category/product_icon.png",
						volume:88,
						brandnum: 0,
						categorynum: 0,
						price: 661
					},
					{
						name: "张一元福建铁观音福建福建铁观音",
						icon: "/static/category/product_icon.png",
						volume:100,
						brandnum: 0,
						categorynum: 3,
						price: 313
					},
					{
						name: "张️二元福建铁观音福建福建铁观音",
						icon: "/static/category/product_icon.png",
						volume:0,
						brandnum: 1,
						categorynum: 3,
						price: 111
					},
					{
						name: "张三元福建铁观音福建福建铁观音",
						icon: "/static/category/product_icon.png",
						volume:166,
						brandnum: 2,
						categorynum: 3,
						price: 111
					},
				]
			}
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

		.productList {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			flex-wrap: wrap;
			width: 100%;
			background: rgba(245,248,250,1);

			.productItem {
				display: inline-block;
				height: 508upx;
				background-color:rgba(255,255,255,1);
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
