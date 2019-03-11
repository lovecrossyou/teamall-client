<template>
	<view class="introduce_wrapper">
		<view class="become_spokesperson_container">
			<view class="become_spokesperson_tit">成为代言人</view>
			<view class="become_spokesperson_content">只要粉丝数达到10人，点赞数量100就可以成为代言人了。只要您发布视频或者笔记，在底下选择商品库的产品。只有有人通过您发布的商品点击进去，就可获得收益哦。</view>
			<view class="become_spokesperson_btn">立即申请</view>
		</view>
		<view class="super_spokesperson_title">
			<view class="super_spokesperson_title_left">为TA代言</view>
			<view class="super_spokesperson_title_right">每个人都是生活的明星</view>
		</view>
		<view>
			<view>
				<view class="store_module">
					<view class="store_module_tit">
						<!-- <image class="" :src=""></image> -->
					</view>
					<view class="store_module_nav">
						<view class="store_module_nav_filter">综合</view>
						<view class="store_module_nav_money">代言费</view>
						<view class="store_module_nav_more">更多</view>
					</view>
				</view>
			</view>
			<view>
				<view class="product_item">
					<view class="product_item_img">
						<!-- <image></image> -->
					</view>
					<view class="product_item_sale">销量 2586</view>
					<view class="product_item_price">代言：￥3.5</view>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	
</script>

<style lang="less">
	
.introduce_wrapper{
	width:100%;
	padding-top:32upx;
	padding-left:32upx;
	padding-right:32upx;
	box-sizing: border-box;
	.become_spokesperson_container{
	    width:100%;
	    padding:30upx;
	    box-shadow:0upx 3upx 18upx 0upx rgba(194,193,193,0.73);
	    box-sizing: border-box;
		.become_spokesperson_tit{
		    text-align: center;
		    font-size:36upx;
		    font-family:PingFang-SC-Bold;
		    font-weight:bold;
		    color:rgba(31,31,31,1);
		    line-height:70upx;
		}
		.become_spokesperson_content{
		    margin-top:30upx;
		}
		.become_spokesperson_btn{
		    margin:40upx auto;
		    width:260upx;
		    height:68upx;
		    line-height:68upx;
		    text-align: center;
		    background:rgba(255,89,75,1);
		    border-radius:34upx;
		    box-shadow:0upx 3upx 18upx 0upx rgba(194,193,193,0.73);
		    font-size:30upx;
		    font-family:PingFang-SC-Medium;
		    font-weight:500;
		    color:rgba(255,255,255,1);
		}	
	}
	
	.super_spokesperson_title{
	    margin-top: 60upx;
		display: flex;
		align-items: center;
		.super_spokesperson_title_left{
		    font-size:36upx;
		    font-family:PingFang-SC-Bold;
		    font-weight:bold;
		    color:rgba(31,31,31,1);
		    padding-right:16upx;
		}
		.super_spokesperson_title_right{
		    font-size:24upx;
		    font-family:PingFang-SC-Medium;
		    font-weight:500;
		    color:rgba(153,153,153,1);
		}
	}
	
}


.store_module{
    margin-top: 36upx;
    margin-bottom: 36upx;
}
.store_module img{
    width:100%;
    height:96upx;
}
.store_module_nav{
    width:100%;
    height: 76upx;
    display: flex;
    align-items: center;
    border-bottom: 1upx solid #E6E6E6;
}
.store_module_nav_filter{
    border-right:1upx solid #E6E6E6;
}
.store_module_nav_filter,
.store_module_nav_more{
    width:134upx;
    text-align: center;
}
.store_module_nav_money{
    flex:1;
    padding-left:70upx;
    box-sizing: border-box;
}

.store_module_product{
    display: flex;
    height:352upx;
    padding-top:4upx;
    box-sizing: border-box;
    overflow-x: scroll;
}
.product_item{
    width:186upx;
    height:276upx;
    background:rgba(255,255,255,1);
    box-shadow:0upx 2upx 24upx 0upx rgba(194,193,193,0.73);
    border-radius:4upx;
    margin-right:22upx;
}
.product_item .product_item_img{
    width:186upx;
    height:172upx;
    background: pink;
}
.product_item .product_item_sale{
    font-size:24upx;
    color: #999999;
    margin-top: 18upx;
    padding-left: 10upx;
}
.product_item .product_item_price{
    font-size:28upx;
    color: #FF594B;
    padding-left: 10upx;
}




</style>
