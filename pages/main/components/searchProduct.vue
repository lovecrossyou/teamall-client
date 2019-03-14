<template>
	<view class="searchproductMain">
		<searchBox></searchBox>
		<view class="banner"></view>
		<view productList></view>
	</view>
</template>

<script>
	import searchBox from "../../category/components/searchBox.vue"
	
	export default{
		components:{
			searchBox
		},
		data(){
			return {
				isClick:0;
				productlist:[
					{name:"张一元福建铁观音福建福建铁观音",icon:"/static/category/tea.jpg",brandnum:0,categorynum:3,price:552},
					{name:"张一元福建铁观音福建福建碧螺春",icon:"/static/category/tea.jpg",brandnum:0,categorynum:0,price:661},
					{name:"张一元福建铁观音福建福建铁观音",icon:"/static/category/tea.jpg",brandnum:0,categorynum:3,price:313},
					{name:"张️二元福建铁观音福建福建铁观音",icon:"/static/category/tea.jpg",brandnum:1,categorynum:3,price:111},
					{name:"张三元福建铁观音福建福建铁观音",icon:"/static/category/tea.jpg",brandnum:2,categorynum:3,price:158},
				]
			}
		}
	}
</script>

<style>
</style>
