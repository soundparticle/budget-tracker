  
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import budgetImage from '../../assets/budget-image.png';


class Home extends Component {
  render() { 
    return (
      <div>
        <h2>Its budget time!</h2>
        <section>
          <h5>Clink below to begin</h5>
          <NavLink exact activeClassName="active" to="/categories">
            <img src={budgetImage}></img>
          </NavLink>
        </section>
      </div>
    );
  }
}
 
export default Home;
