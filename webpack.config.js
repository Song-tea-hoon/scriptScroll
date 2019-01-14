var path = require('path'),
webpack = require('webpack'),
HtmlWebpackPlugtin = require('html-webpack-plugin'),
CopyWebpackPlugin = require('copy-webpack-plugin'),
internalIp = require('internal-ip');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output:{
        path: path.join(__dirname, './dist'),
        filename:'./js/bundle.js'
    },
    devServer: {
        host: internalIp.v4.sync(),
        disableHostCheck: true
    },
    plugins:[
        new HtmlWebpackPlugtin({
            template:'./src/index.html'
        }),
        new webpack.ProvidePlugin({
            $:'jquery'
        }),
        new CopyWebpackPlugin([
            {from: './src/css/**', to:'./css', flatten:true}
        ])
    ]
}