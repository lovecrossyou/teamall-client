<template>
	<view class="wrap-content">
		<view class="video-content">
			<image class="video-thumb" v-bind:src="production"></image>
			<image class="video-play" v-bind:src="playIcon"></image>
		</view>
		<view class="title-content">
			<input placeholder="添加标题" placeholder-class="title-style" :value="formData.title">
			</input>
			<text>28</text></view>
		<view class="line"></view>
		<textarea value="" placeholder="说说你的心得，可能会帮助更多人哦~" :value="formData.desc" placeholder-class="content-style" />
		<view class="position-content" @click="goSearch">
			<image v-bind:src="loctionIcon"></image>
			<text>{{formData.address}}</text>
			<uni-icon type="arrowright" color="#bbb" size="20"></uni-icon>
		</view>

		<view class="position-list">
			<text class="position-item" v-for="(position, index) in positionList" :key="index">
				{{ position }}
			</text>
		</view>

		<view class="production-content">
			<image v-bind:src="productionIcon"></image>
			<text>我要代言</text>
			<uni-icon type="arrowright" color="#bbb" size="20"></uni-icon>
		</view>
		<view class="production-list">
			<view v-for="(image, index) in productionList" :key="index">
				<image v-bind:src="image"></image>
			</view>
		</view>
		<view class="button-content">
			<view class="save-button">
				<image v-bind:src="saveIcon"></image>
				草稿
			</view>
			<view class="publish-button">
				<image v-bind:src="publishIcon"></image>
				发布
			</view>
		</view>
		<view class="pop-window" v-if="windowOpened">
			<view class="close-content">
				<image v-bind:src="closeIcon" class="close" @click="closeWindow"></image>
				<view class="line">
			</view>
			
				
			</view>
				<image v-bind:src="windowImg" class="window"></image>
		</view>
	</view>
	
</template>

<script>
import uniIcon from '@/components/uni-icon/uni-icon.vue';
import {mapState} from "vuex"
const image = '../../static/publish/production.png';

export default {
	data() {
		return {
			saveIcon: '../../static/publish/btn_save.png',
			publishIcon: '../../static/publish/btn_publish.png',
			loctionIcon: '../../static/publish/icon_location.png',
			playIcon: '../../static/publish/icon_play.png',
			productionIcon: '../../static/publish/icon_production.png',
			production: '../../static/publish/production.png',
			closeIcon: '../../static/publish/btn_shutdown.png',
			windowImg: '../../static/publish/bg_pop_up.png',
			positionList: [
				'方桌咖啡33',
				'北京市西城区体育',
				'传统北京家常菜',
				'方桌咖啡',
				'北京市西城区体育',
				'传统北京家常菜'
			],
			productionList: [image, image, image, image, image, image],
			windowOpened:true,
		};
	},
	components: {
		uniIcon
	},
	methods: {
		goSearch(){
			uni.navigateTo({
				url:'/pages/searchAddress/search'
			})
		},
		closeWindow(){
			this.$data.windowOpened = false;
		}
	},
	computed:{
		...mapState("publish",{
			formData:state=>state.formData
		}),
// 		formData(){
// 			return this.$store.state.publish.formData;
// 		}
	}
};
</script>

