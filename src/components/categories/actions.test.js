import { load, add, update, remove } from './actions';
import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE } from './reducers';
import data from './categories-data';


describe('CRUD category actions', () => {

  it('load', () => {

    const action = load();
    expect(action).toEqual({ type: CATEGORY_LOAD, payload: data });
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