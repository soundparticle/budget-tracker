import { 
  CATEGORY_LOAD, 
  CATEGORY_ADD, 
  CATEGORY_REMOVE, 
  CATEGORY_UPDATE, 
  EXPENSE_ADD
} from '../components/categories/categoriesReducers';

import data from '../components/categories/category-data';
import shortid from 'shortid';

export const load = () => ({
  type: CATEGORY_LOAD,
  payload: data
});

export const add = category => {
  category.key = shortid.generate();
  category.timestamp = (new Date()).toLocaleString();
  return {
    type: CATEGORY_ADD,
    payload: category
  };
};

export const update = category => ({
  type: CATEGORY_UPDATE,
  payload: category
});

export const remove = key => ({
  type: CATEGORY_REMOVE,
  payload: key
});

export const addExpense = (categoryId, expense) => {
  expense.key = shortid.generate();
  expense.timestamp = (new Date()).toLocaleString();
  expense.categoryId = categoryId;
  return {
    type: EXPENSE_ADD,
    payload: { ...expense }
  };
};