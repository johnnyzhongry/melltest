<template>
	<div class="tab-bar-item" @click="handleClick">
		
		<!-- <slot v-if="!isActive" name="item-icon"></slot>
		<slot v-else name="item-active"></slot> -->
		<!-- <slot :class="{red:isActive}" name="item-name"></slot> 插槽会被替换，类的动态绑定不能绑在插槽上-->
		<div v-if="!isActive">
		  <slot  name="item-icon"></slot>
		</div>
		<div  v-else>
		  <slot name="item-active"></slot>
		</div>
		<!--基础 <div :class="{red:isActive}">
			<slot  name="item-name"></slot>
		</div>
		 -->
		 <!-- 动态赋予颜色 -->
		 <div :style="activeStyle">
		 	<slot  name="item-name"></slot>
		 </div>
	</div>
</template>

<script>
	export default{
		name:'TabBarItem',
		data(){
			return{
				// isActive:false
			}	
		},
		props:{
			path:String,
			activeColor:{
				type:String,
				default:'red'
			}
		}
		,
		computed:{
			isActive(){
				return this.$route.path.indexOf(this.path) !==-1
			},
			activeStyle(){
				return this.isActive?{color:this.activeColor}:{}
			}
		},
		methods:{
			handleClick(){
				console.log('click');
				//push有返回 replace无返回
				this.$router.push(this.path)
			}
		}
	}
</script>

<style>
	.tab-bar-item{
		flex: 1;
		text-align: center;
		height: 49px;
		font-size: 14px;
	}
	.tab-bar-item img{
		width: 24px;
		height: 24px;
		margin-top: 3px;
		vertical-align:middle;
	}
	.red{
		color: red;
	}
</style>
