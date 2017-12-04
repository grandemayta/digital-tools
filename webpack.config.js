var path = require('path');
var src = path.resolve(__dirname, './src');
var dist = path.resolve(__dirname, './dist');

module.exports = {
    entry: src + '/js/module.js',
    output: {
        path: dist,
        filename: 'bundle.js'
    }
};