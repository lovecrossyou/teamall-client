<template>
	<transition name="fade">
		<view class="unik-modal" v-show="showModal">
			<view class="unik-modal-wrap">
				<view class="unik-modal-title">
					分享
				</view>
				<view class="unik-modal-container">
					<view class="unik-modal-container-item" @click="toFriend">
						<image class="unik-modal-item"  v-bind:src="wechatIcon"></image>
						<view class="unik-modal-item-text">好友</view>
					</view>
					<view class="unik-modal-container-item" @click="toFriendCircle">
						<image class="unik-modal-item"  v-bind:src="friendCircleIcon"></image>
						<view class="unik-modal-item-text">朋友圈</view>
					</view>
				</view>
			</view>
			<view class="background-shadow" v-if="shadow" @click="clickMask && closeModal()"></view>
		</view>
	</transition>
</template>

<script>
	export default {
		data() {
			return {
				showModal: false,
				wechatIcon:'../../static/img/icon_wechat.png',
				friendCircleIcon:'../../static/img/icon_friend_circle.png'
			};
		},
		props: {
			// 是否显示footer
			showButton: {
				type: Boolean,
				default: true
			},
			// 是否显示蒙层
			shadow: {
				type: Boolean,
				default: true
			},
			// 点击蒙层是否关闭模态框
			clickMask: {
				type: Boolean,
				default: true
			},
			 
		},
		methods: {
			toFriend () {
				this.$emit('leftModal');
				this.closeModal();
			},
			toFriendCircle () {
				this.$emit('rightModal');
				this.closeModal();
			},
			closeModal () {
				this.showModal = false;
			},
			show () {
				this.showModal = true;
			}
		}
	}
</script>

<style scoped>
	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to {
		opacity: 0;
	}
	.unik-modal {
		width: 100%;
		height: 100%;
 		position: fixed;
		top: 0;
		z-index: 1000;
	}
	.unik-modal-wrap {
		width: 100%;
		height: max-content;
		position: fixed;
		background: #fff;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		z-index: 10;
	}
	.unik-modal-title {
		display: flex;
		justify-content: center;
		padding: 20upx 30upx;
	}
	.background-shadow{
		width: 100%;
		height: 100%;
		position: absolute;
		background: rgba(0,0,0,.3);
	}
	.unik-modal-footer {
		display: flex;
		padding: 20upx 30upx;
	}
	.unik-modal-footer button{
		padding: 0;
		height: 64upx;
		width: 160upx;
		line-height: 64upx;
		font-size: 28upx;
	}
	.unik-modal-content {
		display: flex;
		flex-grow: 1;
		padding: 0 30upx 20upx;
		max-height: 600upx;
		overflow: auto;
	}
	.unik-modal-container{
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.unik-modal-container-item{
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 10upx 30upx;
    }
	.unik-modal-item{
		height: 80upx;
		width: 80upx;
	}
	.unik-modal-item-text{
		font-size:28upx;
		font-family:PingFang-SC-Medium;
		font-weight:500;
	}
</style>
