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
      <div>
        <section className={styles.categoryDisplay} style={{ borderColor: 'orange', borderStyle: 'solid' }}>
          {/* <p style={{ color: 'blue' }}>
            CAT DISPLAY
          </p> */}
          <section>
            <li style={{ listStyleType: 'disc' }}>
              <strong>{category.name} = ${category.budget}</strong>
            </li>
          </section>
          <br></br>
          <button name="Edit" onClick={onEdit}>✎</button>
          <button name="Remove" onClick={() => remove(category.key)}>🗑</button>
          {/* <p>
            END CAT DISPLAY
          </p> */}
        </section>
        <hr></hr>
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
