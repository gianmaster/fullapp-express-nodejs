'use strict';

var webpack = require('webpack'),
    path = require('path');

var APP_DIR = __dirname + '/client/src/js';

module.exports = {
  //la configuracion va aqui
  context: APP_DIR,
  entry: {
    //app: './index.js'
    app: ['webpack/hot/dev-server', './index.js']
  },
  output: {
    path: APP_DIR,
    filename: 'bundle.js'
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass'
      }
    ]
  }
}
