import { createStore, applyMiddleware } from 'redux';

import reducer from 'shared/reducer';

export default (initialState, ...middleware) =>
  applyMiddleware(...middleware)(createStore)(reducer, initialState);
