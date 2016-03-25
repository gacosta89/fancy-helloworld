import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import books from 'shared/reducer/books';

export default combineReducers({
  routing,
  books
});
