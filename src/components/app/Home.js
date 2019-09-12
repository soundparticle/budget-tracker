import React, { Component } from 'react';
import budgetImage from '../../assets/budget-image.png';

import styles from './Home.css';




class Home extends Component {
  render() { 
    return (
      <div id={styles.homeContainer}>
        <h2>Its budget time!</h2>
        {/* <p>Edit category list</p> */}
        <img src={budgetImage}></img>
      </div>
    );
  }
}
 
export default Home;
