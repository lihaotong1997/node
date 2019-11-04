//createReadStream  createWriteStream
//事件  data end

var fs = require("fs")
var readStream = fs.createReadStream("./1.txt")
//探究数据流转的过程
readStream.on("data",(chunks)=>{
	console.log(chunks.toString())
})
readStream.on("end",()=>{
	console.log("end")
})
