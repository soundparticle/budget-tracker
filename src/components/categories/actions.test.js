import { load, add, update, remove, addExpense } from './actions';
import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE, EXPENSE_ADD } from './reducers';
import CatData from './categories-data';

// Category actions
describe('CRUD category actions', () => {

  it('load', () => {

    const action = load();
    expect(action).toEqual({ type: CATEGORY_LOAD, payload: CatData });
  });

  it('add', () => {
    const payload = {};
    const action = add(payload);
    expect(action).toEqual({ type: CATEGORY_ADD, payload: payload });
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