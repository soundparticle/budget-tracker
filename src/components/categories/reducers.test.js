import {
  categories,
  CATEGORY_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE,
  expensesByCategory,
  EXPENSE_ADD,
  EXPENSE_UPDATE,
  EXPENSE_DELETE
} from './reducers';

// categories reducers
describe('categories reducers', () => {

  it('initialize to empty array', () => {
    const state = categories(undefined, {});
    expect(state).toEqual([]);
  });

  it('loads categories', () => {
    const payload = [{}, {}, {}];

    const state = categories([], {
      type: CATEGORY_LOAD,
      payload
    });

    expect(state).toBe(payload);
  });

  it('adds a category', () => {
    const category1 = { name: '1' };
    const category2 = { name: '2' };
    const category3 = { name: '3' };

    const state = categories([category1, category2], {
      type: CATEGORY_ADD,
      payload: category3
    });

    expect(state).toEqual([category1, category2, category3]);
  });

  it('update category', () => {
    const category1 = { id: '1', name: 'a' };
    const category2 = { id: '2', name: 'b' };
    const category3 = { id: '3', name: 'c' };

    const updated = { id: '2', name: 'f' };

    const state = categories([category1, category2, category3], {
      type: CATEGORY_UPDATE,
      payload: updated
    });

    expect(state).toEqual([
      category1,
      updated,
      category3
    ]);
  });

  it('remove category', () => {
    const category1 = { id: '1', name: 'a' };
    const category2 = { id: '2', name: 'b' };
    const category3 = { id: '3', name: 'c' };
    
    const state = categories([category1, category2, category3], {
      type: CATEGORY_REMOVE,
      payload: '2'
    });

    expect(state).toEqual([
      category1,
      category3
    ]);
  });
});
// expenses reducers
describe('expenses by category reducers', () => {

  const expense1 = {
    id: 100,
    categoryId: 10,
    name: 'dvd',
    price: 30
  };

  const expense2 = {
    id: 10,
    categoryId: 10,
    name: 'fuzz',
    price: 90
  };

  it('initialize to empty object', () => {
    const state = expensesByCategory(undefined, {});
    expect(state).toEqual({});
  });

  it('adds an expense sub-category to category', () => {
    const state = expensesByCategory({}, { type: CATEGORY_ADD, payload: { id: 10 } });
    expect(state).toEqual({ 10: [] });
  });
  
  it('Loads expenses', () => {
    const state = expensesByCategory({}, {
      type: CATEGORY_LOAD,
      payload: [{
        id: 10,
        expenses: [expense1]
      },
      {
        id: 100,
        expenses: [expense2]
      }]
    });
    expect(state).toEqual({ 10: [expense1], 100: [expense2] });
  });

  it('Removes an expense when containing category is removed', () => {
    const state = expensesByCategory({  10: [], 100: [] }, { type: CATEGORY_REMOVE, payload: { id: 10 } });
    expect(state).toEqual({ 100: [] });
  });

  it('Adds an expense to a category', () => {
    const state = expensesByCategory({ 10: [expense1] }, {
      type:EXPENSE_ADD,
      payload: {
        categoryId: 10,
        ...expense2
      }
    });
    expect(state).toEqual({ 10: [expense1, expense2] });
  });

  it('Updates an expense', () => {
    const state = expensesByCategory(
      { 10: [{ id: 100, name: 'cd', price: 20 }] },
      { type: EXPENSE_UPDATE, payload: { categoryId: 10, id: 100, name: 'cd', price: 90 } });
    expect(state).toEqual({ 10: [{ categoryId: 10, id: 100, name: 'cd', price: 90 }] });
  });

  it('Deletes an expense', () => {
    const state = expensesByCategory(
      { 10: [expense1, expense2] },
      { type: EXPENSE_DELETE, payload: expense2 });
    expect(state).toEqual({ 10: [expense1] });
  });
});