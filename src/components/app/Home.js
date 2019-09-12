import React, { Component } from 'react';
import budgetImage from '../../assets/budget-image.png';


class Home extends Component {
  render() { 
    return (
      <div>
        <h2>Its budget time!</h2>
        <section>
          <h5>Clink below to begin</h5>
          <img src={budgetImage}></img>
        </section>
      </div>
    );
  }
}
 
export default Home;
