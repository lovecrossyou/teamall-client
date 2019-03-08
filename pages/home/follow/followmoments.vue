<template>
	<view class="momentsMain">
		<block v-for="(item,index) in momentslist" :key="index">
			<view class="momentsItem">
				<view class="topItem">
					<view class="userItem">
						<image class="userIcon" :src="item.usericon"></image>
						<view class="userName">{{item.username}}</view>
					</view>
					<view class="weatherItem">
						<image class="weatherIcon" :src="item.weathericon"></image>
						<view class="weather">{{item.weather}}</view>
						<view class="weatherTemperature">{{item.weathertemperature}}°C</view>
					</view>
					<view class="heartItem">
						<view class="heartText">心情：</view>
						<view class="heart">{{item.heart}}°C</view>
					</view>
				</view>
				<view class="momentsBanner">
					<banner></banner>
				</view>
				<view class="momentsTitle">
					{{item.momentstitle}}
				</view>
				<view class="momentsNum">
					<view class="like">
						<image class="fIcon" :src="likeicon"></image>
						<view class="fNum">{{item.momentslike}}w</view>
					</view>
					<view class="forwarding">
						<image class="sIcon" :src="forwardingicon"></image>
						<view class="sNum">{{item.momentsforward}}w</view>
					</view>
					<view class="commens">
						<image class="tIcon" :src="commentsicon"></image>
						<view class="tNum">{{item.momentscomment}}w</view>
					</view>
					
				</view>
			</view>
		</block>
	</view>
</template>

<script>
	import banner from './components/banner.vue';
	export default{
		data(){
			return{
				momentslist:[
					{userid:1,username:"全球摄影排行榜",usericon:"../../../static/user/user_herd.png",weather:"雨",weathericon:"../../../static/moments/weather.png",weathertemperature:22,heart:55,momentstitle:"喜腾山泉，一桶天下",momentslike:1.3,momentsforward:1.5,momentscomment: 1.1},
					{userid:2,username:"猪猪侠",usericon:"../../../static/user/user_herd.png",weather:"霾",weathericon:"../../../static/moments/weather.png",weathertemperature:3,heart:-100,momentstitle:"一张蓝图绘到底",momentslike:0.5,momentsforward:0.8,momentscomment: 0.1},
					{userid:3,username:"喜娃",usericon:"../../../static/user/user_herd.png",weather:"雷阵雨",weathericon:"../../../static/moments/weather.png",weathertemperature:14,heart:1,momentstitle:"自强不息，厚德载物",momentslike:2.1,momentsforward:2.4,momentscomment:2.1 },
					{userid:4,username:"黄金大佬",usericon:"../../../static/user/user_herd.png",weather:"雪",weathericon:"../../../static/moments/weather.png",weathertemperature:-22,heart:38,momentstitle:"2019年上市",momentslike:11.1,momentsforward:8.8,momentscomment:15.5 }
				
				],
				likeicon:"../../../static/moments/doucha_btn_like.png",
				forwardingicon:"../../../static/moments/doucha_btn_forwarding.png",
				commentsicon:"../../../static/moments/doucha_btn_comments.png"
			}
		}
	}
</script>

<style lang="scss">
	.momentsMain {
		width: 100%;
		background:rgba(244,248,251,1); 
		
		.momentsItem{
			width: 100%;
			border-top: solid 20upx rgba(244,248,251,1);
		}
	}
</style>
