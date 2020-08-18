<template>
	<div id="tab-bar">
		<!-- <div class="tab-bar-item">
			<img src="../../assets/img/tarbar/help.png" alt="">首页</div>
		<div class="tab-bar-item">
			<img src="../../assets/img/tarbar/info.png" alt="">分类</div>
		<div class="tab-bar-item">
			<img src="../../assets/img/tarbar/like.png" alt="">购物车</div>
		<div class="tab-bar-item">
			<img src="../../assets/img/tarbar/star.png" alt="">我的</div> -->
			<slot></slot>
	</div>
</template>

<script>
	export default{
		name:'TabBar',
		
	}
</script>

<style>
	#tab-bar{
		display: flex;
		background-color: #f6f6f6;
		position: fixed;
		bottom: 0px;
		left: 0px;
		right: 0px;
		box-shadow: 0px -3px 1px rgba(100,100,100,.1);
	}
	
</style>
