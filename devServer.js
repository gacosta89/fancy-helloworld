import webpack from 'webpack';
import config from './webpack.config.dev';
import express from 'express';

import renderLayout from 'server/render-layout';
import settings from 'server/settings';

const compiler = webpack(config);
const NODE_PORT = process.env.NODE_PORT || 3000;
const NODE_HOST = process.env.NODE_HOST || '0.0.0.0';
const app = express();

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use('/', (req, res) => {
  res.status(200).send(renderLayout({ settings, rootMarkup: '', initialState: {} }));
});

app.listen(NODE_PORT, NODE_HOST, (err) => err ?
  console.error(err) :
  console.log(`Listening at http://${NODE_HOST}:${NODE_PORT}`));
