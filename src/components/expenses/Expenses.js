import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExpense } from './expenseActions';
import { getExpensesByCategory } from './expenseReducers';
import Expense from './Expense';
import ExpenseForm from './ExpenseForm';

import styles from './Expenses.css';

class Expenses extends Component {

  static propTypes = {
    expenses: PropTypes.array,
    categoryId: PropTypes.string,
    addExpense: PropTypes.func,
  };

  handleAddExpense = expense => {
    const { addExpense, categoryId } = this.props;
    addExpense(categoryId, expense);
  };

  render() {
    const { expenses, categoryId } = this.props;
    if(!expenses) return null;
    
    return (
      <div className={styles.expenses} style={{ borderColor: 'green', borderStyle: 'solid' }}>
        <h3>Add Expense</h3>
        <section>
          {/* <p>EXPENSE DISPLAY</p> */}
          <ExpenseForm onComplete={this.handleAddExpense} categoryId={categoryId}/>
        </section>
        {/* expenses && */}
        <section>
          <ul>
            {
              expenses.map(expense => {
                return <Expense key={expense.key} expense={expense}/>;
              })
            }
            {/* <p>END CAT DISPLAY</p>         */}
          </ul>
        </section>
      </div>
    );
  }
}

export default connect(
  (state, { categoryId }) => ({
    expenses: getExpensesByCategory(state, categoryId)
  }),
  { addExpense }
)(Expenses);
