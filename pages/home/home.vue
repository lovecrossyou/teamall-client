<template>
	<div>小程序首页不开发,想要预览,使用客户端模拟器
		<view class="segment-container">
			<m-segment :onSegmentChange="onSegmentChange"></m-segment>
		</view>
	</div>

</template>

<script>
	import mSegment from "../../components/m-segment.vue"
	export default {
		data(){
			return {
				datas:[]
			}
		},
		methods:{
			onSegmentChange(data){
				console.log('data ',data);
			}
		},
		components: {
			mSegment
		}
	}
</script>

<style lang="less">
	.segment-container{
		width: 400upx;
		height: 88upx;
	}
</style>
