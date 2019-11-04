//监控日志     readline
var fs = require("fs")

//监听日志
var readline=require("readline")
var readStream=fs.createReadStream("./1.txt")

//console.log(readline)
//data	 end 	 line监听日志事件

/*data和end的功能
 * data监听输入数据
 * end 完成数据读取
 */


var rl=readline.createInterface({
	//监听输入数据
	input:readStream
})

//日志执行事件 
var length=0
rl.on("line",(linenum)=>{
	console.log(linenum)
	length++
	fs.appendFile("./2.txt",length + new Date()+linenum+"\n",(err)=>{
		if(err){
			throw err
		}
	})
})

//日志读取完成关闭
rl.on("close",()=>{
	console.log("监听完成数据")
})