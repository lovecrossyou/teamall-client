const state ={
	navBarListArr: [],
	carefullyChosen:{},
	bannerList:[],
	selllingKungFuTeaList:[],
	countDownTime:0,
	seckKillProduct:[],
	recommendProductModelList:[],
	
}
const mutations ={
	setArr(state,data){
		state.navBarListArr=data
	},
	setMallContent(state,data){
		state.carefullyChosen=data.carefullyChosen;
		if(data.carefullyChosen){
			state.bannerList=data.carefullyChosen.bannersListModel;
			state.selllingKungFuTeaList=data.carefullyChosen.selllingKungFuTeaListModel;
			state.countDownTime=data.carefullyChosen.secKillsProductListModel.countDownTime;
			state.seckKillProduct=data.carefullyChosen.secKillsProductListModel.seckKillProductModels;
		}
		state.recommendProductModelList=data.recommendProductModelList;
		
	}
}
const actions ={
	
}

export default {
	namespaced:true,
	state,
	mutations,
	actions
}