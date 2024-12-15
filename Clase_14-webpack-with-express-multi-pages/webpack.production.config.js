const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: {
      'home': './src/home.js',
      'gallery': './src/gallery.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, './dist'),
    },
    mode: 'production',
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    module: {
        rules: [
            {
              test: /\.css$/,
              //La ejecución de los loaders es en sentido inverso a la lista.
              // `css-loader` convierte el archivo CSS en un módulo de JavaScript, permitiendo que Webpack lo procese.
              // `style-loader` inyecta el contenido CSS del módulo resultante directamente en el DOM a través de una etiqueta <style>.
              use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
              test: /\.(png|jpe?g|gif)$/i,
              type: 'asset'
            },
            {
              test: /\.scss$/,
              //La ejecución de los loaders es en sentido inverso a la lista.
              // `css-loader` convierte el archivo CSS en un módulo de JavaScript, permitiendo que Webpack lo procese.
              // `style-loader` inyecta el contenido CSS del módulo resultante directamente en el DOM a través de una etiqueta <style>.
              use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            },
            {
              // `test`: Especifica qué tipo de archivos se deben procesar con esta regla.
              // Aquí se aplicará a todos los archivos .js.
              test: /\.js$/,
            
              // `exclude`: Indica qué directorios o patrones se deben excluir.
              // Esto evita procesar archivos en node_modules, optimizando el build.
              exclude: /node_modules/,
            
              // `use`: Define el loader y sus opciones de configuración.
              use: {
                // `loader`: Indica qué loader se utilizará para la transformación.
                // `babel-loader` usa Babel para transpilar el código JavaScript.
                loader: 'babel-loader',
                
                // `options`: Configura el loader, especificando presets y plugins a usar.
                options: {
                  // `presets`: Conjunto de reglas preconfiguradas de Babel para traducir
                  // código moderno a una versión compatible con navegadores más antiguos.
                  // `@babel/env` ajusta las transformaciones según el entorno de ejecución.
                  presets: ['@babel/env'],
                  
                  // `plugins`: Extienden la funcionalidad de Babel.
                  // `@babel/plugin-proposal-class-properties` permite usar propiedades
                  // de clase en JavaScript, una característica no estándar sin este plugin.
                  plugins: ['@babel/plugin-proposal-class-properties']
                }
              }
            }
            
          ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css'
      }),
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        filename: 'home.html',
        chunks: ['home'],
        title: 'Home',
        template: 'index.html',
        minify: false
      }),
      new HtmlWebpackPlugin({
        filename: 'gallery.html',
        chunks: ['gallery'],
        title: 'Gallery',
        template: 'index.html',
        minify: false
      }),
    ]
};