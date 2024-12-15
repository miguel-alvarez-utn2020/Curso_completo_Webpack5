const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },
    mode: 'none',
    module: {
        rules: [
            {
              test: /\.css$/,
              //La ejecución de los loaders es en sentido inverso a la lista.
              // `css-loader` convierte el archivo CSS en un módulo de JavaScript, permitiendo que Webpack lo procese.
              // `style-loader` inyecta el contenido CSS del módulo resultante directamente en el DOM a través de una etiqueta <style>.
              use: ['style-loader', 'css-loader']
            }
          ]
    }
};