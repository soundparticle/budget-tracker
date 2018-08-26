export const CATEGORY_LOAD = 'CATEGORY_LOAD';
export const CATEGORY_ADD = 'CATEGORY_ADD';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const CATEGORY_REMOVE = 'CATEGORY_REMOVE';

export const EXPENSE_ADD = 'EXPENSE_ADD';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';
export const EXPENSE_DELETE = 'EXPENSE_DELETE';

export const getCategories = state => state.categories;
export const getExpenses = state => state.expensesByCategory;
export const getExpensesByCategory = (state, categoryId) => getExpenses(state)[categoryId];

export function categories(state = [], { type, payload }) {
  switch(type) {
    case CATEGORY_LOAD:
      return payload;
    case CATEGORY_ADD:
      return [
        ...state,
        payload
      ];
    case CATEGORY_UPDATE:
      return state.map(category => category.id === payload.id ? payload : category);
    case CATEGORY_REMOVE:
      return state.filter(category => category.id !== payload);
    default:
      return state;
  }
}
// Expenses by Category
export function expensesByCategory(state = {}, { type, payload }) {
  switch(type) {
    case CATEGORY_LOAD:
      return payload.reduce((map, category) => {
        map[category.id] = category.expenses;
        return map;
      }, {});
    case CATEGORY_ADD:
      return {
        ...state,
        [payload.id]: []
      };
    case CATEGORY_REMOVE: {
      const copy = { ...state };
      delete copy[payload.id];
      return copy;
    }
    case EXPENSE_ADD: {
      return {
        ...state,
        [payload.categoryId]: [
          ...state[payload.categoryId],
          payload
        ]
      };
    }
    case EXPENSE_UPDATE: {
      const copy = { ...state };
      const update = copy[payload.categoryId].map(expense => expense.id === payload.id ? payload : expense);
      copy[payload.categoryId] = update;
      return copy;
    }
    case EXPENSE_DELETE: {
      const copy = { ...state };
      const update = copy[payload.categoryId].filter(expense => expense.id !== payload.id);
      copy[payload.categoryId] = update;
      return copy;
    }
    default:
      return state;
  }
}