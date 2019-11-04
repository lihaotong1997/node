var http = require("http")
var fs = require("fs")
var art = require("art-template")
http.createServer((req,res)=>{
//	if(req.url=="/favicon.ico"){
//		return
//	}
	fs.readFile("./static/2.art",(err,data)=>{
		//获取art-template模板
		var template = data.toString()
		
		//render 模板  数据
		//定义数据
		var list = ["aaa","bbb","ccc"]
		var htmlData = art.render(template,{a:list})
		res.end(htmlData)
	})
}).listen(3000)
