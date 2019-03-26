const state = {
	isclick: 0,
	tealist: [],
	categorylist: [{
			name: "热卖"
		},
		{
			name: "绿茶"
		},
		{
			name: "红茶"
		},
		{
			name: "乌龙茶"
		},
		{
			name: "黑茶"
		},
		{
			name: "白茶"
		},
		{
			name: "黄茶"
		},
		{
			name: "花草茶"
		},
		{
			name: "茶具"
		}
	],
	list: [
		[{
				icon: "/static/category/tea.jpg",
				name: "1.1"
			},
			{
				icon: "/static/category/tea.jpg",
				name: "1.2"
			},
			{
				icon: "/static/category/tea.jpg",
				name: "1.3"
			},
			{
				icon: "/static/category/tea.jpg",
				name: "1.4"
			}
		],
		[{
				icon: "/static/category/tea.jpg",
				name: "2.1"
			},
			{
				icon: "/static/category/tea.jpg",
				name: "2.2"
			},
			{
				icon: "/static/category/tea.jpg",
				name: "2.3"
			},
			{
				icon: "/static/category/tea.jpg",
				name: "2.4"
			}
		],
		[{
				icon: "/static/category/tea.jpg",
				name: "3.1"
			},
			{
				icon: "/static/category/tea.jpg",
				name: "3.2"
			},
			{
				icon: "/static/category/tea.jpg",
				name: "3.3"
			},
			{
				icon: "/static/category/tea.jpg",
				name: "3.4"
			}
		],
		[{
				icon: "/static/category/tea.jpg",
				name: "4.1"
			},
			{
				icon: "/static/category/tea.jpg",
				name: "4.2"
			},
			{
				icon: "/static/category/tea.jpg",
				name: "4.3"
			},
			{
				icon: "/static/category/tea.jpg",
				name: "4.4"
			}
		],
		[{
				icon: "/static/category/tea.jpg",
				name: "5.1"
			},
			{
				icon: "/static/category/tea.jpg",
				name: "5.2"
			},
			{
				icon: "/static/category/tea.jpg",
				name: "5.3"
			},
			{
				icon: "/static/category/tea.jpg",
				name: "5.4"
			}
		],
		[{
				icon: "/static/category/tea.jpg",
				name: "6.1"
			},
			{
				icon: "/static/category/tea.jpg",
				name: "6.2"
			},
			{
				icon: "/static/category/tea.jpg",
				name: "6.3"
			},
			{
				icon: "/static/category/tea.jpg",
				name: "6.4"
			}
		],
		[{
				icon: "/static/category/tea.jpg",
				name: "7.1"
			},
			{
				icon: "/static/category/tea.jpg",
				name: "7.2"
			},
			{
				icon: "/static/category/tea.jpg",
				name: "7.3"
			},
			{
				icon: "/static/category/tea.jpg",
				name: "7.4"
			}
		],
		[{
				icon: "/static/category/tea.jpg",
				name: "8.1"
			},
			{
				icon: "/static/category/tea.jpg",
				name: "8.2"
			},
			{
				icon: "/static/category/tea.jpg",
				name: "8.3"
			},
			{
				icon: "/static/category/tea.jpg",
				name: "8.4"
			}
		],
		[{
				icon: "/static/category/tea.jpg",
				name: "9.1"
			},
			{
				icon: "/static/category/tea.jpg",
				name: "9.2"
			},
			{
				icon: "/static/category/tea.jpg",
				name: "9.3"
			},
			{
				icon: "/static/category/tea.jpg",
				name: "9.4"
			}
		],
	]
}

const mutations = {
	changeStyle(state, index) {
		state.isclick = index;
		state.tealist = state.list[index];
	},
	getteaList(state) {
		state.tealist = state.list[0];
	}
}

const actions = {
	getTeaList({commit}) {
		commit("getteaList")
	}
}

export default {
	namespaced: true,
	mutations,
	actions,
	state
}
