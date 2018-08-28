import { addExpense, updateExpense, removeExpense } from './expenseActions';
import { EXPENSE_ADD, EXPENSE_UPDATE, EXPENSE_REMOVE } from './expensesReducers';

describe('expense actions', () => {

  it('adds expense', () => {
    const payload = {};
    const categoryId = '12323';
    const action = {
      type: EXPENSE_ADD,
      payload
    };

    expect(addExpense(categoryId, payload).type).toEqual(action.type);
  });

  it('updates expense', () => {
    const payload = {};
    const action = {
      type: EXPENSE_UPDATE,
      payload
    };
    expect(updateExpense(payload).type).toEqual(action.type);
  });

  it('removes expense', () => {
    const payload = {};
    const action = {
      type: EXPENSE_REMOVE,
      payload
    };
    expect(removeExpense(payload).type).toEqual(action.type);
  });
});