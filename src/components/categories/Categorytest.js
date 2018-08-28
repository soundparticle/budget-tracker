import Category from './Category';
import React from 'react';
import { shallow } from 'enzyme';

describe('Category', () => {

  it('renders display or edit', () => {
    const handleRemove = jest.fn();
    const handleUpdate = jest.fn();

    const category = { id: 'abc', name: 'shopping', budget: '400' };
    const wrapper = shallow(<Category
      category={category}
      remove={handleRemove}
      onUpdate={handleUpdate}
    />);

    const component = wrapper.instance();

    expect(wrapper.state('editing')).toBe(false);
    component.handleEdit();
    expect(wrapper.state('editing')).toBe(true);
    component.handleEndEdit();
    expect(wrapper.state('editing')).toBe(false);

    component.handleDelete();

    const removeCalls = handleRemove.mock.calls;
    expect(removeCalls.length).toBe(1);
    expect(removeCalls[0][0]).toBe(category.id);
  });
});