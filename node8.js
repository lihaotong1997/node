var http = require("http")
var url = require("url")
http.createServer((req,res)=>{
	
	// 协议   主机/域名   端口     ?search   #hash  
//	var obj = url.parse(result)
//  var obj = url.format({  //反序列化
//	
//  })
var  obj = url.resolve("http://127.0.0.1:3000","/new")   //把两个字段 拼接成一个完整的路径
}).listen(3000)


