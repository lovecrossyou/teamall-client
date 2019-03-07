<template>
	<view class="pay_load_result_container">
		<view class="pay_load_result">
			<view class="pay_load_result_info">
				<image v-bind:src="paySuccess" class="pay_success_icon"></image>
				<view class="pay_load_result_text">支付成功</view>
				<view class="pay_load_result_intro">实付款¥10.00</view>
			</view>
			<view class="pay_load_result_share">
				<view class="pay_load_result_share_tip" >自己喝</view>
				<view class="pay_load_result_share_tip" >送好友</view>
			</view>
		</view>
		
		<view class="hot_recommend">
			<view class="hot_recommend_tit">热门推荐</view>
			<recommendTea></recommendTea>
		</view>
	</view>
</template>

<script>
	import recommendTea from '../main/components/recommend.vue';
	export default{
		components:{
			recommendTea
		},
		data() {
			return {
				 paySuccess:'../../static/order/pay_icon_success@2x.png'
			};
		}
	}
</script>

<style lang="scss">
	.pay_load_result_container{
           width:100%;
           height:100%;
		   .pay_load_result{
                background: #ffffff;
                padding-top:50upx;
                padding-bottom:50upx;
				.pay_load_result_info{
					   display: flex;
					   flex-direction: column;
					   align-items: center;
					   .pay_success_icon{
						   width:50upx;
						   height:50upx;
					   }
					   .pay_load_result_text{
						    font-size:40upx;
						   font-family:PingFang-SC-Bold;
						   font-weight:bold;
						   color:rgba(255,89,75,1);
					   }
					  .pay_load_result_intro{
					          font-size:35upx;
					          color:rgba(31,31,31,1);
					          margin-top:24upx;
					          margin-bottom:40upx;
					    }  
              }
				.pay_load_result_share{
                       display: flex;
                       justify-content: space-around;
                       align-items: center;
					   .pay_load_result_share_tip{
						   background-color:#F4F8FB;
						   box-sizing: border-box;
						   padding: 8upx 40upx;
                           background:rgba(244,248,251,1);
                           border:1upx solid rgba(102, 102, 102, 1);
                           border-radius:31upx;
                           font-size:28upx;
						   font-family:PingFang-SC-Medium;
						   font-weight:500;
						   color:rgba(31,31,31,1);
					   }
                    }
        }
		.hot_recommend{
				width: 100%;
				height: 100%;
				background:rgba(244,248,251,1);
				.hot_recommend_tit{
						height: 60upx;
						display: flex;
						justify-content: center;
						align-items: center;
						font-size:28upx;
						font-family:PingFang-SC-Medium;
						font-weight:500;
						color:rgba(51,51,51,1);
						margin-top: 40upx;
                }
        }
			
}
</style>
