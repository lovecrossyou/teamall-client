import Vue from 'vue'
import Vuex from 'vuex'
import address from "./modules/address"
Vue.use(Vuex)

const store = new Vuex.Store({
	modules:{
		address
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