//buffer 二进制数据   缓存区
/*
 * 
 * 什么是buffer？
 * 从类型说，就是一个类数组
 * 从内容来说，就是开辟了一个新内存空间
 * 作用：
 * 处理二进制数据
 * 解决数据传输过大
 * 案例：
 * 文件流  事件流  TCP 
 * 别名：缓存区(等待区)
 * 什么是二进制(0b)数据？     八进制(0)  十六进制(0x)  
 * 返回的就是0和1
 * 00000 11 
 * 创建buffer？
 * new buffer()   废弃了
 * 因为buffer是一个全局对象   所以不需要通过require加载
 * 
 * buffer可以传输的类型
 * string/Buffer/ArrayBuffer/Array/or Array-lick Object
 * 
 * buffer下面有哪些方法
 * toJSON toString slice contact length
 * 字节  bit  byte
 * 
 * buffer的编码类型
 * utf-8 base64 hex Ascii unicode
 * 
 * 
 * buffer和cache的区别
 * buffer数据的临时居住地   cache永久的家
 * 
 * */

//Buffer.from()   把字符串转换为buffer 
//第一种定义buffer的方法
var buf = Buffer.from("node")
//第二种  返回一个已初始化的数据，防止生成新的数据包含旧数据
//var buf = Buffer.alloc(10)
//第三种  不安全不推荐使用   未被初始化的buffer
//var buf = Buffer.allocUnsafe(10)
//console.log(buf.toJSON().type)
//console.log(buf.toJSON().data)
console.log(Buffer)

