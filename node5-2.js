var express = require("express")
var app = express()
//cookie 中间件
var cookieParser = require("cookie-parser")
//让express和cookie建立起联系
app.use(cookieParser())
var path = require("path")
var static = path.resolve(__dirname,"public")
app.use(express.static(static))
app.get("/",(req,res)=>{
	res.send("index")
})
//设置 setCookie
app.get("/login",(req,res)=>{
	var obj=req.query.username
	//设置cookie   maxAge  过期时长   httpOnly 只允许在服务端修改cookie值  
	//  signed 是否深层签名  domian域名  secure
	res.cookie("username",obj,{max:999})
	res.send({"data":obj})
})
//获取  getCookie
app.get("/list",(req,res)=>{
	//获取cookie
	res.send(req.cookies)
})

/*
 * 什么是cookie
 * cookie是一个很小的文本文件，是浏览器储存在用户的机器上的。
 * Cookie是纯文本，没有可执行代码。储存一些服务器需要的信息，
 * 每次请求站点，会发送相应的cookie，这些cookie可以用来辨别用户身份信息等作用。
 * 
 * cookie是存在与访问者计算机中的变量，便于访问同一域名或服务器存储的用户信息
 * 
 * cookie的优缺点
 * 优点：协助服务端承载压力，存在过期时间，不便于攻击者进行攻击
 * 缺点：长度限制，安全性较低，存储量比较小，
 * cookie存储的大小 4kb
 * cookie的安全性	相对比较低，
 * 如何解决安全性低的问题：生成签名
 * cookie的特点	 cookie保存在浏览器本地   cookie是默认不加密的 用户可以直接看到  
 * 				cookie支持被删除    cookie便于用于攻击  cookie易被篡改
 * 
 * */
app.listen(3000)
