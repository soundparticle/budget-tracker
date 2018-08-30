import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove } from './actions';
import Expenses from '../expenses/Expenses';
import styles from './CategoryDisplay.css';


export class CategoryDisplay extends Component {


  static propTypes = {
    category: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
  };


  render() {
    const { category, onEdit, remove } = this.props;
    // const { name, budget, timestamp } = category;

    // console.log('*** category disp', category);
    return (
      <div>
        <section className={styles.categoryDisplay}></section>
        <strong>{category.name} gets a budget of {category.budget}</strong>
        <button name="Edit" onClick={onEdit}>✎</button>
        <button name="Remove" onClick={() => remove(category.key)}>🗑</button>
        <Expenses categoryId={category.key}/>
      </div>
    );
  }
}

export default connect(
  null,
  { remove }
)(CategoryDisplay);