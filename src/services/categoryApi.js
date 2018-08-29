import { put, post, get, del } from './request';

const URL = 'https://budget-tracker-5bf52.firebaseio.com/';
const CATEGORIES_URL = `${URL}/categories`;

const getCategoryUrl = id => `${CATEGORIES_URL}/${id}.json`;

const pivot = obj => {
  if(!obj) return [];

  return Object.keys(obj).map(key => {
    const each = obj[key];
    each.key = key;
    return each;
  });
};

export const loadCategories = () => {
  return get(`${CATEGORIES_URL}.json`)
    .then(response => {
      const categories = pivot(response);
      categories.forEach(category => {
        category.expenses = pivot(category.expenses);
      });
      return categories;        
    });
};
//category service methods
export const addCategory = (category) => {
  if(category.name === '') {
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
  const { key, ...copy } = category;
  const url = getCategoryUrl(category.key);
  return put(url, copy);
};

export const removeCategory = id => {
  const url = getCategoryUrl(id);
  return del(url);
};
// Expense service methods