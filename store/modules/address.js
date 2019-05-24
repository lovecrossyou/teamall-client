import api from '../../util/api'

export default {
	namespaced: true,
	state: {
		editAddress: null,
		list: [],
		editIndex: -1,
	},
	mutations: {
		saveEdit(state, data) {
			state.editAddress = data.address;
			state.editIndex = data.index;
		},
		saveList(state, data) {
			state.list = data;
		}
	},
	actions: {
		getAddressList({
			commit
		}) {
			api.getAddressList().then(res => {
				console.log(res);
				commit('saveList', res);
			})
		},
		createAddress({
			commit,
			state
		}, payload) {
			api.createAddress(payload.params).then(res => {
				console.log(res);


				let newAddr = {
					deliveryAddressId: res.id,
					phoneNum: res.phoneNum,
					receiveName: res.receiveName,
					areaAddress: res.areaAddress,
					detailedAddress: res.detailedAddress,
					fullAddress: res.fullAddress,
					defaultAddress: res.default
				}

				let list = state.list.slice(0);
				list.push(newAddr);
				commit('saveList', list);
				payload.callback();
				//commit('saveList', res);
			})
		},
		
		
		updateAddress({
			commit,
			state
		}, payload) {
			api.updateAddress(payload.params).then(res => {
				console.log(res);
		
		
				let newAddr = {
					deliveryAddressId: res.id,
					phoneNum: res.phoneNum,
					receiveName: res.receiveName,
					areaAddress: res.areaAddress,
					detailedAddress: res.detailedAddress,
					fullAddress: res.fullAddress,
					defaultAddress: res.default
				}
		
				let list = state.list.slice(0);
				//list.push(newAddr);
				list.splice(state.editIndex,1,newAddr);
				commit('saveList', list);
				payload.callback();
				//commit('saveList', res);
			})
		},
		
		deleteAddress({
			commit,
			state
		}, payload) {
			api.deleteAddress({deliveryAddressId:payload.addressId}).then(res => {
				console.log(res);
				let list = state.list.slice(0);
				list.splice(payload.index,1);
				commit('saveList', list);
				//payload.callback();
				//commit('saveList', res);
			})
		},
		
	}
}
