'use strict';

var NODE_ENV = process.env.NODE_ENV || "development";
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
	entry: __dirname + '/src/scripts/app',
	output: {
		path: __dirname + '/build',
		filename: 'bundle.js'
	},
	watch: NODE_ENV === 'development',

	watchOptions: {
		aggregateTimeout: 100
	},
	module: {
		loaders: [
			{
				test: /\.scss$/,
				loader: 'style-loader!css-loader?minimize!autoprefixer-loader!sass-loader'
			},
			{
				test: /\.jade$/,
				loader: 'jade'
			},
			{
				test:/\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
				loader: 'file?name=[path][name].[ext]'
			},
			{
				test: /\.json$/,
				loader: 'json-loader'
			},
			{
				test: /\.js$/,
				loader: 'babel?presets[]=es2015'
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			filename:'index.html',
			template: './src/templates/index.jade'
		})
	]
}
if (NODE_ENV === "production"){
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin({
			compress: {
				warnings: false,
				drop_console: true,
				unsafe: true
			}
		})
	);
}