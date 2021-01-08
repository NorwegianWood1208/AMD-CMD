const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devServer: {
    // 仅显示错误级别的输出,从而减少输出信息
    stats: "errors-only",

    // 从环境变量中传入 host 和 port,从而达到可配置
    //
    // 如果你使用 Docker, Vagrant 或者 Cloud9, 那么把
    // host 设置为 "0.0.0.0";
    //
    // 0.0.0.0 对于所有的网络设备都是可用的
    // 而默认的 `localhost` 不行.
    host: '0.0.0.0', // 默认为 `localhost`
    port: process.env.PORT, // 默认为 8080
    useLocalIp: true,
    open: false, // 在浏览器中打开
    watchOptions: {
        // 首次更改后延迟多少时间再重新构建
        aggregateTimeout: 300,

        // 轮询的时间间隔 (单位 ms, 接受 Boolean 类型的值)
        poll: 1000,
    },
  },
  output: {
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack demo'
    })
  ]
}