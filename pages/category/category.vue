<template>
	<view class="categoryMain">
		<view class="searchbox">
			<search-box></search-box>
		</view>
		<view class="categoryView">
			<view class="categoryList">
				<block v-for="(item,index) in categorylist" :key="index">
					<view class="categoryItem">
						{{item.categoryitem}}
					</view>
				</block>
			</view>
			<view class="tealist">
				1111
			</view>
		</view>
	</view>
</template>

<script>
	import searchBox from '../main/components/searchBox.vue'
	export default {
		data(){
			return{
				categorylist:[
					{categoryitem:"热卖",tealist:[
						{icon:"/static/category/tea.jpg",name:"1.1"},
						{icon:"/static/category/tea.jpg",name:"1.2"},
						{icon:"/static/category/tea.jpg",name:"1.3"},
						{icon:"/static/category/tea.jpg",name:"1.4"}
						]},
					{categoryitem:"绿茶",tealist:[
						{icon:"/static/category/tea.jpg",name:"2.1"},
						{icon:"/static/category/tea.jpg",name:"2.2"},
						{icon:"/static/category/tea.jpg",name:"2.3"},
						{icon:"/static/category/tea.jpg",name:"2.4"}
						]},
					{categoryitem:"红茶",tealist:[
						{icon:"/static/category/tea.jpg",name:"3.1"},
						{icon:"/static/category/tea.jpg",name:"3.2"},
						{icon:"/static/category/tea.jpg",name:"3.3"},
						{icon:"/static/category/tea.jpg",name:"3.4"}
						]},
					{categoryitem:"乌龙茶",tealist:[
						{icon:"/static/category/tea.jpg",name:"4.1"},
						{icon:"/static/category/tea.jpg",name:"4.2"},
						{icon:"/static/category/tea.jpg",name:"4.3"},
						{icon:"/static/category/tea.jpg",name:"4.4"}
						]},
					{categoryitem:"黑茶",tealist:[
						{icon:"/static/category/tea.jpg",name:"5.1"},
						{icon:"/static/category/tea.jpg",name:"5.2"},
						{icon:"/static/category/tea.jpg",name:"5.3"},
						{icon:"/static/category/tea.jpg",name:"5.4"}
						]},
					{categoryitem:"白茶",tealist:[
						{icon:"/static/category/tea.jpg",name:"6.1"},
						{icon:"/static/category/tea.jpg",name:"6.2"},
						{icon:"/static/category/tea.jpg",name:"6.3"},
						{icon:"/static/category/tea.jpg",name:"6.4"}
						]},
					{categoryitem:"黄茶",tealist:[
						{icon:"/static/category/tea.jpg",name:"7.1"},
						{icon:"/static/category/tea.jpg",name:"7.2"},
						{icon:"/static/category/tea.jpg",name:"7.3"},
						{icon:"/static/category/tea.jpg",name:"7.4"}
						]},
					{categoryitem:"花草茶",tealist:[
						{icon:"/static/category/tea.jpg",name:"8.1"},
						{icon:"/static/category/tea.jpg",name:"8.2"},
						{icon:"/static/category/tea.jpg",name:"8.3"},
						{icon:"/static/category/tea.jpg",name:"8.4"}
						]},
					{categoryitem:"茶具",tealist:[
						{icon:"/static/category/tea.jpg",name:"9.1"},
						{icon:"/static/category/tea.jpg",name:"9.2"},
						{icon:"/static/category/tea.jpg",name:"9.3"},
						{icon:"/static/category/tea.jpg",name:"9.4"}
						]}
				]
			}
		},
		components: {
			searchBox
		},
		methods:{
		
		}
	}
</script>

<style lang="scss">
	.categoryMain {
		width: 100%;

		.searchbox {
			width: 100%;
			height: 90upx;
		}

		.categoryView {
			width: 100%;
			display: flex;
			flex-direction: row;
			
			.categoryList{
				width: 140upx;
				
				.categoryItem{
					width:100%;
					height:120upx;
				}
			}
			
			.tealist{
				
			}
		}
	}
</style>
