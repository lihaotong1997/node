var  http = require("http")
var  fs   = require("fs")
http.createServer((req,res)=>{
	fs.readdir("../js",(err,filse)=>{
		if(err){
			throw err
		}
		filse.forEach((file)=>{
			console.log(file)
			fs.stat(file,(err,stats)=>{
				if(err){
					throw err
				}
				if(stats.isDirectory()){
					res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
					res.end(file)
				}else if(stats.isFile()){
					res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
//					res.end("我是文件")
				}
			})
		})
	})
}).listen(3000)
