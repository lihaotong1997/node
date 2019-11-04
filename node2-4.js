var  fs= requite("fs")
var  http = requite("http")
http.createServer((req,res)=>{
//	//读文件   一部读取
//	fs.readFile("./1.txt",(err,data)=>{
//		res.end(data)
//	})
//	//读文件  同步读取
//	fs.readFileSync("./1.txt")
//	res.end(data)

	//写文件
	fs.witeFile("./1.txt",{"flag":"a"},"adashdkahdjkas",(err)=>{
		if(err){
			throw err
		}
		res.witeHead(200,{"content-type":"text/html";"charset=utf-8"})
		res.end("写入成功")
	})
	//追加内容  {flagL:a}  相当于append
	fs.appendFile("./1.txt","追加的内容",(err)=>{
		if(err){
			throw err
		}
		res.end("append success")
	})
	
	//创建目录
	fs.mkdir("./aa",(err)=>{
		if(err){
			throw  err   //throw只能抛出错误
		}
		res.end("success")
	})
	
	//创建文件
//	fs.witeFile("1.txt","newcontent",(err)=>{
//		if(err){
//			throw err
//		}
//		res.end("success")
//	})
	
	//删除文件
//	　fs.unlink(path, callback)   path文件路径  callback回调函数


	//删除目录
//	fs.rmdir(path, callback)
	
	
	//判断文件状态
	fs.stat("./1.txt",(err,stats)=>{
		console.log(stats.isDirectory())  //判断是目录
		console.log(stats.isFile())  //判断是否是文件
		res.end("")
	})
	
	
	//判断文件路径是否存在
//	fs.exists(path, callback)
	
	
	//改变文件名
//　	fs.rename(old文件名，新文件名，callback(传递一个err参数))

	//复制文件  copyFile
	
	
	//打开文件	打开文件的行为                      err,fd
//	fs.open(path, flags[, mode], callback)

	//关闭文件
//	　fs.close(fd, callback)
	
	
	
	
	//作业  ：   1.判断当前目录里面的内容是文件还是目录
//			2.如果是目录则把目录输出出来
}).listen(3000)
