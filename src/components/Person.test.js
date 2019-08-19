import React from 'react';
import { shallow } from 'enzyme';
import Person from './Person';

let testPerson = {id: 1, name: 'Eric', quote: 'You miss all the shots you don\'t take.', superlative: 'Most Likely to Win the PGA', photo: './eric.jpg'}
let testStudent = {id: 21, name: 'Abigail', quote: '', superlative: '', photo: 'https://placekitten.com/200/300'}

describe('Person', () => {
  it('matches the staff snapshot created for Person ', () => {
    const updatePersonMock = jest.fn();
    const removePersonMock = jest.fn();
    const wrapper = shallow(<Person person={testPerson} 
        key={testPerson.id} 
        editable={false} 
        updatePerson={updatePersonMock} 
        removePerson={removePersonMock}/>);

    expect(wrapper).toMatchSnapshot();
  });
  it('matches the student snapshot created for Person ', () => {
    const updatePersonMock = jest.fn();
    const removePersonMock = jest.fn();
    const wrapper = shallow(<Person person={testStudent} 
        key={testStudent.id} 
        editable={true} 
        updatePerson={updatePersonMock} 
        removePerson={removePersonMock}/>);

    expect(wrapper).toMatchSnapshot();
  });

  it('calls the remove person method on App, on click', () => {
    const updatePersonMock = jest.fn();
    const removePersonMock = jest.fn();
    const wrapper = shallow(<Person person={testStudent} 
        key={testStudent.id} 
        editable={true} 
        updatePerson={updatePersonMock} 
        removePerson={removePersonMock}/>);

    wrapper.find('button').simulate('click');
    expect(removePersonMock).toHaveBeenCalledWith(testStudent)
  });
});