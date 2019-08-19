import React from 'react';
import { shallow } from 'enzyme';
import Cohort from './Cohort';

const staff = [
{id: 1, name: 'Eric', quote: 'You miss all the shots you don\'t take.', superlative: 'Most Likely to Win the PGA', photo: './eric.jpg'},
{id: 2, name: 'Amy', quote: 'I believe in you, cuties!', superlative: 'Most Likely to Be an Actual Superhero', photo: './amy.jpg'},
{id: 3, name: 'Khalid', quote: 'Don\'t put the world on your shoulders.', superlative: 'Most Likely to Save the Planet from Alien Invasion', photo: './khalid.png'},
{id: 4, name: 'Travis', quote: 'You do you.', superlative: 'Most Likely to Win a Grammy', photo: './travis.jpg'},
{id: 5, name: 'Leta', quote: 'It\'s okay to be kind of a mess.', superlative: 'Most Likely to Go to the Moon', photo: './leta.jpg'},
{id: 6, name: 'Christie', quote: 'Every journey begins with a single step. So take the damn step!', superlative: 'Most Likely to Be President', photo: './christie.jpg'},
{id: 7, name: 'Brittany', quote: 'It was Robbie.', superlative: 'Most Likely to Get Away with Murder', photo: './brittany.jpg'},
{id: 8, name: 'Robbie', quote: 'Cool.', superlative: 'Most Likely to Be Accused of Murder', photo: './robbie.jpg'},
{id: 9, name: 'Will', quote: 'Stop worrying and just do the thing.', superlative: 'Most Likely to Invent Cold Fusion', photo: './will.jpg'},
{id: 10, name: 'Pam', quote: 'Shit!', superlative: 'Most Likely to Win a Gold Medal', photo: './pam.jpg'},
{id: 11, name: 'David', quote: 'I love git.', superlative: 'Most Likely to Be Eaten by a Shark', photo: './david.JPG'},
{id: 12, name: 'Louisa', quote: 'YOLO', superlative: 'Most Likely to Win a Knife Fight', photo: './louisa.jpg'},
{id: 13, name: 'Jeff', quote: '::thoughtful nonsense::', superlative: 'Most Likely to Tell a Dad Joke', photo: 'https://i.ytimg.com/vi/DhqzMc_LXgQ/maxresdefault.jpg'}
]

describe('Cohort', () => {
  it('matches the Cohort snapshot created for Form ', () => {
    const updatePersonMock = jest.fn();
    const removePersonMock = jest.fn();
    const wrapper = shallow(<Cohort people={staff} groupName='Staff' editable={false} updatePerson={updatePersonMock} removePerson={removePersonMock} />);

    expect(wrapper).toMatchSnapshot();
  });
});