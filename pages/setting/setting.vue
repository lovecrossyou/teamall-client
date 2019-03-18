<template>
	<view class="settingMain">
		<block v-for="(item,index) in settingList" v-bind:key="index">
			<view class="content" @click.stop="gonext(item.url)">
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
				arrowIcon: "../../static/img/icon_next.png",
				settingList: [{
						txt: "地址管理",
						url: "../address/address"
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
					},
					{
						txt: "购物车",
						url: "../mall/cart/cart"
					},
					{
						txt: "发布",
						url: "../publish/publish"
					},
					{
						txt: "退出登录",
						url: "../login/login"
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
			height:80upx;
			border-top: solid 1upx #e1e1e1;
			
			.text {
				font-family:PingFang-SC-Regular;
				font-weight:"Regular";
				font-size:32upx;
				color:rgba(31,31,31,1);
				padding-left: 39upx;
			}
			.img {
				width: 14upx;
				height: 24upx;
			}
		}
	}
</style>
			

