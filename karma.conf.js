const path = require('path');
// var webpackConfig  = require('./conf/webpack.conf.js');

module.exports = function(config) {  
  config.set({
    basePath: __dirname,
    frameworks: ['mocha', 'chai'],
    files: [
      './test/karma/*.js'
    ],

    preprocessors: {
      // add webpack as preprocessor
      // 'src/**/*.js': ['babel','webpack', 'sourcemap'],
      // 'test/karma/*.js':['babel', 'webpack'],
      // 'test/*.test.js': ['babel','webpack','sourcemap']
      'src/**/*.js': ['webpack', 'sourcemap'],
      'test/karma/*.js':[ 'webpack'],
      'test/*.test.js': ['webpack','sourcemap']
    },

    //  babelPreprocessor :{
    //   options: {
    //     presets: [ "es2015", "stage-0", "react"],
    //     // plugins: ["transform-decorators-legacy","transform-runtime","css-modules-transform"]
    //   }
    // },

    // webpack file
    webpack: { 
      entry : path.resolve(__dirname, './src'),
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude : /node_modules/,
            use :{
              loader: 'babel-loader',
              options: {
                presets: [
                  [
                    'env',
                    {
                      modules: false,
                    },
                  ],
                  'react',
                  'stage-1',
                ],
                plugins: [
                  'transform-decorators-legacy',
                ],
              }
            }
          },
          {
            test: /\.svg$/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: [
                    [
                      'env',
                      {
                        modules: false,
                      },
                    ],
                    'react',
                    'stage-1',
                  ],
                },
              },
              {
                loader: 'react-svg-loader',
                options: {
                  svgo: {
                    plugins: [
                      { cleanupIDs: false },
                    ],
                    floatPrecision: 3,
                  },
                },
              },
            ],
          },
          {
            test: /\.json$/,
            loader: 'json-loader',
          },
          
        ]
      },
      externals: {
        cheerio: 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }
    },
    webpackServer: {
      noInfo: true 
    },

    plugins: [
      // 'karma-babel-preprocessor',
      require('karma-webpack'),
      // 'karma-jasmine',
      'karma-mocha',
      'karma-chai',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
    ],



    reporters: ['progress'],
    // port: 9002,
    logLevel: config.LOG_INFO,
    browsers: ['Chrome'
    // ,'Firefox','Safari'
    ],
    singleRun: false,
  })

};