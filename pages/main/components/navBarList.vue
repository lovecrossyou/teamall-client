<template>
	<view class="nav_bar_list">
		<view v-for="(item,i) in data" :key="i" @click='changeActive(i)' v-bind:class="[selectedIndex==i?'activeClass':'initialClass']">
			{{item}}
		</view>
	</view>
</template>

<script>
	
	export default {
		props:{
			data:Array,
			IndexChange:Function
		},
		data() {
			return {
				selectedIndex: 0
			}
		},
		methods:{
			changeActive(i){
				this.selectedIndex=i;
				this.IndexChange(i);
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
