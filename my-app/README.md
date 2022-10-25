play-express

# Front (webpack.config.js + /src)

I've installed my react without CRA from hashnode (that the same conf as github).

HashNode
https://hashnode.com/post/setting-up-a-react-app-without-cra-ck8ajj8vm0084rjs1r0fu3vyo

GitHub:
https://github.com/bamiogunfemi/Setting-up-React-without-CRA

---

Install CSS :

└─ $ ▶ npm install --save-dev style-loader

└─ $ ▶ npm install --save-dev css-loader

```
(webpack.config.js)

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
```

# Back (/backend)

└─ $ ▶ npm install express

└─ $ ▶ npm install --save-dev nodemon

```
(package.json)
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
```