import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './promise-middleware';
import { categories } from '../components/categories/reducers';
import { error, loading } from '../components/app/error-reducers';
import { expensesByCategory } from '../components/expenses/expenseReducers';

const rootReducer = combineReducers({
  categories,
  expensesByCategory,
  error,
  loading 
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
      promiseMiddleware
    )
  )
);

export default store;