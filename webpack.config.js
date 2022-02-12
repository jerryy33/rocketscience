const path = require('path');
module.exports = {
    entry: './src/game.js',
    mode: 'development',
    devServer: {
        static: {
            directory: path.join(__dirname, 'src'),
        },
        hot: true,
        compress: true,
        port: 8080,
    },
};
