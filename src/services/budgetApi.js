import { put, post, get, del } from './request';

const URL = 'https://budget-tracker-f739a.firebaseio.com';
const CATEGORIES_URL = `${URL}/categories`;
// const EXPENSES_URL = `${CATEGORIES_URL}`;

const getCategoryUrl = key => `${CATEGORIES_URL}/${key}.json`;
// const getExpenseUrl = key => `${EXPENSES_URL}/${key}/expenses.json`;

export const getCategories = () => {
  return get(`${CATEGORIES_URL}.json`)
    .then(response => {
      return response
        ? Object.keys(response).map(key => {
          const each = response[key];
          each.key = key;
          return each;
        })
        : [];
    });
};

export const addCategory =  (category) => {
  const url = `${CATEGORIES_URL}.json`;
  return post(url, category)
    .then(res => {
      category.key = res.name;
      return category;
    });
};

export const updateCategory = category => {
  const url = getCategoryUrl(category.key);
  return put(url, category);
};

export const removeCategory = id => {
  const url = getCategoryUrl(id);
  return del(url);
};

// export const addExpense =