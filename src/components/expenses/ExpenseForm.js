import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpenseForm extends Component {
  state = {
    editing: false,
    name: '',
    price: 0,
    id: null
  };

  static propTypes = {
    expense: PropTypes.object,
    onComplete: PropTypes.func,
    onCancel: PropTypes.func
  };

  componentDidMount() {
    const { expense } = this.props;
    if(!expense) return;

    this.setState(expense);
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    const { name, price, id } = this.state;
    const expense = { name, price };
    if(id) expense.id = id;
    if(this.props.expense) expense.categoryId = this.props.expense.categoryId;

    this.props.onComplete(expense);
    this.setState({ name: '', price: 0 });
  };
  
  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() { 
    const { id, name, price } = this.state;
    const { onCancel } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <InputControl name="name" value={name} onChange={this.handleChange}/>
        <InputControl name="price" value={price} onChange={this.handleChange}/>
        <p>
          <button type="submit">{ id ? 'Update' : 'Add' }</button>
          {id && <button type="button" onClick={onCancel}>Cancel</button>}
        </p>
      </form>
    );
  }
}

const InputControl = (props) => (
  <p>
    <label>
      {props.name}:
      <input {...props} required/>
    </label>
  </p>
);

export default ExpenseForm;