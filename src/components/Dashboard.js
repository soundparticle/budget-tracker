import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CategoryForm from './categories/CategoryForm';
import Categories from './categories/Categories';
import { load, add, update } from './categories/categoryActions';
import { getCategories } from './categories/categoriesReducers';

class Dashboard extends Component {

  static propTypes = {
    categories: PropTypes.array,
    load: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired

  };

  componentDidMount(){

    this.props.load();
  }
  render() { 
    const { categories, add } = this.props;
    console.log('dashboard', categories);
    return (
      <div>
        <section>
          <h3>Add a category</h3>
          <CategoryForm onComplete={add}/>
        </section>

        {categories &&  
          <section>
            <h3>Categories</h3>
            <Categories
              categories={categories}
              onUpdate={update}
            />
          </section>
        }
      </div>
    );
  }
}
 
export default connect(
  state => ({
    categories: getCategories(state)
  }),
  { load, add }
)(Dashboard);