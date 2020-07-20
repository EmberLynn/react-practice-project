import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
        <p>This is a React App</p>
        <Person name="John" age="50"/>
        <Person name="Sherlock" age="41">My Hobbies: Solving Murders</Person>
        <Person name="Mrs.H" age="114"/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi, I\'m a React App!'))
  }
}

export default App;
