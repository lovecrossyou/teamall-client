<template>
	<view class="content-wrapper">
		<view class="addr-cell">
			<view class="title">联系人</view>
			<input class="addr-input" type="text" v-model="addrM.name" placeholder="姓名" />
			<uni-icon type="arrowright" color="#bbb" size="20"></uni-icon>
		</view>
		<view class="addr-cell">
			<view class="title">电话</view>
			<input
				class="addr-input"
				type="number"
				v-model="addrM.phone"
				placeholder="收货人电话"
			/>
			<uni-icon type="arrowright" color="#bbb" size="20"></uni-icon>
		</view>
		<view class="addr-cell" @click="showCityPicker">
			<view class="title">地址</view>
			<input class="addr-input" type="text" v-model="addrM.city" placeholder="省,市,区/县"  disabled=true/>
			<uni-icon type="arrowright" color="#bbb" size="20"></uni-icon>
		</view>
		<view class="addr-cell">
			<view class="title">详细地址</view>
			<input class="addr-input" type="text" v-model="addrM.detail" placeholder="详细地址" />
			<uni-icon type="arrowright" color="#bbb" size="20"></uni-icon>
		</view>
		<view class="defult-addr" @click="changeDefult">
			<image v-bind:src="defultIcon"></image>

			<view class="defult-text">设为默认地址</view>
		</view>

		<view class="save-wrapper" @click="saveOrUpdate"><view class="save-btn">保存</view></view>
			<mpvue-city-picker :themeColor="themeColor" ref="mpvueCityPicker" :pickerValueDefault="cityPickerValueDefault"
		 @onCancel="onCancel" @onConfirm="onConfirm"></mpvue-city-picker>
	</view>
</template>

<script>
import uniIcon from '@/components/uni-icon/uni-icon.vue';
import { mapState } from 'vuex';
import mpvueCityPicker from '@/components/mpvue-citypicker/mpvueCityPicker.vue'
export default {
	computed: {
		...mapState({
			addrM: state => state.address.editAddress
		})
	},
	data() {
		return {
			defultIcon: '../../static/addr/defult_addr.png',
			isDefult:addrM.isDefault,
			themeColor: '#007AFF',
			cityPickerValueDefault: [0, 0, 1],
		};
	},
	components: {
		uniIcon,
		mpvueCityPicker
	},
	methods: {
		saveOrUpdate() {
			console.log('params', this.addrM);
		},
		showCityPicker(){
			this.$refs.mpvueCityPicker.show();
		},
		changeDefult(){
			this.isDefult = !this.isDefult;
			if(this.isDefult){
				this.defultIcon = '../../static/addr/defult_addr.png';
			}else{
				this.defultIcon = '../../static/addr/defult_addr_selected.png';
			}
			
		},
		onConfirm(e) {
			console.log(e)
		},
		onCancel(e) {
			console.log(e)
		},
		
	},
	 onBackPress() {
	  if (this.$refs.mpvueCityPicker.showPicker) {
	  	this.$refs.mpvueCityPicker.pickerCancel();
	    return true;
	  }
	},
		onUnload() {
			
			if (this.$refs.mpvueCityPicker.showPicker) {
				this.$refs.mpvueCityPicker.pickerCancel()
			}
		}
};
</script>

<style lang="less">
.content-wrapper {
	display: flex;
	flex-direction: column;
	width: 100%;
	background: #ffffff;
	align-items: center;
	.addr-cell {
		padding: 0 40upx;
		display: flex;
		flex-direction: row;
		align-items: center;
		height: 114upx;
		background: #ffffff;
		border-bottom: solid 1upx #e1e1e1;
		.title {
			width: 180upx;
		}
		.addr-input {
			flex: 1;
			margin-left: 49upx;
		}
	}
	.defult-addr {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-top: 154upx;
		image {
			width: 32upx;
			height: 32upx;
		}
		.defult-text {
			margin-left: 12upx;
			font-size: 28upx;
			font-family: PingFang-SC-Medium;
			font-weight: 500;
			color: rgba(31, 31, 31, 1);
			
		}
	}
	.save-wrapper {
		margin-top: 300upx;
		width: 540upx;
		height: 84upx;
		background: rgba(255, 89, 75, 1);
		border-radius: 10upx 10upx 10upx 10upx;

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
