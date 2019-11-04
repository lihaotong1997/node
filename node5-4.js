var express = require("express")
var app = express()
var art = require("express-art-template")
//设置模板引擎 
//app.set("view engine","html")
app.engine("art",art)
app.get("/",(req,res)=>{
	var list = ["tom","jeck","rose"]
	res.render("1.art",{list:list})
})
app.listen(3000)
