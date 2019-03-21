<template>
	<view class="tea_feight_wrapper">
		<!-- 点赞排行 -->
		<view class="ranking_wrapper">
			<view class="ranking_title">
				<view class="ranking_date_info">
					<view class="ranking_week">一周排行榜</view>
					<view class="ranking_date">2019.1.1-2019.1.7</view>
				</view>
				<view class="question_img" @click="questionModal">
					<img
						src="http://qnimage.xiteng.com/Teafight_icon_question%20mark@2x.png"
						alt=""
					/>
				</view>
			</view>

			<view class="raking_reveal">
				<view class="user_head_area">
					<view class="top_user_img_area">
						<view class="user_head_img">
							<img
								src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=682126281,627584591&fm=26&gp=0.jpg"
								alt=""
							/>
						</view>
						<view class="attention_icon">
							<img src="http://qnimage.xiteng.com/Teafight_icon_add@2x.png" alt="" />
						</view>
					</view>
					<view class="user_name">朱理哲大老婆</view>
				</view>
				<view class="user_head_area">
					<view class="top_user_img_area">
						<view class="user_head_img">
							<img
								src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1743918389,819611537&fm=26&gp=0.jpg"
								alt=""
							/>
						</view>
						<view class="attention_icon">
							<img src="http://qnimage.xiteng.com/Teafight_icon_add@2x.png" alt="" />
						</view>
					</view>
					<view class="user_name">朱理哲二老婆</view>
				</view>
				<view class="user_head_area">
					<view class="top_user_img_area">
						<view class="user_head_img">
							<img
								src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2291686338,2586479767&fm=26&gp=0.jpg"
								alt=""
							/>
						</view>
						<view class="attention_icon">
							<img src="http://qnimage.xiteng.com/Teafight_icon_add@2x.png" alt="" />
						</view>
					</view>
					<view class="user_name">朱理哲小老婆</view>
				</view>
			</view>
			<view class="likes_num_ranking">
				<view class="likes_num">15245</view>
				<view class="likes_num">18245</view>
				<view class="likes_num">1045</view>
			</view>
		</view>
		<!-- 文章排行 -->
		<view class="article_ranking_wrapper">
			<view class="top_person_info">
				<view class="person_info_left">
					<view class="person_info_img">
						<img
							src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=682126281,627584591&fm=26&gp=0.jpg"
							alt=""
						/>
					</view>
					<view class="person_info_name">在路上</view>
				</view>
				<view class="person_info_right">
					<view class="person_info_rank">第一名</view>
					<view class="week_notice">第三周实力榜</view>
				</view>
			</view>
			<!-- 轮播 -->
			<view class="scroll-wrapper">
				<swiper
					class="swiper"
					:indicator-dots="indicatorDots"
					:autoplay="autoplay"
					:interval="interval"
					:duration="duration"
				>
					<swiper-item>
						<view class="swiper-item"><image :src="product_image"></image></view>
					</swiper-item>
					<swiper-item>
						<view class="swiper-item"><image :src="product_image"></image></view>
					</swiper-item>
				</swiper>
			</view>
			<!-- 文字展开隐藏 -->
			<hideText></hideText>

			<!-- 点赞 & 转发 & 评论 -->
			<view class="operation_list">
				<view class="bottom_operation">
					<view class="operation_icon">
						<img src="http://qnimage.xiteng.com/Teafight_icon_%20heart@2x.png" alt="" />
					</view>
					<view class="operation_num">1.5W</view>
				</view>
				<view class="bottom_operation">
					<view class="operation_icon">
						<img src="http://qnimage.xiteng.com/Teafight_icon_share@2x.png" alt="" />
					</view>
					<view class="operation_num">1.5W</view>
				</view>
				<view class="bottom_operation">
					<view class="operation_icon">
						<img src="http://qnimage.xiteng.com/Teafight_icon_comment@2x.png" alt="" />
					</view>
					<view class="operation_num">1.5W</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import hideText from '@/components/teaModel/hideText.vue';
export default {
	data() {
		return {
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500,
			product_image: 'http://qnimage.xiteng.com/Teafight_img@2x.png'
		};
	},
	components: {
		hideText
	},
	computed: {},
	methods: {
		questionModal() {
			uni.showModal({
				title: '关于排行榜',
				content: '博主发布的关于茶艺的动态或者视频，按照点赞数量进行排行。排行榜为周排名，每周一零点更新数据',
				showCancel:false,
				success: function(res) {
				}
			});
		}
	}
};
</script>

