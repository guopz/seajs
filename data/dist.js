/**
 * sea config
 * 基于当前html 文件路径
 */
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
	}
});