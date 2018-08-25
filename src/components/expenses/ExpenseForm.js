import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ExpenseForm extends Component {
  state = { 
    editing: false,
    key: null,
    name: '',
    price: 0
  };

   static propTypes = {
     expense: PropTypes.object,
     onComplete: PropTypes.func.isRequired,
     onCancel: PropTypes.func
   };

   render() { 
     const { key, name, price } = this.state;
     const { onCancel } = this.props;
     return ( 
       <form onSubmit={this.handleSubmit}>
         <label>
            Name:
           <input name="name" value={name} onChange={this.handleChange}/>
         </label>
         <label>
           Price:
           <input name="price" value={price} onChange={this.handleChange}/>
         </label>
         <p>
           <button type="submit">{ key ? 'Update' : 'Add' }</button>
           {key && <button type="button" onClick={onCancel}>Cancel</button>}
         </p>
       </form>
     );
   }
}
 
export default ExpenseForm;