import runner from 'nightwatch-autorun';
import makeApp from 'server/app.js';
import config from 'config';

const app = makeApp();
const NODE_PORT = process.env.NODE_PORT || config.get('port');

runner({port: NODE_PORT, server: app});
