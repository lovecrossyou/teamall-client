<template>
	<view class="wrapper">
		<button @click="goProduct">代言商品</button>
		<button @click="goIntroduce">代言介绍页</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			goProduct(){
				uni.navigateTo({
					url:"/pages/represent/representInfo"
				})
			},
			goIntroduce(){
				uni.navigateTo({
					url:"/pages/represent/introduce"
				})
			}
		}
	}
</script>

<style lang="less">
	.wrapper{
		margin:100upx auto;
	}
</style>
