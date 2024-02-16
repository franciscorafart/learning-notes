const path = require('path')

const config = () => {
  return {
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'build'), // dirname stores current directory. Has to be absolute path
      filename: 'main.js'
    },
    module: {
        rules: [ // Loaders here
          {
            test: /\.js$/,
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'], // plugins, presets: groups of pre-configured plugins
            },
          },
        ],
      },
  }
}

module.exports = config