export default function btnClick(){
	import('./jquery-1.7.2.min')
	.then(()=>{
		console.log('被点击了1223');
	})
	.catch(err => {
		console.log(err); 
	});
	console.error('error!');
}