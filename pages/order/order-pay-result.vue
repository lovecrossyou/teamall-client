<template>
	<view class="pay_load_result_container">
		<view class="pay_load_result">
			<view class="pay_load_result_tit">
				<image v-bind:src=""></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				// paySuccess:'../../static/order/pay_icon_success@2x.png'
			}
		}
	}
</script>

<style lang="scss">
	.pay_load_result_container{
           width:100%;
           height:100%;
		   .pay_load_result{
                background: #ffffff;
                text-align: center;
                padding-top:50upx;
                padding-bottom:50upx;
				.pay_load_result_tit{
                       font-size:40upx;
                       font-family:PingFang-SC-Bold;
                       font-weight:bold;
                       color:rgba(255,89,75,1);
                }
            }
}
</style>
