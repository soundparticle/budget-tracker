import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CategoryForm extends Component {
  state = { 
    key: null,
    name: '',
    budget: 0,
    expenses: [],
    category: null
  };

  static propTypes = {
    category: PropTypes.object,
    onComplete: PropTypes.func.isRequired,
    onCancel: PropTypes.func
  };

  componentDidMount() {
    const { category } = this.props;
    if(!category) return;

    this.setState(category);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, budget, key } = this.state;
    const category = { name, budget };
    if(key) category.key = key;

    this.props.onComplete(category);
    this.setState({ name: '', budget: 0 });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() { 
    const { name, budget, key } = this.state;
    const { onCancel } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input name="name" value={name} onChange={this.handleChange}/>
        </label>
        <label>
          Budget:
          <input name="budget" value={budget} type="number" onChange={this.handleChange}/>
        </label>
        <p>
          <button type="submit">{ key ? 'Update' : 'Add' }</button>
          {key && <button type="button" onClick={onCancel}>Cancel</button>}
        </p>
      </form>
    );
  }
}
 
export default CategoryForm;