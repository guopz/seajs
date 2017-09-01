### Seajs

下载
>https://seajs.github.io/seajs/docs/#downloads <br />
基本介绍 <br />
http://yslove.net/seajs/ <br />
快速上手 <br />
http://www.qianduan8.com/739.html

#### HTML
>1. 加载 sea.js
>2.  插件进行 cmd 方式加载
>3. 设置 seajs.config({ // todo }) 文件
>4. seajs.use() 调用


##### 1、插件的使用
```
define(function(require, exports, module) {
    // slide插件代码
    /**
     * @authors laoyuan
     * @version 1.0
     */
     
    ;(function($){
        $.fn.slide=function(options){
    })(jQuery)
});
```
##### 2、设置路径，方便跨目录调用。通过灵活的设置path可以在不影响base的情况下指定到某个目录
```
seajs.config({
	vars: {
		enter: './data/'
	},
	paths: {
		datas: 'data/',
		libs: 'js/libs/'
	},
	base:"./", // config加载文件的基本路径
	debug: true,
	alias: {
		'jquery':'libs/jquery-1.11.2.js',
		'utils':'datas/utils.js'
	},
	map: [
        [ '.jsx', '-debug.jsx' ]
    ]
});
```
>**alias** 别名配置，配置可以使用 `require('jquery')` <br />
>**vars** 变量配置，配置模块中的变量值，在模块中使用`{key}` <br />
>**paths** 设置路径，在config中设置路径，不影响`base`情况下指定某个目录 <br />
>**map** 该配置可对模块路径进行映射修改，可用于路径转换、在线调试等。

##### 3、页面调用
```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<script src="js/libs/sea.js"></script>
</head>
<body>
	<div id="text">212</div>
	<script src="data/dist.js"></script>
	<script>
		
		seajs.use('{enter}/main',function(main) {
			main.init('你好！');
		});	
		
	</script>
</body>
</html>
```
##### utils.js
```
define(function (require, exports, module) {
	var $ = require('jquery');

	var num = '加载 untils.js';
	exports.alert = function(_main){
		alert(_main + num);
	}
});
```
##### main.js
```
define(function (require, exports, module) {
	// 加载工具函数
	var utils = require('utils');
	// 初始化函数
	var cehsi = function () {
		alert('加载 main.js');
	}
	exports.init = function(_main){
		utils.alert(_main);
		$('#text').text(_main);
		cehsi();
	}
});
```
使用 Sea.js，在书写文件时，需要遵守 CMD （Common Module Definition）模块定义规范。一个文件就是一个模块。如果你使用过nodejs，这对你来说将会非常友好!