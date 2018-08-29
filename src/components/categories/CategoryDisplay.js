import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove } from './actions';
// import CategoryForm from './CategoryForm';
// import Expenses from '../expenses/Expenses';

export class CategoryDisplay extends Component {

  static propTypes = {
    category: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    // update: PropTypes.func,
    remove: PropTypes.func
  };

  state = {
    editing: false
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleCancel = () => {
    this.setState({ editing: false });
  };

  // handleUpdate = data => {
  //   this.props.update(data);
  //   this.setState({ editing: false });
  // };

  render() {
    // const { editing } = this.state;
    const { category, onEdit, remove } = this.props;
    // const { name, budget, timestamp } = category;

    return (
      <p>
        {category.name} gets a budget of {category.budget}
        <button name="edit" onClick={onEdit}>✎</button>
        <button name="remove" onClick={() => remove(category.key)}>🗑</button>
      </p>
    );
  }
}

export default connect(
  null,
  { remove }
)(CategoryDisplay);