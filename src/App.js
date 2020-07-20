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

  switchNameHandler = () => {
    //console.log('Was clicked!');
    this.setState({
      persons: [
        { name: 'Watson', age: 50},
        { name: 'Holmes', age: 41},
        { name: 'Mrs.H', age: 115 }
      ]
     })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <p>This is a React App</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Solving Murders</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!'))
  }
}

export default App;
