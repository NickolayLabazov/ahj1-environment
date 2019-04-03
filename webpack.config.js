const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  mode: 'development',
  entry: {
    app: './js/app.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '../ahj1-environment',
  },

  output: {
    filename: '.index.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
