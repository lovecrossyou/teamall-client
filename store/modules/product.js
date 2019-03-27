const state = {
	productInfoModel:{},
	imageUrlList:"",
	freight:0,
	commentAmount:0,
	commentModelList:[],
	shopInfoModel:{}
}
const mutations = {
	setProductDetails(state,data){
		state.productInfoModel = data.productInfoModel
		state.imageUrlList = data.productInfoModel.imageUrlList
		state.freight = data.productInfoModel.freight!==0?"包邮":"运费：￥"+data.productInfoModel.freight
		state.commentAmount = data.productInfoModel.commentListModel.commentAmount
		state.commentModelList = data.productInfoModel.commentListModel.commentModelList
		state.shopInfoModel = data.shopInfoModel
		
	}
}


export default {
	namespaced:true,
	state,
	mutations
}