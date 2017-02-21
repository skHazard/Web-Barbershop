'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/index',

    output: {
        path: __dirname,
        filename: 'bundle.js',
        publicPath: '/src/'
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
                loader: ExtractTextPlugin.extract('style-loader!css-loader!autoprefixer-loader?browsers = last 2 versions!sass-loader')
            }
        ]
    },
    plugins : [
        new ExtractTextPlugin('./style/main.css')
    ]
};
