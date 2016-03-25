import { createStore, applyMiddleware } from 'redux';

import reducer from 'shared/reducer';

export default (initialState, ...middleware) =>
  createStore(reducer, initialState, applyMiddleware(...middleware));
