const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundlefile.js'
  },
module: {
rules : [
         {
          test: /\.js$/,
          use: [ 'babel-loader'],
          exclude: /node_modules/,
         },
         { 
          test: /\.css$/i,
          exclude: /node_modules/,
          use: [
              "style-loader",
              "css-loader"
              ]
          }
        ]
},
  plugins: [
    new HtmlWebpackPlugin({
       template: './src/index.html'
    })
  ]
}