<style scoped>
.tea_feight_wrapper {
	width: 100%;
}
.wrap_body {
	height: 100%;
}

.ranking_wrapper {
	width: 100%;
	height: 600upx;
	background: url('http://qnimage.xiteng.com/Teafight_top_bg@2x.png') center center no-repeat;
	background-size: 100% 600upx;
	position: relative;
}

.ranking_title {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding: 32upx 38upx;
	box-sizing: border-box;
}

.ranking_date_info {
	display: flex;
	flex-direction: row;
	align-items: center;
}

.ranking_week {
	color: #1f1f1f;
	font-size: 28upx;
	font-weight: bold;
}

.ranking_date {
	color: #666666;
	font-size: 24upx;
	margin-left: 15upx;
}

.question_img img {
	width: 32upx;
	height: 32upx;
}

.raking_reveal {
	width: 75%;
	height: 280upx;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 0 auto;
}

.user_head_area {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.user_head_area:nth-child(1) {
	justify-content: center;
}
.user_head_area:nth-child(2) {
	justify-content: flex-start;
}
.user_head_area:nth-child(3) {
	justify-content: flex-end;
}

.user_head_img {
	width: 100%;
	height: 122upx;
	border-radius: 50%;
	text-align: center;
}

.user_head_img img {
	width: 122upx;
	height: 122upx;
	border-radius: 50%;
	border: 4upx solid #fff;
}

.attention_icon {
	position: absolute;
	left: 60upx;
	bottom: -10upx;
}

.attention_icon img {
	width: 32upx;
	height: 32upx;
}

.user_name {
	width: 100%;
	text-align: center;
	color: #1f1f1f;
	font-size: 26upx;
	margin-top: 17upx;
	font-weight: bold;
}

.top_user_img_area {
	width: 100%;
	height: 140upx;
	position: relative;
}
.likes_num_ranking {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	color: #fff;
	font-size: 28upx;
}
.likes_num:nth-child(1) {
	position: absolute;
	bottom: 23.3%;
	left: 18%;
}
.likes_num:nth-child(2) {
	position: absolute;
	bottom: 30.3%;
	left: 45.5%;
}
.likes_num:nth-child(3) {
	position: absolute;
	bottom: 19.3%;
	left: 72.3%;
}
.article_ranking_wrapper {
	width: 100%;
	background-color: #fff;
}
.top_person_info {
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 30upx 32upx;
	box-sizing: border-box;
}
.person_info_left {
	display: flex;
	flex-direction: row;
	align-items: center;
}
.person_info_img img {
	width: 70upx;
	height: 70upx;
	border-radius: 50%;
}
.person_info_name {
	color: #666;
	font-size: 24upx;
	font-weight: bold;
	margin-left: 13upx;
}
.person_info_right {
	display: flex;
	flex-direction: column;
	color: #ebbf8d;
	width: 200upx;
	text-align: center;
}
.person_info_rank {
	font-size: 28upx;
	font-weight: bold;
}
.week_notice {
	font-size: 24upx;
}
.user_publish {
	width: 100%;
	height: 487upx;
	margin-top: 28upx;
}
.operation_list {
	width: 50%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	padding: 10upx 30upx 30upx 30upx;
	box-sizing: border-box;
}
.bottom_operation {
	display: flex;
	flex-direction: row;
	align-items: center;
}
.operation_num {
	font-size: 24upx;
	color: #666;
	margin-left: 10upx;
}
.operation_icon img {
	width: 29upx;
	height: 24upx;
}
.issue_content {
	font-size: 28upx;
	color: #181818;
	margin: 32upx 0 43upx 0;
}
.rule_content {
	color: #000000;
	font-size: 28upx;
}
.rule_tips {
	color: #999;
	font-size: 24upx;
	margin-top: 30upx;
}
.bottom_point img {
	width: 121upx;
	height: 22upx;
	margin-top: 20upx;
}
.scroll-wrapper {
	width: 100%;
	height: 500upx;
}
.scroll-wrapper > swiper {
	width: 100%;
	height: 530upx;
}
.scroll-wrapper > swiper image {
	width: 100%;
	height: 487upx;
}
</style>
