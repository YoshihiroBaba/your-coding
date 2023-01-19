const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const RemoveEmptyScriptsPlugin = require("webpack-remove-empty-scripts");

module.exports = {
  mode: "development", //デフォルト
  // devtool: 'source-map',
  mode: "development",
  entry: "./src/js/main.js",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "js/[name]-[contenthash].js",
    publicPath: "./",
  },
  // devServer: {
  //   static: './src/js/main.js',
  //   publicPath: "/",
  // },
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
          filename: "images/[name]-[contenthash][ext]", //[contentshash]でランダムに設定し、キャッシュをリセットする
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
            loader: "image-webpack-loader",
            options: {
              //どのくらい圧縮するかを指定できる
            },
          },
        ],
      },
      {
        test: /\.html$/i,
        loader: "html-loader", //<%= require() %>を使わなくてもよいように
      },
    ],
  },
  plugins: [
    // new RemoveEmptyScriptsPlugin(),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "./css/[name]-[contenthash].css",
    }),
    new HtmlWebpackPlugin({
      template: "./src/templates/index.html",
    }),
  ],
};
