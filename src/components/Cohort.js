import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = ({ staff, students }) => {
  const staffCards = staff.map(member => (
    <Person person={member} key={member.id}/>
  ))
  const studentCards = students.map(student => (
    <Person person={student} key={student.id}/>
  ))
  return (
    <section className='staff-container'>
      {staffCards}
      {studentCards}
    </section>
  )
};

export default Cohort;
