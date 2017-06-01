var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app/app.module.js',
  output: {
    path: __dirname + '/.build',
    filename: 'app.bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      { test: /\.html$/, loader: "html-loader" },
      { test: /\.css$/, loader: "style!css" }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })
  ]
}