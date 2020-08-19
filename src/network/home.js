import {request} from './request';
export function getHomeMultiData(){
	console.log('getHomeMultiData')
	return request({
		url:'/home/homeMultiData.json',
		method:'get'}
					)
}