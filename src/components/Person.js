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
  }
  render() {
    const { id, photo, name, quote, superlative} = this.state;
    return (
      <article data-id={id}>
        <img src={photo} alt={`${name}'s avatar`} />
        <h3 
        contentEditable={this.state.editable} 
        onKeyUp={(e) => this.updateInput(e, 'name')}
        onBlur={() => this.props.updatePerson(this.state)}
        suppressContentEditableWarning={true} 
        name='name'
        >
          {name === '' ? 'Name' : this.name}
        </h3>
        <p 
        contentEditable={this.state.editable} 
        onKeyUp={(e) => this.updateInput(e, 'quote')}
        suppressContentEditableWarning={true} 
        name='quote'
        >
          {quote === '' ? 'Quote' : this.state.quote}
        </p>
        <h4 
        contentEditable={this.state.editable} 
        onKeyUp={(e) => this.updateInput(e, 'superlative')}
        suppressContentEditableWarning={true} 
        name='superlative'
        >
          {superlative === '' ? 'Superlative' : this.state.superlative}
        </h4> 
      </article>
    )
  }
}  
