var path = require('path');

module.exports = function(config) {  
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      './test/**/*.js',
      './test/*.js'
    ],

    preprocessors: {
      // add webpack as preprocessor
      // 'src/**/*.js': ['webpack', 'sourcemap'],
      'test/*.test.js': ['webpack','sourcemap']
    },
    // webpack file
    webpack: { 
      entry : 'prepend',
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: path.resolve(__dirname, 'node_modules'),
            query: {
              presets: ['react']
            }
          },
          {
            test: /\.json$/,
            loader: 'json',
          },
        ]
      },
      
      externals: {
        'react/addons': 'react/addons',
        'react/lib/ExecutionEnvironment': 'react/lib/ExecutionEnvironment',
        'react/lib/ReactContext': 'react/lib/ReactContext'
      }
    },

    babel :{
        "presets": [ "es2015", "stage-0", "react"],

       "plugins": ["transform-decorators-legacy","transform-runtime","css-modules-transform"],
        "env": {
          "build": {
            "optional": ["optimisation", "minification"]
          },
          "test":{
            "plugins":[[
              "babel-plugin-webpack-loaders",{
              "config":"./conf/webpack.conf.js",
              "verbose":false
            }]]
          }
        }
      },

    webpackServer: {
      noInfo: true 
    },

    plugins: [
      'webpack',
      'babel-plugin-webpack-loaders',
      'karma-webpack',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-chrome-launcher',
    ],


    babelPreprocessor: {
      options: {
        presets: ["es2015", "stage-0", "react"],
        plugins: ["transform-decorators-legacy","transform-runtime","css-modules-transform"],
        env: {
          build: {
            "optional": ["optimisation", "minification"]
          },
          test:{
            plugins:[[
              "babel-plugin-webpack-loaders",{
              "config":"./conf/webpack.conf.js",
              "verbose":false
            }]]
          }
        }
      }
    },
    reporters: ['progress'],
    // port: 9002,
    logLevel: config.LOG_INFO,
    browsers: ['Chrome'
    // ,'Firefox','Safari'
    ],
    singleRun: false,
  })

};