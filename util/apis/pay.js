const pay = function(param,callBack){
	uni.requestPayment({
    provider: param.provider,
    orderInfo: param.orderInfo, //微信、支付宝订单数据
    success: function (res) {
        console.log('success:' + JSON.stringify(res));
		callBack(res)
    },
    fail: function (err) {
        console.log('fail:' + JSON.stringify(err));
		callBack(err)
    }
});
}

export default{pay}