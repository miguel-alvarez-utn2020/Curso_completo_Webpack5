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
        // `asset`: Decide automáticamente si el archivo se inyecta inline o como recurso separado según su tamaño.
        // Si es pequeño, se integra como Data URI; si es más grande, se genera un archivo independiente.
        {
          test: /\.(png|jpe?g|gif)$/i,
          type: 'asset'
        },
      
        // `asset/source`: Devuelve el contenido del archivo directamente como cadena de texto.
        // Útil para manipular el contenido dentro del código (ej: plantillas o datos textuales).
        {
          test: /\.txt$/,
          type: 'asset/source'
        },
      
        // `asset/resource`: Crea siempre un archivo separado y devuelve su URL pública.
        // Ideal para recursos más pesados o que prefieres servir de forma independiente.
        {
          test: /\.(png|jpg|gif)$/i,
          type: 'asset/resource',
        },
      
        // `asset/inline`: Incrusta el archivo completo como Data URI en el bundle.
        // Recomendado para archivos muy pequeños para evitar solicitudes HTTP adicionales.
        {
          test: /\.svg$/i,
          type: 'asset/inline'
        }
      ]
    }
};