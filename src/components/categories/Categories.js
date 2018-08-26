import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Category from './Category';

class Categories extends Component {

  static propTypes ={
    categories: PropTypes.array
  };

  render() {
    const { categories } = this.props;

    return (
      <ul>
        {categories.map(category => (
          <Category
            id={category.id}
            category={category}
          />
        ))}
      </ul>
    );
  }
}

export default Categories;