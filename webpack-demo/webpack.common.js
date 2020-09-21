const path = require('path');  // 路径处理模块
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 引入HtmlWebpackPlugin插件

module.exports = {
    entry: {
    	index:path.join(__dirname, "/src/index.js"),//入口文件
// 		test:path.join(__dirname, "/src/test.js")//入口文件
    },
    optimization: {
		splitChunks: {
			chunks: "all",  // 共有3个值"initial"，"async"和"all"。配置后，代码分割优化仅选择初始块，按需块或所有块
			minSize: 20,  // （默认值：30000）块的最小大小
			minChunks: 1,    // （默认值：1）在拆分之前共享模块的最小块数
			maxAsyncRequests: 5,   //（默认为5）按需加载时并行请求的最大数量
			maxInitialRequests: 3,  //（默认值为3）入口点的最大并行请求数
			automaticNameDelimiter: '.',  // 默认情况下，webpack将使用块的来源和名称生成名称，例如common.index.js
			name: true,
			cacheGroups: {
//				vendors: {
//					test: /[\\/]node_modules[\\/]/,  // 判断引入库是否是node_modules里的
//					priority: -10,   // 数字越大优先级越高 （-10大于-20）
//      		},
//				common: {//所有代码分割快都符合默认值，此时判断priority优先级
//					test: /[\\/]src[\\/]/, 
//					priority: -20,   //数字越大优先级越高 （-10大于-20）
//					filename: 'common.js',  //设置代码分割后的文件名
//					reuseExistingChunk: true  //允许在模块完全匹配时重用现有的块，而不是创建新的块。
//				},
				manifest:{
					
				}
			}
		}
	},
    module: {
        rules: [
			{
				test: /\.css$/,// 正则匹配以.css结尾的文件
				use: [
					'style-loader',
					'css-loader'
				]// 需要用的loader，一定是这个顺序，因为调用loader是从右往左编译的
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: {
					loader:'file-loader',
					options: {
	                    limit: 1000,  // 限制只有小于1kb的图片才转为base64
	                    outputPath: 'images',  // 设置打包后图片存放的文件夹名称
//	                    publicPath: './dist/images' //设置引用路径
	                }
				}
			},
//			{
//				test: /\.js$/,
//				include: path.resolve(__dirname, "src"),
//				use: {
//					loader:'./replaceConsole-loader.js',
//					options: {
//	                    str: 'fwhf'
//	                }
//				}
//			}
		]
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}