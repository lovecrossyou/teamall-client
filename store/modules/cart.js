import api from '../../util/api'
export default {
	namespaced: true,
	state: {
		recommendList: [],
		allSelected:false,
		totalPrice:0,
		shopList:[],
		
	},
	mutations: {
		setRecommendList(state, data) {
			state.recommendList = data;
		},
		setCartInfo(state,payload){
			state.allSelected = payload.allSelected;
			state.totalPrice = payload.totalPrice;
			state.shopList = payload.shoppingCartProductItemOfShopModelList;
		}
	},
	actions: {
		requestRecommendList({
			commit
		}) {
			setTimeout(() => {
				let res = [{
						name: '张一元福建铁观音福建福建铁观音',
						price: '156',
						imageUrl: 'http://image.chawenyi.com/201902/2019022333231_b.jpg'
					},
					{
						name: '张一元福建铁观音福建福建铁观音',
						price: '156',
						imageUrl: 'http://image.chawenyi.com/201902/2019022333231_b.jpg'
					}
				];
				commit('setRecommendList', res);
			}, 2000)
		},
		requestCartList({commit,state}){
			api.getCartList().then(res=>{
				
				commit('setCartInfo', res);
				
			})
		}
		
	}

}
