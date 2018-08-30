import { EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_REMOVE } from './expenseReducers';
import { addExpenseToCategory, updateExpenseCategory, removeExpenseCategory } from '../../../src/services/categoryApi';
import shortid from 'shortid';


export const add = (categoryId, expense) => {
  expense.id = shortid.generate();
  expense.timestamp = new Date();
  expense.categoryId = categoryId;
  return {
    type: EXPENSE_ADD,
    payload: addExpenseToCategory(categoryId, expense)
  };
};

export const update = expense => ({
  type: EXPENSE_UPDATE,
  payload: updateExpenseCategory(expense.categoryId, expense)
});

export const remove = expense => ({
  type: EXPENSE_REMOVE,
  payload: removeExpenseCategory(expense.categoryId, expense.key).then(() => expense)
});
