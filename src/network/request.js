import axios from 'axios';
export function request(config){
	//1.创建axios实例
	const instance=axios.create(
		{
	    baseURL:"http://localhost.charlesproxy.com",
		timeout:5000
		}
	)
	console.log(instance())
	//响应拦截
	instance.interceptors.request.use(config=>{
		console.log('config',config)
		return config
	},err=>{
		console.log(err)
	});
	instance.interceptors.request.use(response=>{
		console.log('response',response)
		return response
	},err=>{
		console.log(err)
	});
	//发生真正的请求
	return instance(config);
}