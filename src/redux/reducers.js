export const CATEGORY_LOAD = 'CATEGORY_LOAD';
export const CATEGORY_ADD = 'CATEGORY_ADD';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const CATEGORY_REMOVE = 'CATEGORY_REMOVE';
export const EXPENSE_ADD = 'EXPENSE_ADD';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';
export const EXPENSE_REMOVE = 'EXPENSE_REMOVE';

//selector
export const getCategories = state => state.categories;

export function categories(state = [], { type, payload }) {
  switch(type) {
    case CATEGORY_LOAD:
      return payload;

    case CATEGORY_ADD:
      return [...state, payload];
      
    case CATEGORY_UPDATE:
      return state.map(category => category.key === payload.key ? payload : category);

    case CATEGORY_REMOVE:
      return state.filter(category => category.key !== payload);

    default:
      return state;
  }
}

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
      delete newState[payload.key];
      return newState;
    }

    case EXPENSE_ADD: {
      return {
        ...state,
        [payload.categoryId]: [...state[payload.categoryId], payload.expense]
      };
    }

    case EXPENSE_UPDATE: {
      const newState = { ...state };
      const update = newState[payload.categoryId].map(expense => expense.key === payload.key ? payload : expense);
      newState[payload.categoryId] = update;
      return newState;
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