//初识服务器
// node   模块
//加载http模块
var http = require("http")
//创建服务器
var server =http.createServer(function(req,res){
//	console.log(arguments)
//req request 请求   res  response 响应 
//结束响应     = >  响应客户端
	res.end("hello node 中文")    //如何解决乱码
})

//有回调函数
//监听端口  
server.listen(3000,function(){
	console.log("服务器已经挂起")
})
