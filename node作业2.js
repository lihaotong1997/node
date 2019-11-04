var http = require("http")
var fs = require("fs")
http.createServer((req,res)=>{
	fs.open("../css",(err)=>{
		if(err){
			throw err
		}
		res.end("打开了")
	})
}).listen(3000)
