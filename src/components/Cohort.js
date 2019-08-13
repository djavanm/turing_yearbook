import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = ({ people, groupName, editable }) => {
  const cards = people.map(member => (
    <Person person={member} key={member.id} editable={editable} />
  ))
  return (
    <React.Fragment>
    <h2>{groupName}</h2>
    <section className='people-container'>
      {cards}
    </section>
    </React.Fragment>
  )
};

export default Cohort;
