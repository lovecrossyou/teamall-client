import Fly from 'flyio/dist/npm/wx'
import service from "../service"
const request = new Fly()
//const baseURL = 'http://192.168.1.252:9334/'
 const baseURL = 'http://192.168.1.226:9334/'
// const baseURL = 'http://192.168.137.76:9334/'
request.config.baseURL = baseURL
// request.config.headers = {
// 	"content-type": "application/json",
// 	"accessToken": service.getToken()
// }
	
const errorPrompt = (err) => {
	uni.showToast({
		title: err.data.message || 'fetch data error.',
		icon: 'none'
	})
}

// 生成accessinfo信息
export const createAccessInfo = () => {
	var accessInfo = {
		accessToken: '848424e6f83c42bf8f7a259fb8ba764b',
		accessSecret:'1bfa6b9592fa49b398a25eb6ba476639'
	}
	return accessInfo;
}

request.interceptors.request.use((request) => {
	uni.showLoading();
	let body = request.body;
	// if (body) {
	// 	if (!body.accessInfo) {
	// 		body = Object.assign({}, { ...body
	// 		}, {
	// 			accessInfo: createAccessInfo()
	// 		});
	// 	}
	// } else {
	// 	body = {
	// 		accessInfo: createAccessInfo()
	// 	}
	// }
	body = Object.assign({}, { ...body
			}, {
				accessInfo: createAccessInfo()
			});
	//console.log('accessInfo------------'+JSON.stringify(body))
	request.body = body;
	return request
})

request.interceptors.response.use((response, promise) => {
	uni.hideLoading()
	
	//console.log('response ',response)
	if (!(response.data.errMsg === "ok")) {
		errorPrompt(response)
	}
	return promise.resolve(response.data.respData)
}, (err, promise) => {
	uni.hideLoading()
	errorPrompt(err)
	return promise.reject(err)
})

export default request
