import React, { Component } from 'react';
import PropTypes from 'react-redux';
import { connect } from 'react-redux';
import { removeExpense, } from './expenseActions';

class ExpenseDisplay extends Component {

  static propTypes = {
    expense: PropTypes.object,
    onEdit: PropTypes.func,
    remove: PropTypes.func
  };

  render() {
    const { expense, onEdit, remove } = this.props;

    return (
      <p>
        <strong text-transformation="capitalize">Expense:</strong> {expense.name} <strong>Price:</strong> ${expense.price}
        <button name="Edit" onClick={onEdit}>✎</button> 
        <button name="Delete" onClick={() => remove(expense)}>🗑</button>
      </p>
    );
  }
}

export default connect(
  null, 
  { removeExpense }
)(ExpenseDisplay);
