import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense, removeExpense } from '../categories/actions';
import { getExpensesByCategory } from '../categories/reducers';
import Expense from './Expense';
import ExpensesForm from './ExpensesForm';
// import styles from './Expenses.css';


export class Expenses extends Component {

  static propTypes = {
    categoryId: PropTypes.string.isRequired,
    expenses: PropTypes.array,
    addExpense: PropTypes.func.isRequired,
    // removeExpense: PropTypes.func.isRequired,
  };

  handleAddExpense = expense => {
    const { addExpense, categoryId } = this.props;
    addExpense(categoryId, expense);
  };

  // handleRemoveExpense = expense => {
  //   this.props.removeExpense(expense);
  // };

  render() {
    const { expenses, categoryId } = this.props;
    // console.log('*** expenses disp', categoryId);
    if(!expenses) return null;
    
    return (
      <div>
        <section>
          {expenses.map(expense => <Expense
            key={expense.id}
            expense={expense}
            // onRemove={this.handleRemoveExpense}
          />)}        
        </section>

        <section>
          <h2>Add Expense</h2>
          <ExpensesForm onComplete={this.handleExpenseAdd} label="Add" categoryId={categoryId}/>
        </section>
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