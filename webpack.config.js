const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/js/script.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename:'js/script.js',
  },
  module: {
    rules: [
      {
        test: /\.css/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.(png|jpg)/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name][ext]'
        },
        use: [
          // webpack4までの記述
          // {
          //   loader: 'file-loader',
          //   options: {
          //     esModule: false,
          //     name: 'images/',
          //   },
          // },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: './css/style.css',
    }),
    new HtmlWebpackPlugin({
        template: './src/templates/index.html',
    }),
    new CleanWebpackPlugin(),
],
};
