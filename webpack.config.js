const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(png|gif|jpg|ico)$/, // for images
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]-[sha1:hash:7].[ext]'
            }
          }
        ]
      },
    ],
  },
  mode: "production",
};