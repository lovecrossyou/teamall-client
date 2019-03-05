<template>
	<view class="uni-padding-wrap uni-common-mt">
		<button type="primary" @click="goNext">好茶试饮</button>
	</view>
</template>

<script>
	export default {
		methods: {
			goNext() {
				uni.navigateTo({
					url: "good-tea"
				})
			}
		}
	}
</script>

<style>
</style>
