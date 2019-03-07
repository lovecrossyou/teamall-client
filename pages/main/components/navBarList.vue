<template>
	<view class="nav_bar_list">
		<view v-for="(item,i) in arr" :key="i" @click='key=i' v-bind:class="[key==i?'activeClass':'initialClass']">
			{{item}}
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				arr: ["精选", "绿茶", "红茶", "黄茶", "白茶", "青茶", "黑茶"],
				key: 0
			}
		}
	}
</script>

<style lang="less">
	.nav_bar_list {
		width: 100%;
		height: 88upx;
		display: flex;
		justify-content: space-around;
		align-items: center;
		text-align: center;
		font-size: 28upx;
		font-family: PingFang-SC-Bold;
		.initialClass {
			color: #A0A0A0;
		}
		.activeClass {
			color: #FF594B;
		}
	}
</style>
