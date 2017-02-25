import React from 'react';

import configureRouter from 'shared/app/router';
import configureProvider from 'shared/app/provider';

import DevTools from 'client/dev/devTools';

const App = ({ history, store, i18n }) => {
  const Router = configureRouter(history);
  const Provider = configureProvider(store, i18n);
  return (
    <Provider>
      <div style={{flex: 1, display: 'flex'}}>
        <Router/>
        <DevTools />
      </div>
    </Provider>
  );
};

export default App;
