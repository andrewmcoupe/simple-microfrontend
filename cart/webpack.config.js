const HtmlWepackPLugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
  mode: "development",
  devServer: {
    port: 8082,
  },
  plugins: [
    new HtmlWepackPLugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "cart",
      filename: "remoteEntry.js", // sets the name of the manifest file
      exposes: {
        "./Cart": "./src/bootstrap", // aliases filenames
      },
      shared: ["faker"],
    }),
  ],
};
