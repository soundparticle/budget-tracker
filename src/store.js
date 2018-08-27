import { createStore, combineReducers } from 'redux';
import { categories, expensesByCategory } from './components/categories/reducers';

const combined = combineReducers({
  categories, 
  expensesByCategory
});

const store = createStore(
  categories,
  combined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;