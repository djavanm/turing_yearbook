import React, { Component } from 'react';
import './Person.css';

export default class Person extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: props.person.id,
      name: props.person.name,
      quote: props.person.quote,
      superlative: props.person.superlative,
      photo: props.person.photo,
  }
}
updateInput= (e, prop) => {
    this.setState({
      [prop]: e.target.innerText
    })
    this.props.updatePerson(this.state)
  }
  render() {
    const { id, photo, name, quote, superlative} = this.state;
    return (
      <article data-id={id}>
        <img src={photo} alt={`${name}'s avatar`} />
        <h3 
        contentEditable={this.props.editable} 
        onBlur={(e) => this.updateInput(e, 'name')}
        suppressContentEditableWarning={true} 
        >
          {name === '' ? 'Enter a Name' : name}
        </h3>
        <p 
        contentEditable={this.props.editable} 
        onBlur={(e) => this.updateInput(e, 'quote')}
        suppressContentEditableWarning={true} 
        >
          {quote === '' ? 'Enter a Quote' : quote}
        </p>
        <h4 
        contentEditable={this.props.editable} 
        onBlur={(e) => this.updateInput(e, 'superlative')}
        suppressContentEditableWarning={true} 
        >
          {superlative === '' ? 'Enter a Superlative' : superlative}
        </h4> 
      </article>
    )
  }
}  
