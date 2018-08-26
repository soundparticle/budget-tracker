import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE } from './reducers';
import { EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_REMOVE } from './reducers';
import data from './categories-data';
import shortid from 'shortid';

export const load = () => ({
  type: CATEGORY_LOAD, 
  payload: data
});

export const add = category => {
  category.id = shortid.generate();
  category.timestamp = new Date();
  return {
    type: CATEGORY_ADD,
    payload: category
  };
};

export const update = category => ({
  type: CATEGORY_UPDATE,
  payload: category
});

export const remove = id => ({
  type: CATEGORY_REMOVE,
  payload: id
});
// Expense Actions
export const addExpense = expense => {
  expense.id = shortid.generate();
  expense.timestamp = new Date();
  return {
    type: EXPENSE_ADD,
    payload: expense
  };
};

export const updateExpense = expense => ({
  type: EXPENSE_UPDATE,
  payload: expense
});

export const removeExpense = id => ({
  type: EXPENSE_REMOVE,
  payload: id
});

