import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeExpense, } from './expenseActions';

class ExpenseDisplay extends Component {

  static propTypes = {
    expense: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    removeExpense: PropTypes.func.isRequired,
  };
  
  render() {
    const { expense, onEdit, removeExpense } = this.props;

    return (
      <section>
        <h3>
          <strong>Expense:<br></br> </strong>
        </h3>
        <li>
          {expense.name}<strong> = </strong>${expense.price}
        </li>
        <br></br>
        <button name="Edit" onClick={onEdit}>✎</button>
        <button name="Delete" onClick={() => removeExpense(expense)}>🗑</button>
      </section>
    );
  }
}

export default connect(
  null,
  { removeExpense }
)(ExpenseDisplay);