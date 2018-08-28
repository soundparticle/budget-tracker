import { CategoryDisplay } from './CategoryDisplay';
import React from 'react';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

describe('Category item display', () => {
  it('renders category display', () => {
    const handleEdit = jest.fn();
    const remove = jest.fn();

    const wrapper = shallow(<CategoryDisplay
      category={{ name: 'name', budget: 1 }}
      onEdit={handleEdit}
      remove={remove}
    />);

    expect(toJSON(wrapper)).toMatchSnapshot();

    wrapper.find('button[name="edit"]').simulate('click');
    const editCalls = handleEdit.mock.calls;
    expect(editCalls.length).toBe(1);

    wrapper.find('button[name="delete"]').simulate('click');
    const removeCalls = remove.mock.calls;
    expect(removeCalls.length).toBe(1);
  });
});