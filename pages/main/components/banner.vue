<template>
	<view>
		  <view class="uni-padding-wrap">
            <view class="page-section swiper">
                <view class="page-section-spacing">
                    <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
                        <swiper-item>
                            <view class="swiper-item uni-bg-red">
								<image :src="mall_banner"></image>
							</view>
                        </swiper-item>
                        <swiper-item>
                            <view class="swiper-item uni-bg-green">
								<image :src="mall_banner"></image>
							</view>
                        </swiper-item>
                        <swiper-item>
                            <view class="swiper-item uni-bg-blue">
								<image :src="mall_banner"></image>
							</view>
                        </swiper-item>
                    </swiper>
                </view>
            </view>
        </view>
	</view>
</template>

<script>
	export default {
    data() {
        return {
			mall_banner:"../../static/main/mall_banner.png",
            background: ['color1', 'color2', 'color3'],
            indicatorDots: true,
            autoplay: true,
            interval: 2000,
            duration: 500
        }
    },
    methods: {
        changeIndicatorDots(e) {
            this.indicatorDots = !this.indicatorDots
        },
        changeAutoplay(e) {
            this.autoplay = !this.autoplay
        },
        intervalChange(e) {
            this.interval = e.target.value
        },
        durationChange(e) {
            this.duration = e.target.value
        }
    }
}
</script>

<style scoped>
	
	.swiper-item>image{
		width: 100%;
		height: 240upx;
	}
	
</style>
