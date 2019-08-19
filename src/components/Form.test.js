import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form';

describe('Form', () => {
  it('matches the Form snapshot created for Form ', () => {
    const addPersonMock = jest.fn();
    const wrapper = shallow(<Form 
        addPerson={addPersonMock}/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('calls the add person method on App, on click', () => {
    const addStudentMock = jest.fn();
    const submitStudentMock = jest.fn()
    const wrapper = shallow(<Form 
        addStudent={addStudentMock}/>);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'submitStudent')
    wrapper.find('button').simulate('click', {
      preventDefault: jest.fn()
    });
    expect(instance.submitStudent).toHaveBeenCalled()
  });
});