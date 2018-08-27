import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExpenseForm from './ExpenseForm';
import ExpenseDisplay from './ExpenseDisplay';

class Expense extends Component {
  state = { 
    editing: false
  };

   static propTypes = {
     expense: PropTypes.object
   };

   handleEdit = () => {
     this.setState({ editing: true });
   };

   // handleComplete = category => {
   //   const { update } = this.props;
   //   update(expense);
   //   this.handleEndEdit();
   // };

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
 
export default Expense;