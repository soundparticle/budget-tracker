import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_UPDATE, CATEGORY_REMOVE } from './reducers';
import { EXPENSE_ADD } from './reducers';

import { loadCategories, postExpense } from '../../services/categoryApi';

// import CatData from '../categories/categories-data';
import shortid from 'shortid';

export const load = () => ({
  type: CATEGORY_LOAD, 
  payload: loadCategories()
});

export const add = category => {
  category.id = shortid.generate();
  category.timestamp = new Date();
  return {
    type: CATEGORY_ADD,
    payload: category
  };
};

export const update = category => ({
  type: CATEGORY_UPDATE,
  payload: category
});

export const remove = id => ({
  type: CATEGORY_REMOVE,
  payload: id
});

export const addExpense = expense => dispach => {
  postExpense(expense)
    .then(
      saved => {
        dispach({
          type: EXPENSE_ADD,
          payload: JSON.parse(saved.text)
        });
      },
      err => {
        dispach({
          type: Error,
          payload: err
        });
      });
};