import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Category from './Category';

class Categories extends Component {
  
  static propTypes = {
    categories: PropTypes.array
  };

  render() { 
    const { categories } = this.props;

    return ( 
      <ul>
        {categories.map(category => (
          <Category
            key={category.key}
            category={category}
          />
        ))}
      </ul>
    );
  }
}
 
export default Categories;