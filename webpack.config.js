var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src',
  output: {
    path: 'buidle',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js/,
      loader: 'babel',
      include: __dirname + '/src',
    }, {
      test: /\.css/,
      loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'),
      // loader: ExtractTextPlugin.extract("css"),
      // loaders: ['style', 'css'],
      include: __dirname + '/src'
    }],
  },
  plugins: [
    new ExtractTextPlugin("style.css")
  ]
};
