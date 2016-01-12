var config = require('./webpack.base.conf')
var OpenBrowserPlugin = require('open-browser-webpack-plugin')
var PORT = 8080

config.devtool = 'eval-source-map'

config.devServer = {
  host: '0.0.0.0',
  historyApiFallback: true,
  noInfo: true
}

config.plugins = [
  new OpenBrowserPlugin({ url: 'http://localhost:' + PORT })
]

module.exports = config
