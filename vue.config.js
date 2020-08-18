const path = require('path')
 
// 拼接路径
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  // publicPath: './', // 部署应用包时的基本 URL Default: '/'
  // outputDir: 'dist',
  // assetsDir: 'static', // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  // indexPath: 'index.html', // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。 Default: 'index.html'
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('./src'))
      .set('_assets', resolve('./src/assets'))
      .set('_components', resolve('./src/components'))
      .set('common', resolve('src/common'))
  }
}