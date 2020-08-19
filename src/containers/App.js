import React, { Component } from 'react';
import classes from './App.css';
//import styled from 'styled-components';
//import Radium, { StyleRoot } from 'radium';
import Person from '../components/Persons/Person/Person';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary'

// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${props => props.alt ? 'pink' : 'lightgreen'};
//     color: black;
//   }
// `;

class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'John', age: 50 },
      { id: '2', name: 'Sherlock', age: 41 },
      { id: '3', name: 'Mrs.H', age: 114 }
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }

  nameChangedHandler = (event, id) => {
    //find index returns the index of an element in an array
    //Like map, it takes a function which will be executed on each item in the array
    //p is the current element in the array
    //we return true or false depending if the element was or was not found
    const personIndex = this.state.persons.findIndex(p => {
      //if the current element's id is the same as the id passed into the method, return true
      //once returned true, personIndex will hold the position of the found element
      return p.id === id;
    });

    //do not do this:
    //const person = this.state.persons[personIndex]
    //when you are dealing with the state, avoid directly mutating it
    //instead, make a copy and merge the state

    //use the spread operator to create a new object from the old object
    const person = {
      ...this.state.persons[personIndex]
    };

    //update the person's name which is the data we are changing
    //we grab this from the onChange event
    person.name = event.target.value;

    //update the array
    //make new array from old by using the spread opertor
    const persons = [...this.state.persons];

    //update the person in the array at the correct index
    //we are replacing person at personIndex with our newly changed person
    persons[personIndex] = person;

    //now that everything has been changed, let's set the state
    //persons in state will now equal this new persons array
    this.setState({ persons: persons })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }


  render() {

    // const style = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // }

    let persons = null;
    let btnClass= [classes.Button];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
        </div>
      );
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'pink',
      //   color: 'black'
      // }

      btnClass.push(classes.Red);
    }

    // let assignedClasses = [];
    // if (this.state.persons.length <= 2) {
    //   classes.push('red');
    // }
    // if (this.state.persons.length <= 1) {
    //   classes.push('bold');
    // }

    let assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      //<StyleRoot>
      <div className={classes.App}>
       {/* <div className="App"> */}
          <h1>Hello World!</h1>
          <p className={assignedClasses.join(' ')}>This is a React App</p>
          {/* <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Toggle Persons
          </StyledButton> */}
          <button className={btnClass.join(' ')}
            // style={style}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
      //</StyleRoot>
    );
  }
}

//export default Radium(App);
export default App;
