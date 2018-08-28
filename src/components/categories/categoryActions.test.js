import { load, add, remove, update } from './categoryActions';
import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_REMOVE, CATEGORY_UPDATE } from './categoriesReducers';

describe('category actions', () => {

  it('loads', () => {
    const action = load();

    expect(action.type).toEqual(CATEGORY_LOAD);
  });

  it('adds', () => {
    const category = {};
    const action = add(category);

    expect(action).toEqual({
      type: CATEGORY_ADD,
      payload: category
    });
  });

  it('updates', () => {
    const category = {};
    const action = update(category);

    expect(action).toEqual({
      type: CATEGORY_UPDATE,
      payload: category
    });
  });

  it('removes', () => {
    const key = '123';
    const action = remove(key);

    expect(action).toEqual({
      type: CATEGORY_REMOVE,
      payload: key
    });
  });
});