

module.exports = {
  entry: './src/App.jsx',
  output: {
    path: __dirname + '/static',
    filename: 'app.bundle.js',
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        query: {
          presets: ['react','es2015']
        }
      },
    ]
  }
}
