<template>
	<view class="main">
		<view class="search-wrapper">
			<view class="uni-form-item uni-column">
				<input class="uni-input" @input="onKeyInput" placeholder="请输入地址" />
			</view>
			<block v-for="(addr,index) in results" :key="index">
				<view class="addr-wrapper" @click="itemClick(addr)">
					<view class="addr">
						{{addr.name}}
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	// import api from "../../util/api.js"
	import {
		mapMutations
	} from "vuex"

	export default {
		data() {
			return {
				inputValue: '',
				results: [{
						name: '车公庄001'
					},
					{
						name: '车公庄002'
					}
				]
			}
		},
		methods: {
			...mapMutations({
				'setAddr': "publish/setAddr"
			}),
			itemClick(data) {
				// this.$store.commit('publish/setAddr', data.name);
				this.setAddr(data.name);
				uni.navigateBack({})
			},
			onKeyInput: async function(event) {
				const val = event.target.value;
				// 				const res = await api.searchNearby({
				// 					keywords:val
				// 				});
				// 				return;
				// this.results = res.data;
				// this.inputValue = event.target.value;
				// console.log('val ',val)
			}
		}
	}
</script>

<style>
	.main {
		width: 100%;
	}

	.uni-input {
		background: #e1e1e1;
		height: 90upx;
		margin: 10upx 20upx;
		line-height: 90upx;
	}
</style>
