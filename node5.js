var http=require("http")
var fs = require("fs")
http.createServer((req,res)=>{
	if(req.url=="/favicon.ico"){
		return
	}
	/*
	 1.如何地址栏访问的是/则加载bar。html
	 2.如果地址栏访问的是/foo 则加载foo.html
	 * */
	if(req.url=="/"){
		fs.readFile("../bar.html",(err,data)=>{
			res.writeHead(200,{"Content-type":"text/html;charset=UTF-8"})
			res.end(data)
		})
	}else if(req.url=="/foo"){
		fs.readFile("../foo.html",(err,data)=>{
			res.end(data)
		})
	}else{
		fs.readFile("../404.html",(err,data)=>{
			res.end(data)
		})
	}
}).listen(3000)
