const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000',  // Flask backend URL
        changeOrigin: true,
        pathRewrite: { '^/api': '/api' },     // Optional: Rewrite the path if needed
      },
    },
  },
})
