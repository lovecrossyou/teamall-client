const state = {
	formData: {
		title: 'hello',
		desc: '',
		address: '选择位置',
	},
	addrSearchResult: []
}

const gettter = {

}


const mutations = {
	setAddr(state, data) {
		state.formData.address = data;
	},

	setFormData(state, data) {
		state.formData = data;
	},

	setResult(state, data) {

	}
}


const actions = {
	async search(context, {
		state
	}) {
		const res = await api.xxx();
		// state.addrSearchResult = res;
		context.commit('setResult');
	}
}

export default {
	namespaced: true,
	state,
	mutations,
	gettter
}
