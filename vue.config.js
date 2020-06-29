module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/personas" : "./",
  transpileDependencies: ["vue-echarts", "resize-detector"]
};
