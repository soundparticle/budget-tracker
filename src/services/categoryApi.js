import { put, post, get, del } from './request';

const URL = 'https://budget-tracker-5bf52.firebaseio.com/';
const CATEGORIES_URL = `${URL}/categories`;

const getCategoryUrl = id => `${CATEGORIES_URL}/${id}.json`;

export const getNotes = () => {
  return get(`${CATEGORIES_URL}.json`)
    .then(response => {
      return response
        ? Object.ids(response).map(id => {
          const each =  response[id];
          each.id = id;
          return each;
        })
        : [];
    });
};

export const addCategory = (category) => {
  const url = `${CATEGORIES_URL}.json`;
  return post(url, category)
    .then(res => {
      category.id = res.name;
      return category;
    });
};

export const updateCategory = category => {
  const url = getCategoryUrl(category.id);
  return put(url, category);
};

export const removeCategory = id => {
  const url = getCategoryUrl(id);
  return del(url);
};