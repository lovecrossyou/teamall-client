<template>
	<view class="wrap-content">
		<text class="title">验证手机号注册</text>
		<view class="phone-content">
			+86
			<image v-bind:src="downArrow"></image>
			<input type="number" placeholder="输入手机号" class="input-phone" />
		</view>
		<view class="code-content">
			<input type="number" placeholder="输入验证码" class="input-code" />
			<view class="get-code" @click="getCode">获取验证码</view>
		</view>
		<view class="confirm" @click="next">确认</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			downArrow: '../../static/login/down_arrow.png'
		};
	},
	methods: {
		getCode() {
			console.log('获取验证码');
		},
		next(){
			uni.navigateTo({
				url:'./chooseLocation'
			})
		}
	}
};
</script>

<style lang="less">
.wrap-content {
	width: 100%;
	display: flex;
	flex-direction: column;
	.title {
		margin-top: 100upx;
		margin-left: 82upx;
		font-size: 36upx;
		font-family: PingFang-SC-Bold;
		font-weight: bold;
		color: rgba(31, 31, 31, 1);
	}
	.phone-content {
		display: flex;
		padding-left: 108upx;
		padding-right: 75upx;

		height: 108upx;
		align-items: center;

		font-size: 32upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(54, 54, 54, 1);
		margin-top: 68upx;
		image {
			width: 24upx;
			height: 15upx;
			margin-left: 8upx;
		}
		.input-phone {
			margin-left: 30upx;
			font-size: 32upx;
			font-family: PingFang-SC-Medium;
			font-weight: 500;
			color: rgba(54, 54, 54, 1);
		}
	}
	.code-content {
		display: flex;
		padding-left: 108upx;
		padding-right: 68upx;
		margin-top: 20upx;
		height: 108upx;
		align-items: center;

		.input-code {
			font-size: 32upx;
			font-family: PingFang-SC-Medium;
			font-weight: 500;
			color: rgba(54, 54, 54, 1);
			flex: 1;
		}
		.get-code {
			align-self: stretch;
			font-size: 28upx;
			font-family: PingFang-SC-Medium;
			font-weight: 500;
			color: rgba(255, 89, 75, 1);
			display: flex;
			justify-content: center;
			align-items: center;

			padding-left: 8upx;
			padding-right: 8upx;
		}
	}
	.confirm {
		margin-left: 75upx;
		margin-right: 75upx;
		margin-top: 109upx;
		height: 88upx;
		background: rgba(255, 89, 75, 1);
		border: 2upx solid rgba(255, 89, 75, 1);
		border-radius: 44upx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 32upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: white;
	}
}
</style>
