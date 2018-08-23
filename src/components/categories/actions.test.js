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
    const action
    expect()
  })

});