import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Category from './Category';

class Categories extends Component {
  
  static propTypes = {
    categories: PropTypes.array
  };

  render() { 
    const { categories } = this.props;
    console.log('categories.js', categories);
    return ( 
      <Fragment>
        <h3>Category</h3>
        <ul>
          {categories.map(category => (
            <Category
              key={category.key}
              category={category}
            />
          ))}
        </ul>
      </Fragment>
    );
  }
}
 
export default Categories;