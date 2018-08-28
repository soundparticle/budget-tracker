import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import ExpenseDisplay from './ExpenseDisplay';
import { updateExpense } from './expenseActions';

class Expense extends Component {
  state = { 
    editing: false
  };

   static propTypes = {
     expense: PropTypes.object,
     updateExpense: PropTypes.func
   };

   handleEdit = () => {
     this.setState({ editing: true });
   };

   handleComplete = expense => {
     const { updateExpense } = this.props;
     updateExpense(expense);
     this.handleEndEdit();
   };

  handleEndEdit = () => {
    this.setState({ editing: false });
  };
  render() { 
    const { editing } = this.state;
    const { expense } = this.props;
    return ( 
      <li>
        {editing
          ? <ExpenseForm
            expense={expense}
            onComplete={this.handleComplete}
            onCancel={this.handleEndEdit}
          />
          : <ExpenseDisplay
            expense={expense}
            onEdit={this.handleEdit}
          />
        }
      </li>
    );
  }
}
 
export default connect(
  null,
  { updateExpense }
)(Expense);