<style lang="less">
.wrap-content {
	display: flex;
	background-color: white;
	flex-direction: column;
	width: 100%;
	.video-content {
		display: flex;

		height: 160upx;
		margin-top: 40upx;
		padding-left: 32upx;
		.video-thumb {
			width: 160upx;
			height: 160upx;
			border-radius: 10upx;
		}
		.video-play {
			position: absolute;
			top: 95upx;
			left: 87upx;
			width: 50upx;
			height: 50upx;
		}
	}
	.title-content {
		display: flex;

		padding-left: 32upx;
		margin-top: 60upx;
		align-items: center;
		padding-right: 32upx;
		input {
			flex: 1;
		}
		.title-style{
			font-size:28upx;
			font-family:PingFang-SC-Regular;
			font-weight:400;
			color:rgba(153,153,153,1);
		}
		text {
			font-size: 28upx;
			font-family: PingFang-SC-Regular;
			font-weight: 400;
			color: rgba(153, 153, 153, 1);
		}
	}
	.line {
		border-top: 1px;
		border-color: rgba(234, 234, 234, 1);
		margin-left: 32upx;
		margin-right: 32upx;
		height: 32upx;
	}
	textarea {
		height: 345upx;
		width: 686upx;

		margin-left: 32upx;
		margin-right: 32upx;
	}
	.content-style{
		font-size:28upx;
		font-family:PingFang-SC-Regular;
		font-weight:400;
		color:rgba(153,153,153,1);
	}
	.position-content {
		display: flex;

		height: 33upx;
		padding-left: 32upx;
		padding-right: 32upx;
		align-items: center;

		image {
			height: 33upx;
			width: 28upx;
		}
		text {
			margin-left: 15upx;
			flex: 1;
			font-size: 32upx;
			font-family: PingFang-SC-Medium;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}
	}

	.position-list {
		height: 54upx;
		margin-top: 25upx;
		display: flex;

		padding-left: 35upx;
		overflow-x: scroll;
		white-space: nowrap;
		.position-item {
			background: rgba(244, 248, 251, 1);
			border-radius: 26upx;
			margin-right: 16upx;

			padding-left: 25upx;
			padding-right: 25upx;

			line-height: 54upx;
			font-size: 26upx;
			font-family: PingFang-SC-Regular;
			font-weight: 400;
			color: rgba(153, 153, 153, 1);
		}
	}

	.production-content {
		margin-top: 51upx;
		display: flex;

		height: 33upx;
		padding-left: 32upx;
		padding-right: 32upx;
		align-items: center;
		image {
			height: 33upx;
			width: 28upx;
		}
		text {
			margin-left: 15upx;
			flex: 1;
			font-size: 32upx;
			font-family: PingFang-SC-Medium;
			font-weight: 500;
			color: rgba(51, 51, 51, 1);
		}
	}
	.production-list {
		display: flex;
		height: 150upx;
		overflow-x: scroll;
		padding-left: 42upx;
		margin-top: 33upx;
		margin-bottom: 47upx;
		image {
			height: 140upx;
			width: 140upx;
			margin-right: 32upx;
		}
	}

	.button-content {
		display: flex;
		justify-content: space-between;
		padding-left: 32upx;
		padding-right: 32upx;
		.save-button {
			display: flex;
			width: 334upx;
			align-items: center;
			justify-content: center;
			height: 88upx;
			background: rgba(255, 129, 118, 1);
			border-radius: 44upx;

			font-size: 32upx;
			font-family: PingFang-SC-Medium;
			font-weight: 500;
			color: rgba(255, 254, 254, 1);
			image {
				width: 32upx;
				height: 32upx;
				margin-right: 12upx;
			}
		}
		.publish-button {
			display: flex;

			align-items: center;
			justify-content: center;
			width: 334upx;
			height: 88upx;

			border-radius: 44upx;
			font-size: 32upx;
			font-family: PingFang-SC-Medium;
			font-weight: 500;
			color: rgba(255, 254, 254, 1);
			background: rgba(255, 89, 75, 1);

			image {
				width: 32upx;
				height: 32upx;
				margin-right: 12upx;
			}
		}
	}
	.pop-window{
		display: flex;
		flex-direction: column;
		position: absolute;
		width:100%;
		height:100%;
		background-color:rgba(0,0,0,0.5);
		padding-top: 100upx;
		z-index: 100;
		.close-content{
		
			display: flex;
			flex-direction: column;
			padding-left: 562upx;
			.close{
				width:56upx;
				height:56upx;
			}
			.line{
				width:1upx;
				height:117upx;
				background:rgba(255,204,215,1);	
			}
			
		}
		

.window{
	width:674upx;
	height:744upx;
	align-self: center;
}
		
	}
}
</style>
