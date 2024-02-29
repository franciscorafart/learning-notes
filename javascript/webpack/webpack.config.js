const path = require('path')

const config = () => {
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'), // dirname stores current directory. Has to be absolute path
      filename: 'main.js'
    },
    devServer: {
      // static: path.resolve(__dirname, 'src'),
      static: {
        directory: path.join(__dirname, './src')
      },
      port: 3000,
      compress: true,
    },
    devtool: 'source-map',
    module: {
        rules: [ // Loaders here
          {
            test: /\.js$/,
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'], // plugins, presets: groups of pre-configured plugins
            },
          },
          {
            test: /\.css$/,
            use: [
              'style-loader', // generate and inject style element
              'css-loader', // load css files             
            ]
          }
        ],
      },
  }
}

module.exports = config