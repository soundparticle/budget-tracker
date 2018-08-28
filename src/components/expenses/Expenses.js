import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import Expense from './Expense';
import { getExpensesByCategoryId } from '../expenses/expensesReducers';
import { addExpense } from '../expenses/expenseActions';

class Expenses extends Component {

  static propTypes = {
    expenses: PropTypes.array,
    categoryId: PropTypes.string,
    addExpense: PropTypes.func.isRequired
  };

  handleAddExpense = expense => {
    const { addExpense, categoryId } = this.props;
    addExpense(categoryId, { ...expense });
  };

  render() { 
    const { expenses } = this.props;
    if(!expenses) return;
    return ( 
      <ul>
        <section className="expense-form">
          <h3>Add an expense</h3>
          <ExpenseForm onComplete={this.handleAddExpense}/>
        </section>
        <section>
          {expenses.map(expense => {
            return <Expense key={expense.key} expense={expense}/>;
          })
          }
        </section>
      </ul>
    );
  }
}
 
export default connect(
  (state, { categoryId }) => ({
    expenses: getExpensesByCategoryId(state, categoryId)
  }),
  { addExpense }
)(Expenses);