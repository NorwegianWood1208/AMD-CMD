const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require("html-webpack-plugin");

const parts = require("./webpack.parts.js");

const commonConfig = merge([
  {
    plugins: [
      new HtmlWebpackPlugin({
        title: "Webpack demo",
      }),
    ],
    output: {
      publicPath: '/',
    },
  },
]);

const productionConfig = merge([
  parts.devServer({
    // 如果有需要的话，可以在这里定义 host/port
    host: process.env.HOST,
    port: 8090,
  }),
]);

const developmentConfig = merge([
  parts.devServer({
    // 如果有需要的话，可以在这里定义 host/port
    host: process.env.HOST,
    port: process.env.PORT,
  }),
]);

module.exports = mode => {
  console.log(process.env.NODE_ENV)
  if (process.env.NODE_ENV === "production") {
    return merge(commonConfig, productionConfig );
  } else {
    return merge(commonConfig, developmentConfig );
  }
};