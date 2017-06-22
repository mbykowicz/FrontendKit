const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./app/src/js/app.js",
    output: {
        path: path.resolve(__dirname, "app/build"),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            // ES6 features
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },

            // Sass
            {
                test: /\.(sass|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader'],
                    publicPath: path.resolve(__dirname, "app/build")
                })
            },

            // Load images
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    devtool: "source-map",
    target: "web",
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Title',
            hash: true,
            template: './app/index.html'
        }),
        new ExtractTextPlugin({
            filename: 'build.css',
            allChunks: true
        })
    ]
};