// 引入等比适配插件
const px2rem = require('postcss-px2rem')

// 配置基本大小
const postcss = px2rem({
  // 基准大小 baseSize，需要和rem.js中相同
  remUnit: 16
})




module.exports = {
  publicPath: "./",
  // publicPath: process.env.NODE_ENV === "binheSportSystem" ? "./" : "/",
  outputDir: "dist",
  assetsDir : 'static',
  filenameHashing: false,
  lintOnSave: true,
  productionSourceMap: false,
  devServer: {
    proxy: {
      //配置代理
      "/sexLady": {
        target: "https://spq.free.idcfengye.com/binheSportSystem/",
        changeOrigin: true,
        // ws: true,
        pathRewrite: {
          "^/sexLady": "/"
        }
      }
    }
  },
  lintOnSave: true,
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          postcss
        ]
      }
    }
  }
};
