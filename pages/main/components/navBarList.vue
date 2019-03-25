<template>
	<view class="nav_bar_list">
		<view v-for="(item,i) in data" :key="i" @click='changeActive(i)' v-bind:class="[selectedIndex==i?'activeClass':'initialClass']">
			{{item.categoryName}}
		</view>
	</view>
</template>

<script>
	import api from '../../../util/api.js';
	
	export default {
		props:{
			data:Array,
		},
		data() {
			return {
				selectedIndex: 0
			}
		},
		methods:{
			async fetchTeaMallContent(ind){
				const res = await api.HomeTeaMallContent({
					  "accessInfo": {},
					  "categoryId": ind
				})
				this.$store.commit('main/setMallContent',res)
			},
			changeActive(i){
				this.selectedIndex=i;
				this.fetchTeaMallContent(i);
				this.$emit('sendSelectedInd',i);
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
