import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense } from './expenseActions';
import { getExpensesByCategory } from './expenseReducers';
import Expense from './Expense';
import ExpenseForm from './ExpenseForm';

class Expenses extends Component {

  static propTypes = {
    expenses: PropTypes.array,
    categoryId: PropTypes.string,
    addExpense: PropTypes.func,
  };

  handleAddExpense = expense => {
    const { addExpense, categoryId } = this.props;
    addExpense(categoryId, expense);
  };

  render() {
    const { expenses, categoryId } = this.props;
    if(!expenses) return null;
    
    return (
      <ul>
        {expenses &&
        <section>

          {expenses.map(expense => {
            return <Expense key={expense.key} expense={expense}/>;
          })
          }        
        </section>
        }
        <section>
          <h3>Add Expense</h3>
          <ExpenseForm onComplete={this.handleAddExpense} categoryId={categoryId}/>
        </section>
      </ul>
    );
  }
}

export default connect(
  (state, { categoryId }) => ({
    expenses: getExpensesByCategory(state, categoryId)
  }),
  { addExpense }
)(Expenses);