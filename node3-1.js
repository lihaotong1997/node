var http = require("http")
var fs = require("fs")
http.createServer((req,res)=>{
	//普通获取数据的方式
//	fs.readFile("./1.txt",(err,data)=>{
//		if(err){
//			throw err
//		}
//		console.log(data)
//		res.end(data)
//	})
	
	//通过流的方式获取数据
	//pipe  创建文件读取流
	var fsStream=fs.createReadStream("./1.txt")  //相当于上方的桶   如何读取 source
	fsStream.pipe(res)
	//data   end
}).listen(3000)
