var http = require("http")
var form = require("formidable")
var path =require("path")
var fs = require("fs")
var sd = require("silly-datetime")
http.createServer((req,res)=>{
	if(req.url == "/dopost"){
		var fm = form.IncomingForm()
		// fields 文本域			 files文件域
		fm.uploaddir="./photo"
		fm.parse(req,function(err,fields,files){
			if(err){
				throw err
			}
			var base=files.photo.path
			console.log(base)
			var ext = path.extname(files.photo.name)
			var time = sd.format(new Date(),"YYYYMMDDHHmmss")
			var funishon = "./photo/"+time+ext
			fs.rename(base,funishon,(err)=>{
				if(err){
					throw err
				}
				res.end("success")
			})
		})
		
	}
}).listen(3000,"127.0.0.1")
