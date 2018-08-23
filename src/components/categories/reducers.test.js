import {
  categories,
  CATEGORY_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE
} from './reducers';

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
    const category1 = { key: '1', name: 'a' };
    const category2 = { key: '2', name: 'b' };
    const category3 = { key: '3', name: 'c' };

    const updated = { key: '2', name: 'f' };

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
    const category1 = { key: '1', name: 'a' };
    const category2 = { key: '2', name: 'b' };
    const category3 = { key: '3', name: 'c' };
    
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