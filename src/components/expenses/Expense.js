import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import ExpenseDisplay from './ExpenseDisplay';
import { update } from './expenseActions';

class Expense extends Component {
  state = { 
    editing: false
  };

   static propTypes = {
     expense: PropTypes.object,
     update: PropTypes.func
   };

   handleEdit = () => {
     this.setState({ editing: true });
   };

   handleComplete = expense => {
     const { update } = this.props;
     update(expense);
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
            categoryId={expense.categoryId}
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
  { update }
)(Expense);