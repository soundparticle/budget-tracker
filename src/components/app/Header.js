import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Error from './Error';
import logo from '../../assets/logo.png';
import styles from './Header.css';

class Header extends Component {

  static propTypes = {
    
  };

  handleSpecial = event => {
    event.preventDefault();
    alert('that is a cool link!');
  };

  render() {

    return (
      <div className={styles.header}>

        <section className="header-container">
          <div className="logo">
            <img src={logo}/>
            <h1>Budget Tracker</h1>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink exact activeClassName="active" to="/">Home</NavLink>
              </li>
              <li>
                <NavLink exact activeClassName="active" to="/categories">Budget</NavLink>
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
