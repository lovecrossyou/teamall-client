<template>
	<view class="main">
		<view class="search-wrapper">
			<view class="uni-form-item uni-column">
				<input class="uni-input" @input="onKeyInput" placeholder="请输入地址" />
			</view>
			<block v-for="(addr,index) in results" :key="index">
				<view class="addr-wrapper">
					<view class="addr">
						{{addr.name}}
					</view>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				inputValue: '',
				results: []
			}
		},
		methods: {
			onKeyInput: function(event) {
				const val = event.target.value;
				this.inputValue = event.target.value;
				console.log('val ',val)
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
