//接收ger请求传输的参数
var express = require("express")
var app = express()
app.get("/",(req,res)=>{
	res.send("默认请求")
})
app.get("/list",(req,res)=>{
	res.send({"data":req.query})
})
app.get("/getid/:id",(req,res)=>{
	console.log(req.params.id)
	res.send({"data":"接受的id为"+req.params.id})
})
app.listen(3000)

