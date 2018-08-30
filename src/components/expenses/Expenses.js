import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense, removeExpense } from './expenseActions';
import { getExpensesByCategory } from './expenseReducers';
import Expense from './Expense';
import ExpensesForm from './ExpensesForm';
// import styles from './Expenses.css';


class Expenses extends Component {

  static propTypes = {
    expenses: PropTypes.array,
    categoryId: PropTypes.string,
    addExpense: PropTypes.func
    // removeExpense: PropTypes.func.isRequired,
  };

  handleAddExpense = expense => {
    const { addExpense, categoryId } = this.props;
    addExpense(categoryId, expense);
  };

  // handleRemoveExpense = expense => {
  //   this.props.removeExpense(expense);
  // };

  render() {
    const { expenses, categoryId } = this.props;
    // console.log('*** expenses disp', categoryId);
    if(!expenses) return null;
    
    return (
      <div>
        <section>
          {expenses.map(expense => <Expense
            key={expense.id}
            expense={expense}
            // onRemove={this.handleRemoveExpense}
          />)}        
        </section>

        <section>
          <h2>Add Expense</h2>
          <ExpensesForm onComplete={this.handleExpenseAdd} label="Add" categoryId={categoryId}/>
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
  { addExpense, removeExpense }
)(Expenses);