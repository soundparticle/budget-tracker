import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_REMOVE, } from './reducers';
import data from './category-data';
import shortid from 'shortid';

export const load = () => ({
  type: CATEGORY_LOAD,
  payload: data
});

export const add = category => {
  category.key = shortid.generate();
  return {
    type: CATEGORY_ADD,
    payload: category
  };
};

export const remove = key => ({
  type: CATEGORY_REMOVE,
  payload: key
});