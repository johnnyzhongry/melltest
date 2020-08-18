<template>
	<div class="nav-bar">
		<div class="left"><slot name="left"></slot></div>
		<div class="center"><slot name="center"></slot></div>
		<div class="right"><slot name="right"></slot></div>
	</div>
</template>

<script>
	export default{
		name:'NavBar'
	}
</script>

<style scoped="scoped">
	.nav-bar{
		display: flex;
		line-height: 44px;
	    height: 2.75rem; 
		text-align: center;
		color:white;
		font-weight: bold;
		box-shadow: 0 1px 1px rgba(100,100,100,.2);
	}
	.left{
		width: 60px;
		/* background-color: #008000; */
	}
	.center{
		flex: 1;
		/* background-color: #42B983; */
	}
	.right{
		width: 60px;
		/* background-color: #87CEEB; */
	}
</style>
