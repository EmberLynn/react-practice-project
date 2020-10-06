import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: '1', name: 'John', age: 50 },
      { id: '2', name: 'Sherlock', age: 41 },
      { id: '3', name: 'Mrs.H', age: 114 }
    ],
    showPersons: false
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  deletePersonHandler = (personIndex) => {
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

    console.log('[App.js] render')

    let persons = null;

    if (this.state.showPersons) {
      persons = (
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/>
          {persons}
        </div>
    );
  }
}

export default App;
