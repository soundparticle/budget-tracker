import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import CategoryForm from './categories/CategoryForm';

class Dashboard extends Component {

  //add propTypes

  //componentDidMount(){

  // }
  render() { 
    return (
      <div>
        <section>
          <h3>Add a category</h3>
          <CategoryForm/>
        </section>
      </div>
    );
  }
}
 
export default Dashboard;