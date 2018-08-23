import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove } from './actions';

class CategoryDisplay extends Component {

  static propTypes = {
    category: PropTypes.object.isRequired,
    remove: PropTypes.func.isRequired
  }
  render() { 
    const { category, remove } = this.props;

    return (
      <div>
        <h3>{category.name}</h3>
        <p>{category.budget}</p>
        <button name="delete" onClick={() => remove(category.key)}>🗑</button>
      </div>
    );
  }
}
 
export default connect(
  null,
  { remove }
)(CategoryDisplay);