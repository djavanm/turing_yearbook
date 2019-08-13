import React, { Component } from 'react';
import './Person.css';

export default class Person extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: props.person.name,
      quote: props.person.quote,
      superlative: props.person.superlative,
      person: props.person,
      editable: props.editable,
      key: props.key
  }
}

updateInput = (e, key) => {
    this.setState({
      [key]: e.target.value
    })
    console.log(this.state)
  }
  render() {
    const { id, photo, name, quote, superlative} = this.state.person;
    return (
      <article key={id}>
        <img src={photo} alt={`${name}'s avatar`} />
        <h3 
        contentEditable={this.state.editable} 
        onInput={(e) => this.updateInput(e, 'name')}
        suppressContentEditableWarning={true} 
        >
          {name === '' ? 'Name' : this.state.name}
        </h3>
        <p 
        contentEditable={this.state.editable} 
        onInput={(e) => this.updateInput(e, 'quote')}
        suppressContentEditableWarning={true} 
        >
          {quote === '' ? 'Quote' : this.state.quote}
        </p>
        <h4 
        contentEditable={this.state.editable} 
        onInput={(e) => this.updateInput(e, 'superlative')}
        suppressContentEditableWarning={true} 
        >
          {superlative === '' ? 'Superlative' : this.state.superlative}
        </h4> 
      </article>
    )
  }
}  
