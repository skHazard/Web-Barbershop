'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/index',

    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/'
    },

    watch: NODE_ENV == 'development',

    watchOptions: {
        aggregateTimeout: 300
    },

    devtool: NODE_ENV == 'development' ? 'source-map' : null,

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /\/node_modules\//,
                loader: 'babel-loader?presets[]=es2015&presets[]=react'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader', 'resolve-url-loader', 'autoprefixer-loader?browsers = last 2 versions', 'sass-loader?sourceMap')
            },
            // File loader for supporting images, for example, in CSS files.
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('./style/main.css')
    ]
};
