<template>
	<view class="attentionMain">
		<view class="attentionTitle">
			<view class="title">
				为您推荐高人气博主
			</view>
		</view>

		<block v-for="(item,index) in attentionlist" :key=index>
			<view class="attentionItem">
				<image class="itemIcon" :src="item.icon"></image>
				<view class="itemText">
					<view class="itemName">{{item.name}}</view>
					<view class="itemDesc">{{item.desc}}</view>
				</view>
				<button class="itemBtn" @click="changeBtnText(index)">
					<view class="btnText" v-if="item.state">取关</view>
					<view class="btnText" v-else>关注</view>
				</button>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				attentionlist: [{
						state: false,
						icon: "../../../static/user/user_herd.png",
						name: "程咬金",
						desc: "上单"
					},
					{
						state: false,
						icon: "../../../static/user/user_herd.png",
						name: "司马懿",
						desc: "打野"
					},
					{
						state: false,
						icon: "../../../static/user/user_herd.png",
						name: "妲己",
						desc: "中单"
					},
					{
						state: false,
						icon: "../../../static/user/user_herd.png",
						name: "伽罗",
						desc: "射手"
					},
					{
						state: false,
						icon: "../../../static/user/user_herd.png",
						name: "明世隐",
						desc: "辅助"
					}
				]
			}
		},
		methods: {
			changeBtnText(index) {
				this.attentionlist[index].state = !this.attentionlist[index].state
			}
		}
	}
</script>

<style lang="scss">
	.attentionMain {
		width: 100%;

		.attentionTitle {
			width: 100%;
			height: 87upx;
			background: rgba(244, 248, 251, 1);

			.title {
				font-size: 24upx;
				font-family: PingFang-SC-Medium;
				font-weight: 500;
				color: rgba(31, 31, 31, 1);
				padding-left: 40upx;
				padding-top: 31upx;
			}
		}

		.attentionItem {
			display: flex;
			flex-direction: row;
			width: 100%;
			height: 167upx;
			border-bottom: solid 1upx rgba(234, 234, 234, 1);

			.itemIcon {
				width: 96upx;
				height: 96upx;
				border-radius: 50%;
				margin-left: 40upx;
				margin-top: 38upx;

			}

			.itemText {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				flex: 1;
				padding: 50upx 0 43upx 0;
				box-sizing: border-box;
				.itemName {
					font-size: 32upx;
					font-family: PingFang-SC-Bold;
					font-weight: bold;
					color: rgba(31, 31, 31, 1);
					margin-left: 33upx;
				}

				.itemDesc {
					font-size: 24upx;
					font-family: PingFang-SC-Medium;
					font-weight: 500;
					color: rgba(153, 153, 153, 1);
					margin-left: 34upx;
				}
			}

			.itemBtn {
				display: flex;
				flex-direction: column;
				justify-content: center;
				width: 118upx;
				height: 48upx;
				background: rgba(255, 89, 75, 1);
				border-radius: 24upx;
				margin-top: 62upx;
				margin-right: 40upx;
				

				.btnText {
					font-size: 28upx;
					font-family: PingFang-SC-Medium;
					font-weight: 500;
					color: rgba(255, 255, 255, 1);
				}
			}
		}
	}
</style>
