import webpack from 'webpack';
import webpackConfig from './webpack.config.dev';
import express from 'express';
import config from 'config';

import renderLayout from 'server/render/layout';

const compiler = webpack(webpackConfig);
const NODE_PORT = process.env.NODE_PORT || 3000;
const NODE_HOST = process.env.NODE_HOST || '0.0.0.0';
const app = express();

const title = config.get('name');

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler, {
    path: '/__what',
    heartbeat: 2000,
}));

app.use('*', (req, res) => {
    res.status(200).send(
        renderLayout({
            title,
            rootMarkup: '',
            initialState: {}
        }));
});

app.listen(NODE_PORT, NODE_HOST, (err) => err ?
           console.error(err) :
           console.log(`Listening at http://${NODE_HOST}:${NODE_PORT}`));
