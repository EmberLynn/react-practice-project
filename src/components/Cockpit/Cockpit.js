//useEffect is essentially all class lifecycle hooks in one for funtional components
import React, { useEffect } from 'react'
import classes from './Cockpit.css'

const cockpit = (props) => {

    //can have as many useEffects that you want depending on your data
    //props.persons tells React to only run this useEffect when props.person changes
    useEffect(()=> {
      console.log('[Cockpit.js]... In other useEffect for person');
      //const timer = 
      setTimeout(()=>{
        alert('Something happened!');
      }, 1000);
      return () => {
        //timer is canceled if remove button is clicked before alert is shown
        //clearTimeout(timer);
        console.log('[Cockpit.js] cleanup work in useEffect.');
      }
      //passing it an array
      //pass in empty array [] and it will only run once since there are no dependancies
      //this would be componentDidMount
      //can depend on multiple fields
    }, [])

    //takes a function (without arguments) that will run for every render cycle
    //also runs when component is created
    //cam return a function in useEffect that will run after every render cycle 
    //without [] the return will run every update cycle, with [] it will only run when data changed
    useEffect(()=>{
      console.log('[Cockpit.js] useEffect');
      //http request...
      return () => {
        console.log('[Cockpit.js] cleanup work in useEffect.');
      }
    })

    let assignedClasses = [];
    let btnClass = '';

    if(props.showPersons){
      btnClass = classes.Red
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is a React App</p>
            <button className={btnClass}
            onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;