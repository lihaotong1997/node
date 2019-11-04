//req.url   请求.路径    (地址栏)  
var   http = equite("http")
http.createServer((req,res)=>{
	if(req.url == "/favicon.ico"){
		return 
	}
	console.log(req.url)
	res.end(req.toString())
}).listen(3000)
