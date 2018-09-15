import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpenseForm extends Component {
  state = {
    editing: false,
    id: null,
    name: '',
    price: ''
  };

  static propTypes = {
    expense: PropTypes.object,
    onComplete: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
    categoryId: PropTypes.string.isRequired,
  };

  componentDidMount() {
    const { expense } = this.props;
    if(!expense) return null;

    this.setState(expense);
  }
  
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, price, key } = this.state;
    const expense = { name, price, };
    if(key) expense.key = key;
    if(this.props.expense) {
      expense.categoryId = this.props.expense.categoryId;
    }
    this.props.onComplete(expense);
    this.setState({ name: '', price: '' });
  };

  render() { 
    const { key, name, price } = this.state;
    const { onCancel } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
            Name:
          <input name="name" value={name} onChange={this.handleChange}/>
        </label>
        <label>
           Price:
          <input name="price" value={price} onChange={this.handleChange}/>
        </label>
        <p>
          <button type="submit">{ key ? 'Update' : 'Add' }</button>
          {key && <button type="button" onClick={onCancel}>Cancel</button>}
        </p>
      </form>
    );
  }
}

export default ExpenseForm;