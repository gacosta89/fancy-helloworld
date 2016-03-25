import { createStore, applyMiddleware, compose } from 'redux';
import DevTools from 'shared/containers/devTools';

import reducer from 'shared/reducer';

export default (initialState, ...middleware) => {
  const createStoreWithMiddleware =
    compose(
      applyMiddleware(...middleware),
      DevTools.instrument()
    )(createStore);

  const store = createStoreWithMiddleware(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('shared/reducer', () => {
      const nextReducer = require('shared/reducer').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
};
