import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {

  render() { 
    return (
      <div>
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
      </div>      
    );
  }
}
 
export default Header;