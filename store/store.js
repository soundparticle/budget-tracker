import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { categories } from '../src/components/categories/categoriesReducers';
import { expensesByCategory } from '../src/components/expenses/expensesReducers';
import promiseMiddleware from './promise-middleware';
import { error, loading } from '../src/components/app/reducers';

const combined = combineReducers({
  categories,
  expensesByCategory,
  error,
  loading
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combined,
  composeEnhancers(
    applyMiddleware(promiseMiddleware)
  )
);

export default store;