<template>
	  <div id="home">
		  <NavBar class="home-nav">
			  <div slot="center">购物街</div>
		  </NavBar>
	  </div>
  
  
</template>

<script>

import NavBar from '_components/common/navbar/NavBar'
export default {
  name: 'Home',
  components: {
//    HelloWorld
		NavBar
  }
}
</script>
<style scoped="scoped">
	.home-nav{
		background-color:var(--color-tint);
	}
	
</style>