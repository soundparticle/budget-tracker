import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove } from './expenseActions';

class ExpenseDisplay extends Component {

  static  propTypes = {
    expense: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
  };

  render() { 
    const { expense, onEdit, remove } = this.props;
    return ( 
      <section className="expense-display">
        <h3>{expense.name}</h3>
        <p>{expense.price}</p>
        <p>{expense.timestamp}</p>
        <button name="edit" onClick={onEdit}>✎</button>
        <button name="delete" onClick={() => remove(expense)}>🗑</button>
      </section>
    );
  }
}
 
export default connect(
  null,
  { remove }
)(ExpenseDisplay);