var fs = require("fs")
var readStream = fs.createReadStream("./1.txt")
var writeStream =fs.createWriteStream("./2.txt")
readStream.on("data",(chunks)=>{
	console.log(chunks.toString())
})
readStream.on("end",()=>{
	console.log("end")
})
