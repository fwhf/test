const merge = require('webpack-merge');  // 引入webpack-merge功能模块
const webpack = require('webpack');  // 这个插件不需要安装，是基于webpack的，需要引入webpack模块
const common = require('./webpack.common.js'); // 引入webpack.common.js
const path = require('path');  // 路径处理模块

module.exports = merge(common, {   // 将webpack.common.js合并到当前文件
	mode:'development',
	output: {
    	filename: '[name]_dist.js',//出口文件
    	chunkFilename: '[name].bundle.js',
    	path: path.resolve(__dirname, 'dist')//出口路径
    },
    devServer: {
        contentBase: "./dist",   // 本地服务器所加载文件的目录
        port: "8088",  // 设置端口号为8088
        inline: true,  // 文件修改后实时刷新
        historyApiFallback: true, //不跳转
        hot: true     //开启热更新
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
})