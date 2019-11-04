var http = require("http")
var url = require("url")
http.createServer((req,res)=>{
	if(req.url == "/favicon.ico"){
		return
	}
	res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})

	//url.parse().query 可以处理get请求   //ture  为对象
	var obj = url.parse(req.url,true).query
	console.log(req.url)
	res.end("接收的username是："+obj.username+"</br>"+"接收的password是："+obj.password)
	
}).listen(3000)


//