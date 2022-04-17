const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    index: "./frontend/index.js",
    test: "./frontend/test.js",
  },
  output: {
    clean: {
      keep: ".gitkeep",
    },
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "server/static/server"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "../../templates/server/index.html",
      template: "./frontend/templates/index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      filename: "../../templates/server/test.html",
      template: "./frontend/templates/test.html",
      chunks: ["test"],
    }),
  ],
  resolve: {
    modules: [path.resolve(__dirname, "frontend"), "node_modules"],
  },
  watchOptions: {
    ignored: /node_modules/,
  },
};
