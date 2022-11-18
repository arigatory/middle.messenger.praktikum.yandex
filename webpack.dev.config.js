const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PugPlugin = require('pug-plugin');

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist'),
    clean: true,
  },
  mode: 'development',
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  devServer: {
    port: 3000,
    static: {
      directory: path.resolve(__dirname, './dist'),
    },
    historyApiFallback: {
      index: 'index.html',
    },
    devMiddleware: {
      index: 'index.html',
      writeToDisk: true,
    },
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: 'asset',
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/env'],
            plugins: ['@babel/plugin-proposal-class-properties'],
          },
        },
      },
      {
        test: /\.pug$/,
        loader: PugPlugin.loader,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
      minify: false,
    }),
  ],
};
