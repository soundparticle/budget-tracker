import { EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_REMOVE } from '../expenses/expensesReducers';
import shortid from 'shortid';
import { addExpense, updateExpenses, removeExpenses } from '../../services/budgetApi';

export const add = (categoryId, expense) => {
  expense.key = shortid.generate();
  expense.timestamp = (new Date()).toLocaleString();
  expense.categoryId = categoryId;
  return {
    type: EXPENSE_ADD,
    payload: addExpense(expense)
  };
};

export const update = (expense) => {
  return {
    type: EXPENSE_UPDATE,
    payload: { ...expense }
  };
};

export const remove = (expense) => {
  return {
    type: EXPENSE_REMOVE,
    payload: { ...expense }
  };
};