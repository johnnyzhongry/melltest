<template>
  <div id="app">
    
    <router-view/>
	<MainTabBar></MainTabBar>
  </div>
</template>
<script>
	//配置路径 vue文件中可以直接使用别名 html中需要加~
	import MainTabBar from '_components/content/MainTabBar.vue'
	export default{
		name:"App",
		components:{
			MainTabBar
		}
	}
</script>
<style>
@import url("./assets/css/base.css");
</style>
