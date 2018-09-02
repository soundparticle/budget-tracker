import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense } from './expenseActions';
import { getExpensesByCategory } from './expenseReducers';
import Expense from './Expense';
import ExpenseForm from './ExpenseForm';
// import styles from './Expenses.css';


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
      <div>
        <section>
          {expenses.map(expense => <Expense
            key={expense.id}
            expense={expense}
          />)}        
        </section>

        <section>
          <h3>Add Expense</h3>
          <ExpenseForm onComplete={this.handleAddExpense} categoryId={categoryId}/>
        </section>
      </div>
    );
  }
}

export default connect(
  (state, { categoryId }) => {
    return {
      expenses: getExpensesByCategory(state, categoryId)
    };
  },
  { addExpense }
)(Expenses);