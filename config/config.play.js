const path = require('path')
const config = require('./')
const readme = require.resolve('../loaders/readme')
const example = require.resolve('../loaders/example')

module.exports = {
  entry: {
    app: [':hot:', './play/app.js'],
    preview: [':hot:', './play/preview.js']
  },
  dist: 'dist-play',
  postcss: config.postcss,
  webpack (config) {
    config.resolve.modules.push(path.resolve('src'))
    config.module.rules.push({
      test: /\.play$/,
      use: [{
        loader: 'vue-loader',
        options: {
          loaders: {
            readme: readme,
            example: example
          }
        }
      }]
    })
    return config
  },
  // produce html files for these entries
  html: [
    {title: 'Vue-Play Panel', chunks: ['app']},
    {title: 'Vue-Play Preview', chunks: ['preview'], filename: 'preview.html'}
  ]
}
