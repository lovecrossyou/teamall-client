const state={
	teaTryList:[],
	todaySeckKillList:[],
	tomorrowSeckKillList:[],
}
const mutations={
	setTeaTryList(state,data){
		state.teaTryList=data
	},
	setSeckKillList(state,data){
		console.log('展示一下===',data)
		state.todaySeckKillList=data.todaySeckKillListModel
		state.tomorrowSeckKillList=data.tomorrowSeckKillListModel
	}
}
export default {
	namespaced:true,
	state,
	mutations
}