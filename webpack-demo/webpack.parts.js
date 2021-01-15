exports.devServer = ({ host, port } = {}) => ({
    devServer: {
      stats: "errors-only",
      host, // 默认为 `localhost`
      port, // 默认为 8080
      open: false,
      overlay: true,
    },
  });