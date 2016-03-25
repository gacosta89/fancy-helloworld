import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import createRouter from 'shared/router';

import configureStore from 'shared/store';

const store = configureStore(),
  history = syncHistoryWithStore(browserHistory, store),
  Router = createRouter(React, history);

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
);
