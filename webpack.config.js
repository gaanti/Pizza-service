
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
      mode: 'development',
      entry: './src/index.tsx',
      plugins: [new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
      })],
      module: {
            rules: [
                  {
                        test: /\.tsx?$/,
                        use: 'ts-loader',
                        exclude: /node_modules/
                  },
                  {
                        test: /\.s[ac]ss$/i,
                        use: [
                              // Creates `style` nodes from JS strings
                              'style-loader',
                              // Translates CSS into CommonJS
                              'css-loader',
                              // Compiles Sass to CSS
                              'sass-loader'
                        ]
                  },
                  {
                        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                        exclude: /node_modules/,
                        use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
                  }
            ],
      },
      resolve: {
            extensions: ['.tsx', '.ts', '.js'],
            // "fs": false,
            // "tls": false,
            // "net": false,
            // "path": false,
            // "zlib": false,
            // "http": false,
            // "https": false,
            // "stream": false,
            // "crypto": false,
            // "crypto-browserify": false, //if you want to use this module also don't forget npm i crypto-browserify
      },
      output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'build'),
      },
      devServer: {
            allowedHosts: "all",
            compress: true,
            port: 3000,
            open: true,
            historyApiFallback: true,
            proxy: {
                  '/pizzas': {
                        // target: {
                        //       host: "web",
                        //       protocol: 'http:',
                        //       port: 3000
                        // },
                        logLevel: 'debug',
                        target: {
                              host: "localhost",
                              protocol: 'http:',
                              port: 5000
                        },
                        ignorePath: true,
                        changeOrigin: false,
                        secure: false
                  },
                  devMiddleware: {
                        index: false, // specify to enable root proxying
                  },
            }
      },
};
