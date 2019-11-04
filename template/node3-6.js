var http = require("http")
var ejs = require("ejs")
var fs = require("fs")
http.createServer((req,res)=>{
	
	//render 渲染  第一个参数代表的是模板   第二个参数代表的是数据
	//conpile  编译  第一个参数代表的是模板  第二个参数代表的是数据(对象)
	//template  模板
	//标签
	/*
	 * <%%>流程控制标签
	 * <%=%> 输出
	 * <%#%> 注释
	 * <%_ %> 去除前面的空格
	 * <% _%> 去除后面的空格
	 * <%-%>  语句解析   转译结构到模板
	 * <include />  包含  相当于jq中的loud
	 * */
	fs.readFile("./view/index.ejs",(err,data)=>{
		var template = data.toString()
		var list = ["vuew","react","node"]
		var a = {"a":"一","b":"二","c":"三"}
		var b = 2
		var c="啦啦啦"
		var result = ejs.render(template,{list:list,a:a,b:b,c:c})
		
		//response  响应前端请求
		res.end(result)
	})
}).listen(3000)
