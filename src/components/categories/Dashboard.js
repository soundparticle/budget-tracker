
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Categories from './Categories';
import CategoryForm from './CategoryForm';
import { load, add, update } from './actions';
import { getCategories } from './reducers';

import styles from './Dashboard.css';


class Dashboard extends Component {

  static propTypes = {
    categories: PropTypes.array,
    add: PropTypes.func.isRequired,
    load: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.load();
  }

  render() {
    const { categories, add } = this.props;

    return (
      <div className={styles.dashboard}>
        <h3>Add Budget Category</h3>
        <section className="category-wrapper">
          <CategoryForm onComplete={add}/>
        </section>
        <section>
          
        </section>
        <hr/>
        {categories && 
          <section className="category-wrapper">
            <div>
              <h3>Budget Categories</h3>
              <Categories
                categories={categories}
                onUpdate={update}
              />
            </div>
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
