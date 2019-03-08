<template>
	<view>
		<button @click="goNext">好可爱，我想</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			goNext(){
				uni.navigateTo({
					url:"/pages/represent/representInfo"
				})
			}
		}
	}
</script>

<style lang="less">
	button{
		margin:100upx;
	}
</style>
