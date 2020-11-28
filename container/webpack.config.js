const HtmlWepackPLugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: 'development',
    devServer: {
        port: 8080
    },
    plugins: [
        new HtmlWepackPLugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'container', // not needed,  added for clarity and only needed for remotes
            remotes: { // lists projects that container can search to get additional code
                productsApp: 'productsApp@http://localhost:8081/remoteEntry.js',// < url for remoteEntry file
                // ^^ name relates to name property in products webpack config
                // ^^ load the file at the listed url if container has eg import abc from products
                cart: 'cart@http://localhost:8082/remoteEntry.js'
            }
        })
    ]
};