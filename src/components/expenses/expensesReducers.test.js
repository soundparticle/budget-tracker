import { 
  expensesByCategory, 
  EXPENSE_ADD, 
  EXPENSE_UPDATE, 
  EXPENSE_REMOVE 
} from '../expenses/expensesReducers';

import { 
  CATEGORY_LOAD, 
  CATEGORY_ADD, 
  CATEGORY_REMOVE 
} from '../categories/categoriesReducers';

describe('Expenses reducers', () => {

  const expense1 = {
    key: '456',
    categoryId: '123',
    name: 'coconut oil',
    price: 200
  };

  const expense2 = {
    key: '123',
    categoryId: '123',
    name: 'peppermint oil',
    price: 150
  };

  it('initializes as empty object', () => {
    const state = expensesByCategory(undefined, {});
    expect(state).toEqual({});
  });

  it('adds entry for CATEGORY_ADD', () => {
    const state = expensesByCategory({}, { type: CATEGORY_ADD, payload: { key: '123' } });
    expect(state).toEqual({ '123': [] });
  });

  it('loads expenses', () => {
    const state = expensesByCategory({}, {
      type: CATEGORY_LOAD,
      payload: [{
        key: '123',
        expenses:[expense1]
      },
      {
        key: '456',
        expenses: [expense2]
      }]
    });
    expect(state).toEqual({ '123': [expense1], '456': [expense2] });
  });

  it('removes entry on CATEGORY_REMOVE', () => {
    const state = expensesByCategory({ '123': [], '456': [] }, { type: CATEGORY_REMOVE, payload: { key: '123' } });
    expect(state).toEqual({ '456': [] });
  });

  it('add an expense', () => {
    const state = expensesByCategory({ '123': [expense1] }, {
      type: EXPENSE_ADD,
      payload: { categoryId: '123', ...expense2 }
    });
    expect(state).toEqual({ '123': [expense1, expense2] });
  });

  it('updates an expense', () => {
    const state = expensesByCategory(
      { '123': [{ key: '456', name: 'item', price: 10 }] },
      { type: EXPENSE_UPDATE, payload: { categoryId: '123', key: '456', name: 'fish oil', price: 15 } }
    );
    expect(state).toEqual({ '123': [{ categoryId: '123', key: '456', name: 'fish oil', price: 15 }] });
  });

  it('removes an expense', () => {
    const state = expensesByCategory(
      { '123': [expense1, expense2] },
      { type: EXPENSE_REMOVE, payload: expense1 }
    );
    expect(state).toEqual({ '123': [expense2] });
  });
});