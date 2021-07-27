const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackPwaManifestPlugin = require('webpack-pwa-manifest')
const path = require('path')
const workboxWebpackPlugin = require('workbox-webpack-plugin')

module.exports = {
  mode: 'development',
  output: {
    filename: 'app.bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new webpackPwaManifestPlugin({
      name: 'Petgram - Best Pets Apps',
      short_name: 'Petgram',
      description: 'Share, Like and View... Your pets pictures with all world',
      background_color: '#fff',
      theme_color: '#3a317a',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),
    new workboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
          },
        },
        {
          urlPattern: new RegExp('https://petgram-1obkso1hm-duvanmorenocardona.vercel.app/'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'API'
          },
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: [['@babel/plugin-transform-runtime', {regenerator: true}]],
          },
        },
      },
    ],
  },
}
