//views
var express = require("express")
var app = express()
//var ejs = require("ejs")
//在 express里面设置模板引擎
app.set("view engine","ejs")
app.get("/",(req,res)=>{
	var list = ["tom","jeck","rose"]
	res.render("index.ejs",{list:list})
})

app.listen(3000)
