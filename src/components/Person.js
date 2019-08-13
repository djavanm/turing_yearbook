import React from 'react';
import './Person.css';

const Person = ({ person }) => {
  const { id, photo, name, quote, superlative } = person;
  return (
    <article key={id}>
      <img src={photo} alt={`${name}'s avatar`} />
      <h3>{name}</h3>
      <p>{quote}</p>
      <h4>{superlative}</h4> 
    </article>
  )
};

export default Person;
