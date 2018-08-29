import { 
  CATEGORY_LOAD, 
  CATEGORY_ADD, 
  CATEGORY_REMOVE, 
  CATEGORY_UPDATE
} from './categoriesReducers';

import { getCategories, addCategory, updateCategory, removeCategory } from '../../services/budgetApi';
// import shortid from 'shortid';

export const load = () => ({
  type: CATEGORY_LOAD,
  payload: getCategories()
});

export const add = category => {
  // category.key = shortid.generate();
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