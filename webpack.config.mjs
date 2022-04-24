import path from 'path';
import {fileURLToPath} from 'node:url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
    entry: {
        game: './src/main.js',
        app: './src/app.js',
        particles: './node_modules/particles.js/particles.js',
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true,
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        hot: true,
        compress: true,
        port: 8080,
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunks: ['app', 'particles'],
        }),
        new HtmlWebpackPlugin({
            filename: 'game.html',
            template: 'src/game.html',
            chunks: ['game'],
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'assets',
                    to: 'assets',
                    globOptions: {
                        ignore: ['**/kenny/**/*'],
                    },
                },
            ],
        }),
    ],
};
