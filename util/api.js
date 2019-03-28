import request from './request'
const uploadBaseUrl = "";

const api = {
	//茶商城首页分类
	HomeCategoryList:(params)=>request.post('/productService/teaMall/home/category',params),
	//商城首页栏目内容
	HomeTeaMallContent:(params)=>request.post('/productService/teaMall/home',params),
	//好茶试饮
	teaMallTeaTryList:(params)=>request.post('/productService/teaMall/teaTryList',params),
	//限时秒杀
	seckKillList:(params)=>request.post('/productService/teaMall/seckKillList',params),
	//商品详情
	productDetails:(params)=>request.post('/productService/teaMall/productDetails',params),
	// 店铺商品分类（首页 & 新品 & 热门 & 活动）
	customCategoryList:(params) => request.post("/findProductCustomCategoryListByShopId",params),
	//店鋪信息
	shopBaseInfo:(params) => request.post("/shop/baseInfo",params),
	
	searchNearby: (params) => request.post("map/search", params),
<<<<<<< HEAD
	
	
	
	
=======
	//添加商品到购物车
	addToCart:(params)=>{
		params.accessInfo={accessToken:'cf646a3d9e934c02a54390f43e67766a',accessSecret:'6ca0e5c4d74c4b4884c958a368d660eb'};
		console.log(params);
	return	request.post('/productService/shoppingCart/addProduct',params)
	},
	//购物车商品列
	getCartList:()=>{
		let params = {};
		params.accessInfo={accessToken:'cf646a3d9e934c02a54390f43e67766a',accessSecret:'6ca0e5c4d74c4b4884c958a368d660eb'};
		return	request.post('/productService/shoppingCart/productList',params)
	},
>>>>>>> 68e48591cadda2c3340bf22b85ab9682d544e6d5
	//上传
	uploader: (file, callback) => {
		uni.uploadFile({
			url: uploadBaseUrl + '/manage/qiniu/upload',
			filePath: file,
			name: 'file',
			success: (result) => {
				const data = JSON.parse(result.data);
				if (parseInt(data.status) === 0) {
					callback(data.data);
				}
			}
		});
	}
}
export default api