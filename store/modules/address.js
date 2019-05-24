import api from '../../util/api'

export default {
	namespaced: true,
	state: {
		editAddress: null,
		list: []
	},
	mutations: {
		saveEdit(state, data) {
			state.editAddress = data;
		},
		saveList(state, data) {
			state.list = data;
		},
	},
	actions: {
		getAddressList({commit}) {
			api.getAddressList().then(res=>{
				console.log(res);
				commit('saveList', res);
			})
		}
	}
}
