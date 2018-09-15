jest.mock('../../services/categoryApi', () => ({
  loadCategories: jest.fn(),
  addCategory: jest.fn(),
  updateCategory: jest.fn(),
  removeCategory: jest.fn(),

  addExpenseToCategory: jest.fn(),
  updateExpenseCategory: jest.fn(),
  removeExpenseCategory: jest.fn()
}));

import { load, add, update, remove } from './actions';
import { addExpense, updateExpense, removeExpense  } from '../expenses/expenseActions';
import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE } from './reducers';
import { EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_REMOVE  } from '../expenses/expenseReducers';
import { loadCategories, addCategory, removeCategory, updateCategory, addExpenseToCategory, updateExpenseCategory, removeExpenseCategory } from '../../services/categoryApi';


// Category actions
describe('CRUD category actions', () => {

  it('loads a category', () => {

    const promise = Promise.resolve();
    loadCategories.mockReturnValueOnce(promise);

    const { type, payload } = load();
    expect(type).toBe(CATEGORY_LOAD);
    expect(payload).toBe(promise);
    expect(loadCategories.mock.calls.length).toBe(1);
  });

  it('add a category', () => {
    const category = { name: 'fuzz' };
    const promise = Promise.resolve();
    addCategory.mockReturnValueOnce(promise);

    const { type, payload } = add(category);
    expect(type).toBe(CATEGORY_ADD);
    expect(payload).toBe(promise);
    expect(addCategory.mock.calls.length).toBe(1);
    expect(addCategory.mock.calls[0][0]).toBe(category);
  });

  it('updates a category', () => {
    const category = { id: 123, name: 'fuzz', budget: 90 };
    const promise = Promise.resolve();
    updateCategory.mockReturnValueOnce(promise);

    const { type, payload } = update(category);
    expect(type).toBe(CATEGORY_UPDATE);
    expect(payload).toBe(promise);
    expect(updateCategory.mock.calls.length).toBe(1);
    expect(updateCategory.mock.calls[0][0]).toBe(category);

  });

  it('removes a category', () => {
    const promise = Promise.resolve();
    removeCategory.mockReturnValueOnce(promise);
    const id = 123;

    const { type, payload } = remove(id);
    expect(type).toBe(CATEGORY_REMOVE);
    expect(removeCategory.mock.calls.length).toBe(1);
    expect(removeCategory.mock.calls[0][0]).toBe(id);

    return payload.then(idToDelete => {
      expect(idToDelete).toBe(id);
    });
  });

});
// Expense actions

describe('Expense actions', () => {

  it('adds expense', () => {
    const expense = { name: 'guitar' };
    const categoryId = '123';
    const promise = Promise.resolve();
    addExpenseToCategory.mockReturnValueOnce(promise);

    const { type, payload } = addExpense(categoryId, expense);
    expect(type).toBe(EXPENSE_ADD);
    expect(payload).toBe(promise);
    expect(addExpenseToCategory.mock.calls.length).toBe(1);
    expect(addExpenseToCategory.mock.calls[0][0]).toBe(expense);
  });

  it('updates expense', () => {
    const expense = { name: 'strings' };
    const promise = Promise.resolve();
    updateExpenseCategory.mockReturnValueOnce(promise);

    const { type, payload } = updateExpense(expense);
    expect(type).toBe(EXPENSE_UPDATE);
    expect(payload).toBe(promise);
    expect(updateExpenseCategory.mock.calls.length).toBe(1);
    expect(updateExpenseCategory.mock.calls[0][0]).toBe(expense);
  });

  it('removes expense', () => {
    const promise = Promise.resolve();
    removeExpenseCategory.mockReturnValueOnce(promise);
    const expense = { name: 'cables' };

    const { type, payload } = removeExpense(expense);
    expect(type).toBe(EXPENSE_REMOVE);
    expect(removeExpenseCategory.mock.calls.length).toBe(1);
    expect(removeExpenseCategory.mock.calls[0][0]).toBe(expense);

    return payload.then(deleted => {
      expect(deleted).toBe(expense);
    });
  });
});