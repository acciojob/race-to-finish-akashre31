window.promises = [ return new promise((res,rej)=>{
	res(console.log("hi"))});
				   return new promise((res,rej)=>{
	res(console.log("hello"))});
return new promise((res,rej)=>{
	res(console.log("hey"))});
return new promise((res,rej)=>{
	res(console.log("namaste"))});
return new promise((res,rej)=>{
	res(console.log("namaskara"))});
				   ];
promises.any();
// Do not change the code above this
// add your promises to the array `promises`
