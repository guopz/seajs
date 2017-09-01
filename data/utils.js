define(function (require, exports, module) {
	var $ = require('jquery');

	var num = '加载 untils.js';
	exports.alert = function(_main){
		alert(_main + num);
	}
});