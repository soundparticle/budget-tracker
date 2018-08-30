import React, { Component } from 'react';
import PropTypes from 'react-redux';
import { connect } from 'react-redux';
import { removeExpense, } from './expenseActions';

class ExpenseDisplay extends Component {

  static propTypes = {
    // TODO fix this proptype error

    expense: PropTypes.object,
    onEdit: PropTypes.func,
    removeExpense: PropTypes.func
  };
  
  render() {
    const { expense, onEdit, removeExpense } = this.props;
    console.log('** expense', expense);

    return (
      <p>
        <strong>Expense:</strong>{expense.name}<strong>Price:</strong>${expense.price}
        <button name="Edit" onClick={onEdit}>✎</button>
        <button name="Delete" onClick={() => removeExpense(expense)}>🗑</button>
      </p>
    );
  }
}

export default connect(
  null,
  { removeExpense }
)(ExpenseDisplay);