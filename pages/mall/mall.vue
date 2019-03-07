<template>
	<view class="mall">
		<view class="uni-padding-wrap uni-common-mt">
			<button type="primary" @click="goNext">好茶试饮</button>
		</view>
		<view class="uni-padding-wrap uni-common-mt">
			<button type="primary" @click="sale">限时秒杀</button>
		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			goNext() {
				uni.navigateTo({
					url: "/pages/order/order-confirm"
				})
			},
			sale() {
				uni.navigateTo({
					url:"sale-tea"
				})
			}
		}
	}
</script>

<style>
</style>
