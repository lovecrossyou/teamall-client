<template>
	<view class="segment-wrapper">
		<view class="basic" v-bind:class="[activeIndex===0?activeLeftClass:normalLeftClass]" @click="changeSegment(0)">
			今日秒杀
		</view>
		<block v-for="
		 (data,index) in list" :key="index">
			<view class="basic" v-bind:class="[activeIndex===1? activeMidClass:normalMidClass]" @click="changeSegment(1)">
				{{data}}
			</view>
		</block>
		<view class="basic" v-bind:class="[activeIndex===2?activeRightClass:normalRightClass]" @click="changeSegment(2)">
			明日预告
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isActive: true,
				datas: ["昨日干货", "今日秒杀", "明日预告"],
				activeLeftClass: {
					'left-active': true,
				},
				normalLeftClass: {
					'left-normal': true,
				},
				normalRightClass: {
					'right-normal': true,
				},
				activeRightClass: {
					'right-active': true,
				},
				activeMidClass: {
					'mid-active': true,
				},
				normalMidClass: {
					'mid-normal': true,
				},
				activeIndex: 0
			};
		},
		methods: {
			changeSegment(index) {
				this.activeIndex = index;
			}
		},
		computed: {
			list() {
				var obj_data = Object.assign({}, this.datas);
				var keys = Object.keys(obj_data);
				var list_data = []
				for (var d in keys) {
					list_data.push(obj_data[d]);
				}
				list_data.shift();
				list_data.pop();
				return list_data;
			}
		}
	}
</script>

<style lang="less">
	.segment-wrapper {
		margin: auto;
		width: 600upx;
		height: 88upx;
		display: flex;
		flex-direction: row;
		align-items: center;

		.basic {
			width: 200upx;
			height: 88upx;
			text-align: center;
			line-height: 88upx;
		}

		.left-normal {
			width: 200upx;
			height: 88upx;
			background: #FFFFFF;
			border: 1upx solid rgba(255, 89, 75, 1);
			border-radius: 44upx 0upx 0upx 44upx;
			color: #FF594B;
		}

		.left-active {
			width: 200upx;
			height: 88upx;
			background: rgba(255, 130, 121, 1);
			border: 1upx solid rgba(255, 89, 75, 1);
			border-radius: 44upx 0upx 0upx 44upx;
			color: #FFFFFF;

		}

		.mid-normal {
			width: 200upx;
			height: 88upx;
			background: #FFFFFF;
			border: 1upx solid rgba(255, 89, 75, 1);
			color: #FF594B;
		}

		.mid-active {
			width: 200upx;
			height: 88upx;
			background: rgba(255, 130, 121, 1);
			border: 1upx solid rgba(255, 89, 75, 1);
			color: #FFFFFF;
		}

		.right-normal {
			width: 200upx;
			height: 88upx;
			background: #FFFFFF;
			border: 1upx solid rgba(255, 89, 75, 1);
			border-radius: 0upx 44upx 44upx 0upx;
			color: #FF594B;

		}

		.right-active {
			width: 200upx;
			height: 88upx;
			background: rgba(255, 130, 121, 1);
			border: 1upx solid rgba(255, 89, 75, 1);
			border-radius: 0upx 44upx 44upx 0upx;
			color: #FFFFFF;

		}

		.item {
			width: 200upx;
			background-color: #FF8279;
		}
	}
</style>
