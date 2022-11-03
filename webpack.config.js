const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const dotenv = require('dotenv');

module.exports = {
      mode: 'development',
      entry: './src/index.tsx',
      plugins: [
            new HtmlWebpackPlugin({
                  template: path.join(__dirname, 'src', 'index.html'),
                  'process.env': JSON.stringify(dotenv.parsed)
            })
      ],
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
                              { loader: 'css-loader', options: { url: false } },

                              // Compiles Sass to CSS
                              'sass-loader'
                        ]
                  },
                  {
                        test: /\.(png|svg|jpg|jpeg|gif|ico)$/,
                        exclude: /node_modules/,
                        use: ['file-loader?name=[name].[ext]'] // ?name=[name].[ext] is only necessary to preserve the original file name
                  }
            ]
      },
      resolve: {
            extensions: ['.tsx', '.ts', '.js']
      },
      output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'build')
      },
      devServer: {
            allowedHosts: 'all',
            compress: true,
            port: 3000,
            open: true,
            historyApiFallback: true
      }
};
