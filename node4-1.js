var express = require("express")
var app = express()
//get指代的是get请求
app.get("/",(req,res)=>{
	
	res.send({"success":"get请求成功","data":[{"name":"tom","age":"12"},{"name":"tom","age":"12"},{"name":"tom","age":"12"}]})
})
app.post("/list",(req,res)=>{
	res.send({"success":"post请求成功","data":[{"name":"tom","age":"12"},{"name":"tom","age":"12"},{"name":"tom","age":"12"}]})
})
//all 代表所有  
//什么情况使用 app.all ==》 控制全局的功能时需要使用all
app.all("/",(req,res)=>{
	res.send({"success":"数据请求"})
})
app.listen(3000)
