jest.mock('../../services/categoryApi', () => ({
  loadCategories: jest.fn(),
  addCategory: jest.fn(),
  removeCategory: jest.fn()
}));

import { load, add, update, remove, addExpense,  } from './actions';
import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE, EXPENSE_ADD } from './reducers';
import { loadCategories, addCategory } from '../../services/categoryApi';


// Category actions
describe('CRUD category actions', () => {

  it('load', () => {

    const promise = Promise.resolve();
    loadCategories.mockReturnValueOnce(promise);

    const { type, payload } = load();
    expect(type).toBe(CATEGORY_LOAD);
    expect(payload).toBe(promise);
    expect(loadCategories.mock.calls.length).toBe(1);
  });

  it('add', () => {
    const category = { name: 'fuzz' };
    const promise = Promise.resolve();
    addCategory.mockReturnValueOnce(promise);

    const { type, payload } = add(category);
    expect(type).toBe(CATEGORY_ADD);
    expect(payload).toBe(promise);
    expect(addCategory.mock.calls.length).toBe(1);
    expect(addCategory.mock.calls[0][0]).toBe(category);
  });

  it('updates', () => {
    const action = update(4);
    expect(action).toEqual({ type: CATEGORY_UPDATE, payload: 4 });
  });

  it('removes', () => {
    const action = remove('79');
    expect(action).toEqual({ type: CATEGORY_REMOVE, payload: '79' });
  });
});
// Expense actions

describe.skip('Expense actions', () => {

  it('creates an add expense action', () => {
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