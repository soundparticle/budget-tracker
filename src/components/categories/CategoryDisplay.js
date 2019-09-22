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

    return (
      <div className={styles.categorydisplay}>
        <section className="category-list">
          {/* <p style={{ color: 'blue' }}>
            CAT DISPLAY
          </p> */}
          <section>
            <li style={{ listStyleType: 'disc' }}>
              <strong>{category.name} = ${category.budget}</strong>
              <button name="Edit" onClick={onEdit}>✎</button>
              <button name="Remove" onClick={() => remove(category.key)}>🗑</button>
            </li>
          </section>
          {/* <br></br> */}
          {/* <p>
            END CAT DISPLAY
          </p> */}
        </section>
        
        <hr></hr>
        {/* <h3>
          <strong>Expenses:</strong>
        </h3> */}
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
