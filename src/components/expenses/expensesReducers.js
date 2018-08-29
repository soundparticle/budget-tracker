import { CATEGORY_LOAD, CATEGORY_ADD, CATEGORY_REMOVE } from '../categories/categoriesReducers';
export const EXPENSE_ADD = 'EXPENSE_ADD';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';
export const EXPENSE_REMOVE = 'EXPENSE_REMOVE';

//selector
export const getExpensesByCategories = state => state.expensesByCategory;
export const getExpensesByCategoryId = (state, categoryId) => getExpensesByCategories(state)[categoryId];

export function expensesByCategory(state = {}, { type, payload }) {

  switch(type) {
    case CATEGORY_LOAD:
      return payload.reduce((map, category) => {
        map[category.key] = category.expenses;
        return map;
      }, {});

    case CATEGORY_ADD:
      return {
        ...state,
        [payload.key]: []
      };

    case CATEGORY_REMOVE: {
      const newState = { ...state };
      delete newState[payload.key];//key?
      return newState;
    }

    case EXPENSE_ADD: 
      console.log('EXPENSE_ADD', state);
      console.log('payload', payload);
      return {
        ...state,
        [payload.categoryId]: [
          ...state[payload.categoryId], 
          payload
        ]//payload.expense?
      };

    case EXPENSE_UPDATE: {
      return {
        ...state,
        [payload.categoryId]: state[payload.categoryId].map(expense => expense.key === payload.key ? payload : expense)
      };
    }

    case EXPENSE_REMOVE: {
      const newState = { ...state };
      const update = newState[payload.categoryId].filter(expense => expense.key !== payload.key);
      newState[payload.categoryId] = update;
      return newState;
    }

    default:
      return state;
  }
}