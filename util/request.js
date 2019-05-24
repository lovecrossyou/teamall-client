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

request.interceptors.request.use((request) => {
	uni.showLoading();
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
