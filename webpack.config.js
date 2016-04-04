//'use strict';

var webpack = require('webpack'),
    ngAnnotatePlugin = require('ng-annotate-webpack-plugin');
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true,
      compress: {
         warnings: false
       },
       mangle: {
          except: ['$super', '$', 'exports', 'require']
      }
    }),
    new ngAnnotatePlugin({
            add: true,
            // other ng-annotate options here
        })
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
      },
      {
         test: /\.css$/,
         loader: "style!css"
       },
       {
         test: /\.(woff|woff2|ttf|eot|svg)(\?]?.*)?$/,
         loader : 'file-loader?name=res/[name].[ext]?[hash]'
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
