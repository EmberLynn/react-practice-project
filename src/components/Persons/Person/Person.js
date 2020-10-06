import React, { Component } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    width: 40%;
    margin: 16px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width) {
        width: 450px;
    }
`

class Person extends Component {

    //runs in this order

    static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProps');
        return state;
    }

    //must return true or false for whether or not component should update
    //compair current to past to see if there was a change
    shouldComponentUpdate(nextProps, nextState){
        console.log('[Persons.js] shouldComponentUpdate');
        return true;
    }

    //can save something in state and give it to componentDidUpdate
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[Persons.js] getSnapshotBeforeUpdate')
        return {message: 'Snapshot!'};
    }

    //happens after render
    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot)
    }

    render(){
        console.log('[Person.js] rendering...');
        return (
            <StyledDiv>
                <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old! {this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </StyledDiv>
        )
    }
    
}

export default Person;