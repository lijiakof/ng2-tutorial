var webpack = require('webpack');
var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.ts',
    output: {
        path: __dirname + '/dist',
        filename: 'app.bundle.js',
        chunkFilename: '[id].chunk.js'
    },
    module: {
        exprContextCritical: false,
        preLoaders: [{
                test: /\.ts$/,
                loader: 'string-replace-loader',
                query: {
                    search: '(System|SystemJS)(.*[\\n\\r]\\s*\\.|\\.)import\\((.+)\\)',
                    replace: '$1.import($3).then(mod => (mod.__esModule && mod.default) ? mod.default : mod)',
                    flags: 'g'
                },
                include: [path.resolve(__dirname, "./src")]
            }
        ],
        loaders: [
            { test: /\.ts$/, loader: 'ts-loader' }
        ],
        postLoaders: [{
            test: /\.js$/,
            loader: 'string-replace-loader',
            query: {
                search: 'var sourceMappingUrl = extractSourceMappingUrl\\(cssText\\);',
                replace: 'var sourceMappingUrl = "";',
                flags: 'g'
            }
        }]
    },
    resolve: {
        extensions: ['', '.js', '.ts']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
        inline: true,
        progress: true,
        port: 9090,
        historyApiFallback: true
    }
};