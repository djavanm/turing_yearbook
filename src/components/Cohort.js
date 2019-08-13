import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = ({ staff }) => {
  const staffCards = staff.map(member => (
    <Person person={member} key={member.id}/>
  ))
  return (
    <section className='staff-container'>
      {staffCards}
    </section>
  )
};

export default Cohort;
