module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
  },
  mini: {
  },
  h5: {
    devServer: {
      // 设置代理来解决 H5 请求的跨域问题 代理到本地mock服务端地址
      // 远端测试可以修改为真实服务器地址
      proxy: {
        '/api': {
          target: 'http://127.0.0.1:9527',
          pathRewrite: { '^/api': '/api' },
          changeOrigin: true
        },
      }
    }
  }
}
