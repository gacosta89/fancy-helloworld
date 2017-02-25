'use strict'; // eslint-disable-line strict

var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'eval',
    target: 'web',
    context: path.resolve(__dirname),
    resolve: {
        modules: [
            'node_modules',
            path.join(__dirname, 'source'),
        ]
    },
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?path=/__what&timeout=2000&overlay=false&reload=true',
        './source/client/index'
    ],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'index.js',
        publicPath: '/static/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development'),
            },
        }),
    ],
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            include: [
                path.join(__dirname, 'source'),
                path.join(__dirname, 'app-home.js')
            ]
        }, {
            test: /\.(png|jpg|gif|GIF|ttf|woff|eot|svg|css)$/,
            loader: 'file-loader?name=assets/[name].[ext]'
        }, {
            test: /\.json$/,
            loader: 'json-loader'
        }]
    }
};
