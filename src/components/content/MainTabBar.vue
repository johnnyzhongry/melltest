<template>
	<TabBar>
		<!-- 传字符串使用path=  传变量使用:path -->
		<TabBarItem path="/home" activeColor="blue">
			<!-- <img src="../assets/img/tarbar/help.png" alt="" slot="item-icon" /> -->
			<!-- 具名插槽的新写法 2.6之后 -->
			<template v-slot:item-icon>
				<img src="../../assets/img/tarbar/help.png" alt="" slot="item-icon" />
			</template>
			<img src="../../assets/img/tarbar/help_filled.png" alt="" slot="item-active"/>
			<div slot="item-name">首页</div>
		</TabBarItem>
		<TabBarItem path="/category" activeColor="blue">
			<img src="../../assets/img/tarbar/star.png" alt="" slot="item-icon"/>
			<img src="../../assets/img/tarbar/star_filled.png" alt="" slot="item-active"/>
			<div slot="item-name">分类</div>
		</TabBarItem>
		<TabBarItem path="/cart">
			<img src="../../assets/img/tarbar/info.png" alt="" slot="item-icon"/>
			<img src="../../assets/img/tarbar/caution_filled.png" alt="" slot="item-active"/>
			<div slot="item-name">购物车</div>
		</TabBarItem>
		<TabBarItem path="profile">
			<img src="../../assets/img/tarbar/like.png" alt="" slot="item-icon"/>
			<img src="../../assets/img/tarbar/like_filled.png" alt="" slot="item-active"/>
			<div slot="item-name">我的</div>
		</TabBarItem>
	</TabBar>
</template>

<script>
	import TabBar from '../common/tabbar/TabBar.vue';
	import TabBarItem from '../common/tabbar/TabBarItem.vue';
	export default{
		name:'MainTabBar',
		components:{
			TabBar,
			TabBarItem
		}
	}
</script>

<style>
</style>
