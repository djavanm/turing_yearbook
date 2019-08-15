import React, { Component } from 'react';
import Cohort from './Cohort';
import people from '../data/yearbook-data.js';
import Form from './Form'
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      staff: people.staff,
      students: people.students
    }
  }

  addStudent = (student) => {
    let newStudent = {
      id: Date.now(),
      name: student,
      quote: '',
      superlative: '',
      photo: 'https://placekitten.com/200/300'
    }
    this.setState({
      students: [...this.state.students, newStudent]
    })
  }

  updatePerson = (person) => {
    console.log(person)
    const updatedStudents = this.state.students.map(student => {
      return student.id === person.id ? person : student
    })
    this.setState({students: [...updatedStudents]})
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
      <h1>Turing Yearbook</h1>
      <Form  addStudent={this.addStudent}/>
      </header>
        <Cohort people={this.state.staff} groupName='Staff' editable={false} updatePerson={this.updatePerson} />
        <Cohort people={this.state.students} groupName='Students' editable={true} updatePerson={this.updatePerson} />
      </div>
    );
  }
}

