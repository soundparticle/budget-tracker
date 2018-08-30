import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE } from './reducers';
import { EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_REMOVE } from './reducers';
import { loadCategories, addCategory, removeCategory, updateCategory, addExpenseToCategory, updateExpenseCategory, removeExpenseCategory } from '../../services/categoryApi';
import shortid from 'shortid';

// import CatData from '../categories/categories-data';

export const loadCategory = () => ({
  type: CATEGORY_LOAD, 
  payload: loadCategories()
});

export const add = category => {
  category.key = shortid.generate();
  return {
    type: CATEGORY_ADD,
    payload: addCategory(category)
  }; 
};

export const update = category => ({
  type: CATEGORY_UPDATE,
  payload: updateCategory(category)
});

export const remove = id => ({
  type: CATEGORY_REMOVE,
  payload: removeCategory(id).then(() => id)
});
// Expense actions
export const addExpense = (categoryId, expense) => {
  expense.id = shortid.generate();
  expense.timestamp = new Date();
  expense.categoryId = categoryId;
  return {
    type: EXPENSE_ADD,
    payload: addExpenseToCategory(categoryId, expense)
  };
};

export const updateExpense = expense => ({
  type: EXPENSE_UPDATE,
  payload: updateExpenseCategory(expense.categoryId, expense)
});

export const removeExpense = expense => ({
  type: EXPENSE_REMOVE,
  payload: removeExpenseCategory(expense.categoryId, expense.key).then(() => expense)
});