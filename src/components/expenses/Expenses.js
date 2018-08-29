import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import Expense from './Expense';
import { getExpensesByCategoryId } from '../expenses/expensesReducers';
import { add } from '../expenses/expenseActions';

class Expenses extends Component {

  static propTypes = {
    expenses: PropTypes.array,
    categoryId: PropTypes.string,
    add: PropTypes.func.isRequired
  };

  handleAddExpense = expense => {
    const { add, categoryId } = this.props;
    console.log('in exoenses', { ...expense });
    add(categoryId, expense);
  };

  render() { 
    const { expenses, categoryId } = this.props;
    return ( 
      <ul>
        <section className="expense-form">
          <h3>Add an expense</h3>
          <ExpenseForm categoryId={categoryId} onComplete={this.handleAddExpense}/>
        </section>
        {expenses && 
        <section>

          {expenses.map(expense => {
            return <Expense key={expense.key} expense={expense}/>;
          })
          }
        </section>
        }
      </ul>
    );
  }
}
 
export default connect(
  (state, { categoryId }) => ({
    expenses: getExpensesByCategoryId(state, categoryId)
  }),
  { add }
)(Expenses);