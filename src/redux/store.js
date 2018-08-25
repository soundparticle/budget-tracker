import { createStore/*, combineReducers*/ } from 'redux';
import { categories } from './reducers';

// const combined = combineReducers({
//   categories
// });

const store = createStore(
  categories,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;