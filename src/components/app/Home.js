  
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import budgetImage from '../../assets/budget-image.png';

import styles from './Home.css';

class Home extends Component {
  render() { 
    return (
      <div className={styles.home}>
        <h2>Its budget time!</h2>
        <section>
          <h5>Clink below to begin</h5>
          <div className={styles.startImage}>
            <NavLink exact activeClassName="active" to="/categories">
              <img src={budgetImage}></img>
            </NavLink>
          </div>
        </section>
      </div>
    );
  }
}
 
export default Home;
