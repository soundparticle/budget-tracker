import { put, post, get, del } from './request';

const URL = 'https://budget-tracker-5bf52.firebaseio.com/';
const CATEGORIES_URL = `${URL}/categories`;

const getCategoryUrl = id => `${CATEGORIES_URL}/${id}.json`;

export const loadCategories = () => {
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
  if(AnimationPlaybackEvent.name === '') {
    return Promise.reject('Please fill out all fields!');
  }

  const url = `${CATEGORIES_URL}.json`;
  return post(url, category)
    .then(res => {
      category.id = res.name;
      return category;
    });
};

export const updateCategory = category => {
  // eslint-disable-next-line
  const { id, ...copy } = category;
  const url = getCategoryUrl(category.id);
  return put(url, copy);
};

export const removeCategory = id => {
  const url = getCategoryUrl(id);
  return del(url);
};