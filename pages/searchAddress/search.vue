<template>
	<view class="main">
		<view class="search-box">
			<image v-bind:src="searchIcon"></image>
			<input
				class="search-input"
				@input="onKeyInput"
				placeholder="搜索地址"
				placeholder-class="input-place"
			/>
		</view>
		<view class="addr-wrapper unshow" v-if="inputValue === ''">不显示我的位置</view>
		<block v-for="(addr, index) in results" :key="index">
			<view class="addr-wrapper" @click="itemClick(addr)">
				<view class="name">
					{{ addr.name.substring(0,addr.name.indexOf(inputValue)) }}
					<view class="name color-text">{{addr.name.indexOf(inputValue) > -1 ? inputValue : ''}}</view>
					{{ addr.name.indexOf(inputValue) > -1 ? addr.name.substring(addr.name.indexOf(inputValue)+inputValue.length) :'' }}
				</view>
				<view class="add-distance" v-if="!addr.isProvince">
					<view class="address">{{ addr.address }}</view>
					<view class="distance">{{ addr.distance }}</view>
				</view>
			</view>
		</block>
	</view>
</template>

<script>
// import api from "../../util/api.js"
import { mapMutations } from 'vuex';

export default {
	data() {
		return {
			searchIcon: '../../static/publish/icon_search.png',
			inputValue: '',
			results: [
				{
					name: '北京市',
					isProvince: true
				},
				{
					name: '车公庄001',
					address: '百万张大姐11号',
					distance: '33m',
					isProvince: false
				},
				{
					name: '车公庄002',
					address: '百万张大姐333号',
					distance: '336m',
					isProvince: false
				}
			]
		};
	},
	methods: {
		...mapMutations({
			setAddr: 'publish/setAddr'
		}),
		itemClick(data) {
			// this.$store.commit('publish/setAddr', data.name);
			this.setAddr(data.name);
			uni.navigateBack({});
		},
		onKeyInput: function(event) {
			//console.log(event);
			//const val = event.target.value;
			// 				const res = await api.searchNearby({
			// 					keywords:val
			// 				});
			// 				return;
			// this.results = res.data;
			this.inputValue = event.target.value;
			// console.log('val ',val)
		}
	}
};
</script>

<style lang="less">
.main {
	width: 100%;
	display: flex;
	flex-direction: column;

	.search-box {
		padding-left: 23upx;
		display: flex;
		margin-top: 20upx;
		margin-left: 31upx;
		margin-right: 31upx;
		height: 71upx;
		background: rgba(234, 234, 234, 1);
		border-radius: 4upx;
		align-items: center;

		image {
			width: 28upx;
			height: 28upx;
		}

		.search-input {
			margin-left: 8upx;
		}
		.input-place {
			font-size: 28upx;
			font-family: PingFang-SC-Regular;
			font-weight: 400;
			color: rgba(153, 0, 153, 1);
		}
	}

	.unshow {
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}
	.addr-wrapper {
		height: 136upx;
		margin-left: 31upx;
		margin-right: 31upx;
		display: flex;
		justify-content: center;
		border-bottom: 1upx solid #eaeaea;
		flex-direction: column;

		.name {
			display: flex;
			font-size: 30upx;
			font-family: PingFang-SC-Bold;
			font-weight: bold;
			color: rgba(31, 31, 31, 1);

			.color-text {
				color: #ff594b;
			}
		}
		.add-distance {
			display: flex;
			justify-content: space-between;
			.address {
				font-size: 26upx;
				font-family: PingFang-SC-Medium;
				font-weight: 500;
				color: rgba(31, 31, 31, 1);
			}
			.distance {
				font-size: 26upx;
				font-family: PingFang-SC-Bold;
				font-weight: bold;
				color: rgba(31, 31, 31, 1);
			}
		}
	}
}
</style>
