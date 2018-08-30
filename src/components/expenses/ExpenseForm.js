import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpenseForm extends Component {

  state = {
    editing: false,
    id: null,
    name: '',
    price:'',
  };

  static propTypes = {
    expense: PropTypes.object,
    categoryId: PropTypes.string,
    onComplete: PropTypes.func.isRequired,
    onCancel: PropTypes.func,
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
    this.setState({ name: '', price: '' });
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
        <InputControl name="price" value={price} type="number" onChange={this.handleChange}/>
        <p>
          <button className="add-update-button" type="submit">{ id ? 'Update' : 'Add' }</button>
          {id && <button className="cancel-button" type="button" onClick={onCancel}>Cancel</button>}
        </p>
      </form>
    );
  }
}

const InputControl = (props) => (
  <p className="category-p">
    <label className="category-l">
      {props.name}:
      <input {...props} required/>
    </label>
  </p>
);

export default ExpenseForm;
