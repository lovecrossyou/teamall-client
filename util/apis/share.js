const wxSceneSession = function(param) {
	console.log('调起好友分享'+JSON.stringify(param))
	uni.share({
		provider: "weixin",
		scene: "WXSceneSession",
		type: 0,
		href: param.href,
		title: param.title,
		summary:param.summary,
		imageUrl: param.imageUrl,
		success: function (res) {
			console.log("success:" + JSON.stringify(res));
		},
		fail: function (err) {
			console.log("fail:" + JSON.stringify(err));
		}
	});
}

const wxSenceTimeline = function(param){
	console.log('调起朋友圈分享'+JSON.stringify(param))
	uni.share({
    provider: "weixin",
    scene: "WXSenceTimeline",
    type: 0,
    href: param.href,
    title: param.title,
    summary: param.summary,
    imageUrl: param.imageUrl,
    success: function (res) {
        console.log("success:" + JSON.stringify(res));
    },
    fail: function (err) {
        console.log("fail:" + JSON.stringify(err));
    }
});
}

export default{
	wxSceneSession,
	wxSenceTimeline
}
