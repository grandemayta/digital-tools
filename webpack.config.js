var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

var src = path.resolve(__dirname, './src');
var dist = path.resolve(__dirname, './dist');

module.exports = {
    entry: src + '/js/module.js',
    output: {
        path: dist,
        filename: 'bundle.js'
    },
    devServer: {
        port: 3002,
        open: true
    },
    module: {
        rules: [
            { 
                test: /\.js$/, 
                loader: 'babel-loader', 
                exclude: /node_modules/ 
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            template: src + '/index.html',
            filename: 'index.html'
        })
    ]
};