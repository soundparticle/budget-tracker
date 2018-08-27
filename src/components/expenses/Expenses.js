import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ExpensesForm from './ExpensesForm';
import Expense from './Expense';
import { getExpensesByCategory } from '../categories/reducers';
import { addExpense } from '../categories/actions';

class Expenses extends Component {

  static propTypes ={
    expenses: PropTypes.array,
    categoryId: PropTypes.string,
    addExpense: PropTypes.func.isRequired
  };

  handleAddExpense = expense => {
    const { addExpense, categoryId } = this.props;
    addExpense(categoryId, expense);
  };

  render() {
    const { expenses } = this.props;
    if(!expenses) return null;

    return (
      <ul>
        <section>
          <h3>Add an Expense:</h3>
          <ExpensesForm onComplete={this.handleAddExpense}/>
        </section>

        <section>
          {expenses.map(expense => {
            return <Expense
              key={expense.id}
              expense={expense}
            />;
          })
          }
        </section>
      </ul>
    );
  }
}

export default connect(
  (state, { categoryId }) => ({
    expenses: getExpensesByCategory(state, categoryId)
  }),
  { addExpense }
)(Expenses);