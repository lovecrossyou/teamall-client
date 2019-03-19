<template>
	<view>
		<view class="name" @click="goCart">购物车</view>
	</view>
</template>

<script>
	export default{
		methods:{
			goCart(){
				uni.navigateTo({
					url:"/pages/mall/cart/cart"
				})
			}
		}
	}
</script>

<style>
	.name{
		font-size: 32upx;
		color: #ffffff;
		font-weight: 500;
		line-height: 120upx;
		text-align: center;
	}
</style>
