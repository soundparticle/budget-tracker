import {
  categories,
  CATEGORY_LOAD,
  CATEGORY_ADD,
  CATEGORY_UPDATE,
  CATEGORY_REMOVE
} from './reducers';

describe('categories reducers', () => {

  it('initializes to empty array', () => {
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

  it('adds categories', () => {
    const category1 = { name: '1' };
    const category2 = { name: '2' };
    const category3 = { name: '3' };

    const state = categories([category1, category2], {
      type: CATEGORY_ADD,
      payload: category3
    });

    expect(state).toEqual([category1, category2, category3]);
  });

  it('updates category', () => {
    const category1 = { key: 'a', name: '1' };
    const category2 = { key: 'b', name: '2' };
    const category3 = { key: 'c', name: '3' };

    const updated = { key: 'b', name: '182' };

    const state = categories([category1, category2, category3], {
      type: CATEGORY_UPDATE,
      payload: updated
    });

    expect(state).toEqual([category1, updated, category3]);
  });

  it('removes category', () => {
    const category1 = { key: 'a', name: '1' };
    const category2 = { key: 'b', name: '2' };
    const category3 = { key: 'c', name: '3' };

    const state = categories([category1, category2, category3], {
      type: CATEGORY_REMOVE,
      payload: 'b'
    });

    expect(state).toEqual([category1, category3]);
  });
});