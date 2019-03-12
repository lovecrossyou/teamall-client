<template>
	<view>
		<view class="store_module">
			<view class="store_module_tit">
				<image :src="commodity_area"></image>
			</view>
			<view class="store_module_nav">
				<view class="store_module_nav_filter">综合</view>
				<view class="store_module_nav_money">代言费</view>
				<view class="store_module_nav_more">更多</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data(){
			return {
				shop_area:"../../static/represent/shop_area.png",
				commodity_area:"../../static/represent/commodity_area.png",
			}
		},
	}
</script>

<style lang="less">
	.store_module{
	    margin-top: 36upx;
	    margin-bottom: 36upx;
		font-size:28upx;
		.store_module_tit{
			image{
			    width:100%;
			    height:96upx;
			}
		}
		.store_module_nav{
		    width:100%;
		    height: 76upx;
		    display: flex;
		    align-items: center;
		    border-bottom: 1upx solid #E6E6E6;
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
		}
	}
	

</style>
