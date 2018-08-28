import { EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_REMOVE } from '../expenses/expensesReducers';
import shortid from 'shortid';

export const addExpense = (categoryId, expense) => {
  expense.key = shortid.generate();
  expense.timestamp = (new Date()).toLocaleString();
  expense.categoryId = categoryId;
  return {
    type: EXPENSE_ADD,
    payload: { ...expense }
  };
};

export const updateExpense = (expense) => {
  return {
    type: EXPENSE_UPDATE,
    payload: { ...expense }
  };
};

export const removeExpense = (expense) => {
  return {
    type: EXPENSE_REMOVE,
    payload: { ...expense }
  };
};