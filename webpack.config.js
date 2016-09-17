const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: `${__dirname}/src/index.html`,
	filename: 'view/index.html',
	inject: 'body',
});

module.exports = {
	entry: [
		`${__dirname}/src/index.js`
	],

	output: {
		path: `${__dirname}/build`,
		publicPath: '../',
		filename: 'index_bundle.js',
	},

	module: {
		loaders:[
			{
				test: /\.less$/,
				loader: ExtractTextPlugin.extract('style', 'css!autoprefixer-loader?{browsers:["last 3 version", "Explorer >= 8", "Chrome >= 21", "Firefox >= 1", "Edge 13"]}!less')
			},

			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},

			{
				test: /\.(png|jpg)$/,
				loader: 'url-loader?limit=8192&name=img/[name].[ext]'
			}
		]
	},

	devServer: {
		inline: true,
		port: 8008,
	},

	plugins: [
		HTMLWebpackPluginConfig,
		new ExtractTextPlugin("css/styles.css")
	]
};