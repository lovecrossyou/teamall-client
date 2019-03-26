import Vue from 'vue'
import Vuex from 'vuex'
import address from "./modules/address"
import publish from "./modules/publish"
import main from "./modules/main"
import mall from './modules/mall'
import product from './modules/product'
import cart from './modules/cart'
import category from "./modules/category"
import searchProduct from './modules/searchProduct'


Vue.use(Vuex)

const store = new Vuex.Store({
	modules:{
		address,
		publish,
		main,
		mall,
		product,
		cart,
		category,
		searchProduct
	},
	
    state: {
        /**
         * 是否需要强制登录
         */
        forcedLogin: false,
        hasLogin: true,
        userName: ""
    },
    mutations: {
        login(state, userName) {
            state.userName = userName || '新用户';
            state.hasLogin = true;
        },
        logout(state) {
            state.userName = "";
            state.hasLogin = false;
        }
    }
})

export default store
