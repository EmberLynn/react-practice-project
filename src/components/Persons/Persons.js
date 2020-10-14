import React, { Component} from 'react'
import Person from './Person/Person'

//returns ONE function
class Persons extends Component {  
    //runs in this order

    static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    }

    //must return true or false for whether or not component should update
    //compair current to past to see if there was a change
    shouldComponentUpdate(nextProps, nextState){
        console.log('[Persons.js] shouldComponentUpdate');
        if(nextProps.persons !== this.props.persons)
            return true;
        else    
            return false;
    }

    //can save something in state and give it to componentDidUpdate
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate')
        return {message: 'Snapshot!'};
    }

    //happens after render
    //most used update
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot)
    }

    //for cleanup right before you remove a component
    componentWillUnmount(){
        console.log('[Persons.js] componentWillUnmount')
    }
    
    render(){console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
        return (
        <Person
            click={() => this.props.clicked(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.props.changed(event, person.id)} 
        />
        );
    });}
    
};
  

export default Persons;