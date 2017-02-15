let webpack = require('webpack');

module.exports = {
  output: {
    publicPath: 'js/',
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader']
    }, {
      test: /\.(sass|scss)$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader',
      ]
    }, {
      test: /\.js$/,
      use: [{
        loader: 'babel-loader',
        options: { presets: ['es2015'] }
      }]
    }]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor' // Specify the common bundle's name.
    })
  ]
};