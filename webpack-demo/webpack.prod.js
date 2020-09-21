const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const fwhfPlugin = require('./fwhf-plugin');

module.exports = merge(common, { // 将webpack.common.js合并到当前文件
	mode:'production',
    devtool: 'source-map',  // 会生成对于调试的完整的.map文件，但同时也会减慢打包速度
    output: {
    	filename: '[name]_dist.[chunkhash].js',//出口文件
    	chunkFilename: '[name].bundle.js',
    	path: path.resolve(__dirname, 'dist')//出口路径
    },
    plugins: [
        new CleanWebpackPlugin(),  // 所要清理的文件夹名称
        new fwhfPlugin({
        	options: 'fwhf'
        })
    ]
})