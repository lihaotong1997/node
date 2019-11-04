//解决乱码
var  http = require("http")
						   //请求 ，响应
http.createServer(function(req,res){
	//设置请求响应头   200成功   content-type 文本类型  text/html  text/plain  image/jpeg  
	res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"})
	res.end("中国")//这句话只能写在最后面   结束响应
}).listen(3000)
