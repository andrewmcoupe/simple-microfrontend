const HtmlWepackPLugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: 'development',
    devServer: {
        port: 8081
    },
    plugins: [
        new HtmlWepackPLugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'products',
            filename: 'remoteEntry.js', // sets the name of the manifest file
            exposes: {
                './ProductsIndex': './src/index' // aliases filenames
            },
            shared: ['faker']
        })
    ]
};