import { put, post, get, del } from './request';

const URL = 'https://budget-tracker-5bf52.firebaseio.com/';
const CATEGORY_URL = `${URL}/categories`;

const getCategoryUrl = key => `${CATEGORY_URL}/${key}.json`;
const getExpenseUrl = (key, expenseKey) => `${CATEGORY_URL}/${key}/expenses/${expenseKey}.json`;

const transformToArray = obj => {
  if(!obj) return [];
  return Object.keys(obj).map(key => {
    const each = obj[key];
    each.key = key;
    return each;
  });
};

export const loadCategories = () => {
  return get(`${CATEGORY_URL}.json`)
    .then(response => {
      const categories = transformToArray(response);
      categories.forEach(category => category.expenses = transformToArray(category.expenses));
      return categories;
    });
};

export const addCategory = category => {
  if(category.name === 'error') {
    return Promise.reject('This is an error');
  }

  const url = `${CATEGORY_URL}.json`;
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

export const addExpenseToCategory = expense => {
  const url = `${CATEGORY_URL}/${expense.categoryId}/expenses.json`;
  return post(url, expense)
    .then(res => {
      expense.key = res.name;
      return expense;
    });
};
export const updateExpenseCategory = expense => {
  const url = getExpenseUrl(expense.categoryId, expense.key);
  return put(url, expense);
};

export const removeExpenseCategory = expense => {
  const url = getExpenseUrl(expense.categoryId, expense.key);
  return del(url);
};