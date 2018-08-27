import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class ExpenseDisplay extends Component {

  static  propTypes = {
    expense: PropTypes.object,
    onEdit: PropTypes.func,

  }
  render() { 
    const { expense, onEdit } = this.props;
    return ( 
      <section className="expense-display">
        <h3>{expense.name}</h3>
        <p>{expense.budget}</p>
        <p>{expense.timestamp}</p>
        <button name="edit" onClick={onEdit}>✎</button>
      </section>
    );
  }
}
 
export default connect(
  null,
  {}
)(ExpenseDisplay);