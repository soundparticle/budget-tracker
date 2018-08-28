import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove } from './categoryActions';
import Expenses from '../expenses/Expenses';

export class CategoryDisplay extends Component {

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
          <h3>{category.name}</h3>
          <p>{category.budget}</p>
          <p>{category.timestamp}</p>
          <button name="edit" onClick={onEdit}>✎</button>
          <button name="delete" onClick={() => remove(category.key)}>🗑</button>
        </section>
        <section>
          <Expenses categoryId={category.key}/>
        </section>
      </div>
    );
  }
}
 
export default connect(
  null,
  { remove }
)(CategoryDisplay);