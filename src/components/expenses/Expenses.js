import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getExpensesByCategory } from '../categories/reducers';
import ExpenseDisplay from './ExpenseDisplay';
import ExpensesForm from './ExpensesForm';
import { addExpense, removeExpense } from '../categories/actions';
// import styles from './Expenses.css';


export class Expenses extends Component {

  static propTypes = {
    categoryId: PropTypes.string.isRequired,
    expenses: PropTypes.array,
    addExpense: PropTypes.func.isRequired,
    removeExpense: PropTypes.func.isRequired,
  };

  handleAddExpense = data => {
    this.props.addExpense(data);
    // addExpense(categoryId, expense);
  };

  handleRemoveExpense = expense => {
    this.props.removeExpense(expense);
  };

  render() {
    const { expenses, categoryId } = this.props;
    if(!expenses) return null;

    return (
      <div>
        <h2>Expenses:</h2>
        <ExpensesForm onComplete={this.handleExpenseAdd} label="Add" categoryId={categoryId}/>
        <ul>
          {expenses.map(expense => <ExpenseDisplay
            key={expense.id}
            expense={expense}
            onRemove={this.handleRemoveExpense}
          />)}
        </ul>
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