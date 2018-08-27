import { createStore, combineReducers } from 'redux';
import { categories, expensesByCategory } from './reducers';

const combined = combineReducers({
  categories,
  expensesByCategory
});

const store = createStore(
  combined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;