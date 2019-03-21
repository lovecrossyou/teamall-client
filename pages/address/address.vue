<template>
	<view class="content-wrapper">
		<view class="addr-list">
			<block v-for="(address, index) in addressList" :key="index">
				<view class="addr-item">
					<view class="addr-info">
						<view class="addr-info-top">
							<view class="addr-name">{{ address.name }}</view>
							<view class="addr-phone">{{ address.phone }}</view>
						</view>
						<view class="addr-detail">{{ address.detail }}</view>
					</view>
					<image v-bind:src="modifyIcon" @click="edit(address)"></image>
				</view>
			</block>
		</view>

		<view class="add-addr-button" @click="edit({})">
			<image v-bind:src="addIcon"></image>
			<view class="text">添加地址</view>
		</view>
	</view>
</template>

<script>
import { mapMutations,mapState,mapActions } from 'vuex';

export default {
	computed:{
		...mapState({
			addressList:state=>state.address.list,
		}),
 		/* addressList(){  常规写法
 			return this.$store.state.address.list;
 		} */

	},
	
	
	methods: {
		...mapMutations({
			saveEdit: 'address/saveEdit',
			
		}),
		...mapActions({
			getAddressList:'address/getAddressList',
		}),
		edit(address) {
			this.saveEdit(address);
			uni.navigateTo({
				url: 'edit'
			});
			
		}
	},
	data() {
		return {
			modifyIcon: '../../static/addr/addr_edit_icon.png',
			addIcon: '../../static/addr/add_icon.png',
			
		};
	},
	onLoad() {
		//this.$store.dispatch('address/getAddressList')  常规写法
		this.getAddressList();
	}
};
</script>

<style lang="less">
@footerHeight: 102upx;

.content-wrapper {
	width: 100%;
	

	.addr-list {
		padding-bottom: @footerHeight;

		.addr-item {
			background-color: white;
			display: flex;
			flex-direction: row;
			padding: 0 38upx 0 40upx;
			box-sizing: border-box;
			width: 100%;
			justify-content: space-between;
			align-items: center;
			height: 172upx;
			border-bottom: solid 1upx #eaeaea;

			.addr-info {
				display: flex;
				flex-direction: column;

				.addr-info-top {
					display: flex;
					flex-direction: row;

					.addr-name {
						font-size: 32upx;
						font-family: PingFang-SC-Medium;
						font-weight: 500;
						color: rgba(31, 31, 31, 1);
					}

					.addr-phone {
						margin-left: 48upx;
						font-size: 32upx;
						font-family: PingFang-SC-Medium;
						font-weight: 500;
						color: rgba(31, 31, 31, 1);
					}
				}

				.addr-detail {
					font-size: 24upx;
					font-family: PingFang-SC-Regular;
					font-weight: 400;
					color: rgba(153, 153, 153, 1);
				}
			}

			image {
				width: 36upx;
				height: 36upx;
			}
		}
	}

	.add-addr-button {
		position: fixed;
		bottom: 0;
		display: flex;
		flex-direction: row;
		width: 100%;
		height: 102upx;
		background: rgba(255, 89, 75, 1);
		align-items: center;
		justify-content: center;

		image {
			width: 32upx;
			height: 32upx;
		}

		.text {
			margin-left: 16upx;
			font-size: 32upx;
			font-family: PingFang-SC-Medium;
			font-weight: 500;
			color: rgba(255, 255, 255, 1);
		}
	}
}
</style>
