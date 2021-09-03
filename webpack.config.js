const webpack = require('webpack');
const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  entry: path.resolve(__dirname, './src/client/index.js'),
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
  },

  devServer: {
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
  },
};

// const serverConfig = {
//   entry: './src/server.js',
//   target: 'node',
//   devtool: 'source-map',
//   externals: [nodeExternals()],
//   output: {
//     path: path.resolve(__dirname, 'dist'),
//     filename: 'server.bundle.js',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: 'babel-loader',
//       },
//     ],
//   },
//   plugins: [
//     new webpack.BannerPlugin({
//       banner: 'require("source-map-support").install();',
//       raw: true,
//       entryOnly: false,
//     }),
//   ],
// };

// module.exports = clientConfig;
// module.exports = [clientConfig, serverConfig];
