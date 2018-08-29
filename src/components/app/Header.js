import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Error from './Error';
import styles from './Header.css';

class Header extends Component {

  render() { 
    return (
      <div className={styles.header}>
        <section className="header-container">
          <div>
            <h1>Budget Tracker</h1>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="active" to="/categories">Categories</NavLink>
              </li>
            </ul>
          </nav>
        </section>
        <Error/>
      </div>      
    );
  }
}
 
export default Header;