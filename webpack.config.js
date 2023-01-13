const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: 'development', //デフォルト
  devtool: 'source-map',
  mode: "development",
  entry: "./src/js/script.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/script.js",
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [["@babel/preset-env", { targets: "> 30%, not dead" }]], //セットになっている、targetsでブラウザーを指定できる。
            },
          },
        ],
      },
      {
        test: /\.(css|sass|scss)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: false, //デバックする時にtrueにするとよい。
            },
          },
          {
            loader: "sass-loader",
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)/,
        type: "asset/resource", 
        generator: {
          filename: "images/[name][ext]",
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
          {
            loader: 'image-webpack-loader',
            options: {
              //どのくらい圧縮するかを指定できる
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "./css/style.css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
};
