jest.mock('../../services/categoryApi', () => ({
  loadCategories: jest.fn(),
  addCategory: jest.fn(),
  updateCategory: jest.fn(),
  removeCategory: jest.fn(),
}));

import { load, add, update, remove, addExpense,  } from './actions';
import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE, EXPENSE_ADD } from './reducers';
import { loadCategories, addCategory, removeCategory, updateCategory } from '../../services/categoryApi';


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

  it.skip('creates an add expense action', () => {
    const parentId = 80;
    const data = { name: 'shoes', price: 60 };

    const { type } = addExpense(parentId, data);
    // console.log('*** EXPENSE_Add', EXPENSE_Add);
    expect(type).toBe(EXPENSE_ADD);

    
    
    
    
    // const { categoryId, expense } = payload;
    // expect(categoryId).toBe(parentId);

    // const { id, timestamp, name, price } = expense;
    // expect(id).toBeTruthy();
    // expect(expense.categoryId).toBe(parentId);
    // expect(timestamp).toBeTruthy();
    // expect(name).toBe(data.name);
    // expect(price).toBe(data.price);
  });
});