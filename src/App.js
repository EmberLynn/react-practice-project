import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'John', age: 50},
      { name: 'Sherlock', age: 41},
      { name: 'Mrs.H', age: 114 }
    ]
  }

  switchNameHandler = (newName) => {
    //console.log('Was clicked!');
    this.setState({
      persons: [
        { name: newName, age: 50},
        { name: 'Holmes', age: 41},
        { name: 'Mrs.H', age: 115 }
      ]
     })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'John', age: 50},
        { name: event.target.value, age: 41},
        { name: 'Mrs.H', age: 115 }
      ]
     })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hello World!</h1>
        <p>This is a React App</p>
        <button 
        style = {style}
        onClick={() => this.switchNameHandler("WATSON!")}>Switch Name</button>
        <Person
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}/>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Watson!!!')}
          changed={this.nameChangedHandler}>
            My Hobbies: Solving Murders</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!'))
  }
}

export default App;
