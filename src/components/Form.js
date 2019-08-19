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
            id="student-button"
            onClick={e => this.submitStudent(e)}
            >
            <span className='visible'>{`{  `}</span>
            Add Student
            <span className='visible'>{`  }`}</span>
          </button>
      </form>
    )
  }
}