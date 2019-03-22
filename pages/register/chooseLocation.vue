<template>
	<view class="wrap-content">
		<text class="title">选择您的籍贯\n方便小茶帮您推荐喜欢的茶哦</text>
		<view class="choose-loaction" @click="showCityPicker">地址</view>
		<view class="blank"></view>
		<view class="skip" @click="skip">跳过</view>
		<mpvue-city-picker
			:themeColor="themeColor"
			ref="mpvueCityPicker"
			:pickerValueDefault="cityPickerValueDefault"
			@onCancel="onCancel"
			@onConfirm="onConfirm"
		></mpvue-city-picker>
	</view>
</template>

<script>
import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue';
export default {
	components: {
		mpvueCityPicker
	},
	data() {
		return {
			themeColor: '#007AFF',
			cityPickerValueDefault: [0, 0, 1]
		};
	},
	methods: {
		skip() {
			console.log('跳过');
		},
		showCityPicker() {
			this.$refs.mpvueCityPicker.show();
		},
		onConfirm(e) {
			console.log(e);
		},
		onCancel(e) {
			console.log(e);
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
		margin-top: 150upx;
		font-size: 38upx;
		font-family: PingFang-SC-Bold;
		font-weight: bold;
		color: #1f1f1f;
		text-align: center;
	}

	.choose-loaction {
		margin-top: 110upx;
		margin-left: 68upx;
		margin-right: 68upx;
		border-bottom: 1upx solid #cac9c9;
		display: flex;
		align-items: center;
		height: 70upx;
	}
	.blank {
		flex: 1;
	}
	.skip {
		width: 186upx;
		margin-bottom: 121upx;
		height: 72upx;
		background: rgba(255, 89, 75, 0);
		border: 2upx solid rgba(255, 89, 75, 1);
		border-radius: 44upx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 32upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(255, 89, 75, 1);
		align-self: center;
	}
}
</style>
