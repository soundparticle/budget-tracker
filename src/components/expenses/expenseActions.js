import { EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_REMOVE } from './expenseReducers';
import { addExpenseToCategory, updateExpenseCategory, removeExpenseCategory } from '../../../src/services/categoryApi';

export const addExpense = (categoryId, expense) => {
  expense.timestamp = (new Date()).toLocaleString();
  expense.categoryId = categoryId;
  return {
    type: EXPENSE_ADD,
    payload: addExpenseToCategory(expense)
  };
};

export const updateExpense = expense => {
  return {
    type: EXPENSE_UPDATE,
    payload: updateExpenseCategory(expense)
  };
};

export const removeExpense = expense => {
  return {
    type: EXPENSE_REMOVE,
    payload: removeExpenseCategory(expense).then(() => expense)
  };
};
