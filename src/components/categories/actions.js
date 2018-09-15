import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE } from './reducers';
import { loadCategories, addCategory, removeCategory, updateCategory, } from '../../services/categoryApi';

export const load = () => ({
  type: CATEGORY_LOAD,
  payload: loadCategories()
});

export const add = category => {
  category.timestamp = (new Date()).toLocaleString();
  return {
    type: CATEGORY_ADD,
    payload: addCategory(category)
  };
};

export const update = category => ({
  type: CATEGORY_UPDATE,
  payload: updateCategory(category)
});

export const remove = key => ({
  type: CATEGORY_REMOVE,
  payload: removeCategory(key).then(() => key)
});
