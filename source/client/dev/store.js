import { createStore, applyMiddleware, compose } from 'redux';
import DevTools from 'client/dev/devTools';

import reducer from 'shared/app/reducer';

export default (initialState = {}, ...middleware) => {
  const createStoreWithMiddleware =
    compose(
      applyMiddleware(...middleware),
      DevTools.instrument()
    )(createStore);

  const store = createStoreWithMiddleware(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('shared/app/reducer', () => {
      const nextReducer = require('shared/app/reducer').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};
