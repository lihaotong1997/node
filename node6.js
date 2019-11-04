var  http = require("http")
var url = require("url")
//var path = require("path")
//console.log(path)
//cls 清屏
http.createServer((req,res)=>{
	if(req.url == "/favicon.ico"){
		return
	}
	var query = url.parse(req.url)
//	console.log(url.parse(req.query))
	console.log(query)
	res.end(query)
}).listen(3000)
