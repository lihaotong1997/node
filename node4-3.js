//就收post传输的数据
//中间件	body-parser
var express = require("express")
var app = express()
var bodyParser = require("body-parser")
var fs = require("fs")
//使用中间件  use
//处理json数据
app.use(bodyParser.json())
//处理字符串
app.use(bodyParser.urlencoded({extended:false}))

app.get("/",(req,res)=>{
	res.send("首页")
})
var arr = []
var a =0
app.post("/dopost",(req,res)=>{
//	console.log(req.body)
	arr[a]=req.body
	a++
	var str = JSON.stringify(arr)
	fs.writeFile("./1.json",str,(err)=>{
		if(err) throw err
	})
	res.send(arr)
})
app.listen(3000)
