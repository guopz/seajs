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