<template>
	<view class="wrap-content">
		<image v-bind:src="backgroundImage"></image>
		<view class="font-view">
			<text>带你寻找\n最适合你的茶品</text>
			<view class="margin">
				
			</view>
			<view class="login-wx" @click="loginByWX">微信快捷登录</view>
			<view class="login-phone" @click="loginByPhone">手机号验证码登录</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			backgroundImage: '../../static/login/login_bg.png'
		};
	},
	methods:{
		loginByWX(){
			console.log("微信登录")
		},
		loginByPhone(){
			uni.navigateTo({
				url:'../register/register'
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
	image {
		width: 100%;
		height: 100%;
	}
	.font-view {
		position: absolute;
		width: 100%;
		background-color: rgba(0, 0, 0 0);
		height: 100%;
		display: flex;
		flex-direction: column;
		text {
			width: 559px;
			height: 173upx;
			font-size: 80upx;
			font-family: PingFang-SC-Bold;
			font-weight: bold;
			color: rgba(255, 255, 255, 1);
			margin-left: 47upx;
			margin-top: 90upx;
		}
		.margin{
			flex: 1;
		}
		.login-wx {
			margin-left: 75upx;
			margin-right: 75upx;
			margin-bottom: 26upx;
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
		.login-phone {
			margin-left: 75upx;
			margin-right: 75upx;
			margin-bottom: 92upx;
			height: 88upx;
			background: rgba(255, 89, 75, 0);
			border: 2upx solid rgba(255, 89, 75, 1);
			border-radius: 44upx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 32upx;
			font-family: PingFang-SC-Medium;
			font-weight: 500;
			color: rgba(31, 31, 31, 1);
		}
	}
}
</style>
