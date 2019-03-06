<template>
	<view class="content-wrapper">
		<view class="addr-cell">
			<view class="title">联系人</view>
			<input class="addr-input" type="text" v-model="addrM.name" placeholder="姓名" />
			<uni-icon type="arrowright" color="#bbb" size="20"></uni-icon>
		</view>
		<view class="addr-cell">
			<view class="title">电话</view>
			<input class="addr-input" type="number" v-model="addrM.phone" placeholder="收货人电话" />
			<uni-icon type="arrowright" color="#bbb" size="20"></uni-icon>
		</view>
		<view class="save-wrapper" @click="saveOrUpdate">
			<view class="save-btn">保存</view>
		</view>
	</view>
</template>

<script>
	import uniIcon from '@/components/uni-icon/uni-icon.vue'
		import {
			mapState,
		} from "vuex";
	export default {
		computed: {
			...mapState({
				addrM:state=>state.address.editAddress,
				
			})
		},
		data() {
			return {}
		},
		components: {
			uniIcon
		},
		methods: {
			saveOrUpdate() {
				console.log('params', this.addrM);
			}
		}
	}
</script>

<style lang="less">
	.content-wrapper {
		width: 100%;
		background: #FFFFFF;

		.addr-cell {
			padding: 0 40upx;
			display: flex;
			flex-direction: row;
			align-items: center;
			height: 114upx;
			background: #FFFFFF;
			border-bottom: solid 1upx #e1e1e1;

			.addr-input {
				flex: 1;
				margin-left: 49upx;
			}
		}

		.save-wrapper {
			margin: 20upx auto;

			width: 540upx;
			height: 84upx;
			background: rgba(255, 89, 75, 1);
			border-radius: 16upx 10upx 10upx 10upx;

			.save-btn {
				margin: auto;
				width: 156upx;
				height: 84upx;
				font-size: 32upx;
				font-family: PingFang-SC-Medium;
				font-weight: 500;
				color: rgba(255, 255, 255, 1);
				line-height: 84upx;
				text-align: center;
			}
		}
	}
</style>
