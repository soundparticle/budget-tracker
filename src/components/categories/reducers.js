export const CATEGORY_LOAD = 'CATEGORY_LOAD';
export const CATEGORY_ADD = 'CATEGORY_ADD';
export const CATEGORY_UPDATE = 'CATEGORY_UPDATE';
export const CATEGORY_REMOVE = 'CATEGORY_REMOVE';

export const EXPENSE_ADD = 'EXPENSE_ADD';
export const EXPENSE_UPDATE = 'EXPENSE_UPDATE';
export const EXPENSE_REMOVE = 'EXPENSE_REMOVE';

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
      return state.map(category => category.key === payload.key ? payload : category);
    case CATEGORY_REMOVE:
      return state.filter(category => category.key !== payload);
    default:
      return state;
  }
}

export function expenses(state = [], { type, payload }) {
  switch(type) {
    case EXPENSE_LOAD:
      return payload;
    case EXPENSE_ADD:
      return [
        ...state,
        payload
      ];
    case EXPENSE_UPDATE:
      return state.map(expense => expense.key === payload.key ? payload : expense);
    case EXPENSE_REMOVE:
      return state.filter(expense => expense.key !== payload);
    default:
      return state;
  }
}