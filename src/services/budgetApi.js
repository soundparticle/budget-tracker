import { put, post, get, del } from './request';

const URL = 'https://budget-tracker-f739a.firebaseio.com';
const CATEGORIES_URL = `${URL}/categories`;

const getCategoryUrl = key => `${CATEGORIES_URL}/${key}.json`;
const getExpenseUrl = (key, expenseKey) => `${CATEGORIES_URL}/${key}/expenses/${expenseKey}.json`;

const transformToArray = obj => {
  if(!obj) return [];
  return Object.keys(obj).map(key => {
    const each = obj[key];
    each.key = key;
    return each;
  });
};

export const getCategories = () => {
  return get(`${CATEGORIES_URL}.json`)
    .then(response => {
      const categories = transformToArray(response);
      console.log('budgetApi categories', categories);
      categories.forEach(category => category.expenses = transformToArray(category.expenses));
      return categories;
    });
};

export const addCategory = category => {
  if(category.name === 'error') {
    return Promise.reject('This is an error');
  }
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

export const addExpense = expense => {
  const url = `${CATEGORIES_URL}/${expense.categoryId}/expenses.json`;
  return post(url, expense)
    .then(res => {
      expense.key = res.name;
      return expense;
    });
};

export const updateExpense = expense => {
  const url = getExpenseUrl(expense.categoryId, expense.key);
  return put(url, expense);
};

export const removeExpense = expense => {
  const url = getExpenseUrl(expense.categoryId, expense.key);
  return del(url);
};