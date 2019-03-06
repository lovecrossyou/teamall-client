const state = {
	editAddress: null,
	list:[]
}

const mutations = {
	saveEdit(state,data){
		state.editAddress = data ;
	},
	saveList(state,data){
		state.list = data ;
	},
}

const actions = {
	async fetchList({commit}){
		const res = "data" ;
		commit('saveList',res);
	}
}

export default{
	namespaced:true,
	state,
	mutations
}

