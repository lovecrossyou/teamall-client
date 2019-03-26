const state = {
	isClick: 0,
	sortkey: 0,
	sorttype: "",
	minnum: 0,
	maxnum: 0,
	list: [],
	bannerlist: ["综合", "销量", "价格", "筛选"],
	productlist: [{
			name: "张一元福建铁观音福建福建铁观音",
			icon: "/static/category/product_icon.png",
			volume: 100,
			brandnum: 0,
			categorynum: 3,
			price: 552
		},
		{
			name: "张一元福建铁观音福建福建碧螺春",
			icon: "/static/category/product_icon.png",
			volume: 88,
			brandnum: 0,
			categorynum: 0,
			price: 661
		},
		{
			name: "张一元福建铁观音福建福建铁观音",
			icon: "/static/category/product_icon.png",
			volume: 100,
			brandnum: 0,
			categorynum: 3,
			price: 313
		},
		{
			name: "张️二元福建铁观音福建福建铁观音",
			icon: "/static/category/product_icon.png",
			volume: 0,
			brandnum: 1,
			categorynum: 3,
			price: 111
		},
		{
			name: "张三元福建铁观音福建福建铁观音",
			icon: "/static/category/product_icon.png",
			volume: 166,
			brandnum: 2,
			categorynum: 3,
			price: 111
		},
	],
	brandlist: [{
			brandnum: 0,
			name: "张一元"
		},
		{
			brandnum: 1,
			name: "张二元"
		},
		{
			brandnum: 2,
			name: "张三元"
		},
		{
			brandnum: 3,
			name: "张四元"
		},
		{
			brandnum: 4,
			name: "张五元"
		},
		{
			brandnum: 5,
			name: "张六元"
		}
	],
	categorylist: [{
			categorynum: 0,
			name: "红茶"
		},
		{
			categorynum: 1,
			name: "黄茶"
		},
		{
			categorynum: 2,
			name: "白茶"
		},
		{
			categorynum: 3,
			name: "绿茶"
		},
		{
			categorynum: 4,
			name: "青茶"
		},
		{
			categorynum: 5,
			name: "花茶"
		},
		{
			categorynum: 6,
			name: "茶周边"
		},
		{
			categorynum: 7,
			name: "礼盒"
		}

	]
}


// const sortProduct = (type, key) => (a,b)=> {
// 	if (key === 0) {
// 		return (a, b) => b[type] - a[type];
// 	} else {
// 		return (a, b) => a[type] - b[type];
// 	}
// }


const sortProduct = (a,b)=>{
	return a- b;
}

const getters = {
	productList(state) {
		return state.productlist.sort(sortProduct);
	}
}

const mutations = {
	changeStyle(state, {
		index,
		open
	}) {
		console.log("changeStyle");
		state.isClick = index;
		switch (index) {
			case 0:
				break;
			case 1:
				state.sorttype = "volume";
				state.sortkey = state.sortkey == 0 ? 1 : 0;
				console.log("1");
				break;
			case 2:
				state.sorttype = "price";
				state.sortkey = state.sortkey == 0 ? 1 : 0;
				break;
			case 3:
				open();
				break;
		}
	},
	filterBybrand(state, key, {
		close
	}) {
		state.list = state.productlist;
		state.list = state.list.filter(product => product.brandnum === key);
		close();
	},
	filterBycategory(state, key, {
		close
	}) {
		state.list = state.productlist;
		state.list = state.list.filter(product => product.categorynum === key);
		close();
	},
	filterByprice(state, {
		close
	}) {
		state.list = state.productlist;
		if (state.minnum < state.maxnum) {
			state.list = state.list.filter(product => state.minnum < product.price && product.price < state.maxnum);
			close();
		} else {
			alert("请输入正确的价格！")
		}
	},
	closeDrawer({
		close
	}) {
		close();
	}
}


export default {
	namespaced: true,
	state,
	getters,
	mutations
}
