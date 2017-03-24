// Note: You must restart bin/webpack-watcher for changes to take effect

const webpack = require('webpack')
const path = require('path')
const process = require('process')
const glob = require('glob')
const extname = require('path-complete-extname')

let distDir = process.env.WEBPACK_DIST_DIR

if (distDir === undefined) {
  distDir = 'packs'
}

const extensions = ['.js', '.coffee']
const extensionGlob = `*{${extensions.join(',')}}*`
const packPaths = glob.sync(path.join('app', 'javascript', 'packs', extensionGlob))

// TODO: remove react-draft-wysiwyg, bequase it is so huge and not stable app.
const config = {
  entry: {
    web: path.resolve('app', 'javascript', 'packs', 'web.js'),
    administrate: path.resolve('app', 'javascript', 'packs', 'administrate.js'),
    vendor1: ['react', 'react-dom', 'react-router', 'draft-js', 'react-slick'],
    vendor2: ['immutable', 'lodash', 'axios', 'react-redux', 'redux', 'tether', 'react-modal', 'react-waypoint'],
    vendor3: ['react-draft-wysiwyg']
  },

  output: { filename: '[name].js', path: path.resolve('public', distDir) },

  module: {
    rules: [
      { test: /\.coffee(\.erb)?$/, loader: 'coffee-loader' },
      {
        test: /\.jsx?(\.erb)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['react',  ['latest', { 'es2015': { 'modules': false } }]],
        }
      },
      {
        test: /\.erb$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'rails-erb-loader',
        options: {
          runner: 'DISABLE_SPRING=1 bin/rails runner'
        }
      }
    ]
  },

  plugins: [
    new webpack.EnvironmentPlugin(Object.keys(process.env)),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      chunks: ['web', 'vendor1']
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'utils',
      chunks: ['web', 'vendor2']
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'editor',
      chunks: ['web', 'vendor3']
    })
  ],

  resolve: {
    extensions,
    modules: [
      path.resolve('app/javascript'),
      path.resolve('node_modules')
    ]
  },

  resolveLoader: {
    modules: [path.resolve('node_modules')]
  }
}

module.exports = {
  distDir,
  config
}
