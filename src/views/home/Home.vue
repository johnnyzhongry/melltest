<template>
	  <div id="home">
		  <NavBar class="home-nav">
			  <div slot="center">购物街</div>
		  </NavBar>
		  <el-row>
		    <el-col :span="24"><div class="grid-content bg-purple-dark">1111</div></el-col>
			<i class="el-icon-edit"></i>
			<el-button>默认按钮</el-button>
			 <el-button type="primary">主要按钮</el-button>
		  </el-row>
		  {{result}}
	  </div>
  
  
</template>

<script>

import NavBar from '_components/common/navbar/NavBar';
// import {getHomeMultiData} from '../../network/home';
import axios from 'axios'
export default {
  name: 'Home',
  components: {
//    HelloWorld
		NavBar
  },
  data(){
	  return{
		  result:null
	  }
  },
  created() {
  	// getHomeMultiData().then(res=>{console.log('result',res)})
	//json放在public目录下测试
	axios.get('/homeMultiData.json').then(res=>{console.log(res.data.data);
												this.result=res.data.data.friend
												
												})
  }
}
</script>
<style scoped="scoped">
	.home-nav{
		background-color:var(--color-tint);
	}
	
</style>