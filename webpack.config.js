const path = require('path');
const webpack = require('webpack');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    debug: true,
    devtool: 'inline-source-map',
    noInfo: false,
    entry: [
        'eventsource-polyfill',
        'webpack-hot-middleware/client?reload=true',
        path.resolve(__dirname, 'src/index')
    ],
    target: 'web',
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'src')
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerHost: 'localhost',
            analyzerPort: 8888,
            reportFilename: 'report.html',
            defaultSizes: 'parsed',
            openAnalyzer: true,
            generateStatsFile: false,
            statsFilename: 'stats.json',
            statsOptions: null,
            logLevel: 'info'
        })
        ],
    module: {
        loaders: [
            {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
            {test: /(\.css)$/, loaders: ['style', 'css']},
            {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'},
            {test: /\.(woff|woff2)$/, loader: 'url?prefix=font/&limit=5000'},
            {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'},
            {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'},
            {test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"]},
            {test: /bootstrap.+\.(jsx|js)$/, loader: 'imports?jQuery=jquery,$=jquery,this=>window'},
            {test: /\.(png|jpg|gif)$/, loader: 'file-loader'}
        ]
    }
};