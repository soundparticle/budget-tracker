import React, { Component } from 'react';
import PropTypes from 'react-redux';
import { connect } from 'react-redux';
import { removeExpense } from '../categories/actions';

class ExpenseDisplay extends Component {

  static propTypes = {
    expense: PropTypes.object,
    onEdit: PropTypes.func,
    removeExpense: PropTypes.func
  };

  render() {
    console.log('** expense', expense);
    const { expense, onEdit, removeExpense } = this.props;

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