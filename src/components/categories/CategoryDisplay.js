import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Expenses from '../Expenses/Expenses';
import { connect } from 'react-redux';
import { remove } from './actions';

class CategoryDisplay extends Component {

  static propTypes = {
    category: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
  };

  render() {
    const { category, onEdit, remove } = this.props;

    return (
      <div>
        <section>
          {category.name} you can spend {category.budget}
          <button name="edit" onClick={onEdit}>✎</button>
          <button name="remove" onClick={() => remove(category.id)}>🗑</button>
          {/* <strong>{category.name}</strong><span>Budget: {category.budget}</span> */}
        </section>

        <section>
          <Expenses categoryId={category.id}/>
        </section>
      </div>
    );
  }
}

export default connect(
  null,
  { remove }
)(CategoryDisplay);