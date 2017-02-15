let webpack = require('webpack');

let options = {
  devtool: "cheap-eval-source-map"
};

module.exports = {
  devtool: options.devtool,
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
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      comments: false
    }),
    new webpack.BannerPlugin({
      banner: 'Brought to you by Ralph with  😃',
      entryOnly: true
    })
  ]
};