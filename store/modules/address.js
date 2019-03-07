const state = {
	editAddress: null,
	list: [{
		name: '花花1',
		phone: 13681111111,
		city: '河南 郑州 周口',
		detail: '北京市西城区粮科大厦1',
		isDefult:true,
	}]
}

const mutations = {
	saveEdit(state, data) {
		state.editAddress = data;
	},
	saveList(state, data) {
		state.list = data;
	},
}

const actions = {
	async fetchList({
		commit
	}) {
		const res = [{
				name: '花花1',
				phone: 13681111111,
				detail: '北京市西城区粮科大厦1'
			},
			{
				name: '花花2',
				phone: 1362222222,
				detail: '北京市西城区粮科大厦2'
			},
			{
				name: '花花3',
				phone: 1362333333333,
				detail: '北京市西城区粮科大厦3'
			}
		];
		commit('saveList', res);
	}
}

export default {
	namespaced: true,
	state,
	mutations
}
