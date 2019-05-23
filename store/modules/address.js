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
			api.teaMallTeaTryList({accessInfo:{}}).then(res=>{
				console.log(res);
				//commit('saveList', res);
			})
			setTimeout(()=>{
				const res = [{
						name: '花花1',
						phone: 13681111111,
						city:'北京市西城区',
						detail: '粮科大厦2',
						isDefault:true
					},
					{
						name: '花花2',
						phone: 136811222211,
						city:'北京市西城区',
						detail: '粮科大厦1',
						isDefault:false
					},
					{
						name: '花花3',
						phone: 1368133333,
						city:'北京市西城区',
						detail: '粮科大厦3',
						isDefault:false
					}
				];
				
			},5000)
			
		}
	}
}
