const state = {
	shopBaseInfoModel:{}
}
const mutations = {
	setProductDetails(state,data){
		state.shopBaseInfoModel = data.shopBaseInfoModel
	}
}

export default {
	namespaced:true,
	state,
	mutations
}