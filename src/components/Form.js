import React, { Component } from 'react'
import './Form.css'

export default class Form extends Component{
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }
  updateText = (e) => {
    this.setState({
      name: e.target.value
    })
    console.log(this.props.addStudent)
  }
  submitStudent = (e) =>  {
    e.preventDefault();
    this.props.addStudent(this.state.name);
    this.setState({name: ''});
  }
  render() {
    return (
      <form>
        <input 
          type='text'
          className='student-input'
          placeholder='Student Name'
          name='studentName'
          onChange={e => this.updateText(e)}
          value={this.state.name}
          />
          <button
            className='student-button'
            onClick={e => this.submitStudent(e)}
            >
            Add Student
          </button>
      </form>
    )
  }
}