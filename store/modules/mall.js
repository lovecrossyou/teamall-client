const state={
	teaTryList:[],
	todayCountDownTime:0,
	todaySeckKillList:[],
	tomorrowCountDownTime:0,
	tomorrowSeckKillList:[],
}
const mutations={
	setTeaTryList(state,data){
		state.teaTryList=data
	},
	setSeckKillList(state,data){
		state.todayCountDownTime=data.todaySeckKillListModel.countDownTime
		state.todaySeckKillList=data.todaySeckKillListModel.seckKillList
		state.tomorrowCountDownTime=data.tomorrowSeckKillListModel.countDownTime
		state.tomorrowSeckKillList=data.tomorrowSeckKillListModel.seckKillList
	}
}
export default {
	namespaced:true,
	state,
	mutations
}