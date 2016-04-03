//'use strict';

var webpack = require('webpack'),
    path = require('path');

var APP_DIR = path.join(__dirname, 'client/src');

module.exports = {
  //la configuracion va aqui
  context: APP_DIR,
  entry: {
    //app: './index.js'
    app: ['webpack/hot/dev-server', './js/index.js']
  },
  output: {
    path: APP_DIR + '/js',
    filename: 'bundle.js'
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [

      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      },
      {
         test: /\.js$/,
         loader: 'ng-annotate!babel?presets[]=es2015!jshint',
         exclude: /node_modules|bower_components/
      }
      /*
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.png$/, loader: "url-loader?limit=100000" },
      { test: /\.jpg$/, loader: "file-loader" },
      {
        test: /\.js$/,
        loader: 'ng-annotate!babel?presets[]=es2015!jshint',
        exclude: /node_modules|bower_components/
      }
      */
    ]
  },
  sassLoader: {
    includePaths: [APP_DIR, "./css"]
  }
};
