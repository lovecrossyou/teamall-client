<template>
	<view class="settingMain">
		<block v-for="(item,index) in settingList" v-bind:key="index">
			<view class="content" @click="gonext(item.url)">
				<view class="text">{{item.txt}}</view>
				<image class="img" :src="arrowIcon"></image>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				arrowIcon: "../../static/setting/set_icon_next",
				settingList: [{
						txt: "地址管理",
						url: "addressManage"
					},
					{
						txt: "绑定手机号",
						url: "phonenumberManage"
					},
					{
						txt: "清除缓存",
						url: "cacheManage"
					},
					{
						txt: "隐私设置",
						url: "privacyManage"
					}
				]
			}
		},
		methods: {
			gonext(gourl) {
				uni.navigateTo({
					url: gourl
				})
			}
		}
	}
</script>

<style lang="scss">
	.settingMain {
		width: 100%;
		background: #fff;
		.content {
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			align-items: center;
			background: #fff;
			height: 112upx;
			border-top: solid 1upx #e1e1e1;

			.text {
				font-size: 32upx;
				padding-left: 39upx;
			}

			.img {
				width: 14upx;
				height: 24upx;
			}
		}


	}
</style>
