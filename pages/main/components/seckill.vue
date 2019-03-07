<template>
	<view>
		<view class="home_top_selling_tit" @click="goNext">
			<view>限时秒杀</view>
			<view class="home_top_selling_tit_right">
				<span>23</span>:
				<span>23</span>:
				<span>11.11</span>
			</view>
		</view>
		<view class="time_limit_selling">

		</view>
	</view>
</template>

<script>
	export default {
		methods: {
			goNext() {
				uni.navigateTo({
					url: "good-tea"
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

<style lang="less">

</style>
