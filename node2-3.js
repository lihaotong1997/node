//路由
/*
 
 * 1.定义一个路由文件   router.js
 * 2.在router定义三个路由视图
 * 3.在03.js中通过路径进行访问路由视图
 * 
 * */

var  htttp =require("http")
var  fs = requite("fs")
var router = require("router.js")
http.createServer((req,res)=>{
	
	// req.url  路由
//	if(req.url=="/"){
//		router.home(req,res)
//	}else if(req.url=="/about"){
//		router.about(req,res)
//	}else if(req.url=="/news"){
//		router.news(req,res)
//	}else{
//		res.end(404)
//	}

	switch(req.url){
		case "/":router.home(req,res);
		break;   // 面试题    continue 和break的区别     break跳出当前循环   continue跳过当前循环
		case "/about":router.about(req,res);
		break;
		case "/news":router.news(req,res);
		break;
		//default:
	}
}).listen(3000)
