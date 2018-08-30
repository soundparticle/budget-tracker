import { put, post, get, del } from './request';

const URL = 'https://budget-tracker-5bf52.firebaseio.com/';
const CATEGORY_URL = `${URL}/categories`;

const getCategoryUrl = key => `${CATEGORY_URL}/${key}.json`;

// const pivot = obj => {
//   if(!obj) return [];

//   return Object.keys(obj).map(key => {
//     const each = obj[key];
//     each.key = key;
//     return each;
//   });
// };

export const loadCategories = () => {
  return get(`${CATEGORY_URL}.json`)
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
  if(category.name === 'van') {
    return Promise.reject('Unreasonable Category');
  }

  const url = `${CATEGORY_URL}.json`;
  return post(url, category)
    .then(res => {
      category.key = res.name;
      return category;
    });
};

export const updateCategory = category => {
  //eslint-disable-next-line
  const { key, ...copy } = category;
  const url = getCategoryUrl(category.key);
  return put(url, copy);
};

export const removeCategory = id => {
  const url = getCategoryUrl(id);
  return del(url);
};

export const addExpenseToCategory = (categoryId, expense) => {
  const url = `${CATEGORY_URL}/${categoryId}/expenses.json`;
  return post(url, expense)
    .then(res => {
      expense.id = res.name;
      return expense;
    });
};
export const updateExpenseCategory = (categoryId, expense) => {
  const url = `${CATEGORY_URL}/${categoryId}/expenses/${expense.id}.json`;
  return put(url, expense)
    .then(res => {
      categoryId = res.name;
      return expense;
    });
};

export const removeExpenseCategory = (categoryId, expenseKey) => {
  const url = `${CATEGORY_URL}/${categoryId}/expenses/${expenseKey}.json`;
  return del(url, expenseKey);
};