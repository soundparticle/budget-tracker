import { load, add, remove } from './actions';
import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_REMOVE } from './reducers';

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

  it('removes', () => {
    const key = '123';
    const action = remove(key);

    expect(action).toEqual({
      type: CATEGORY_REMOVE,
      payload: key
    });
  });
});