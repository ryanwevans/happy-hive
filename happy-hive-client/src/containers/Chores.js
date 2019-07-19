import React, { Component } from 'react';

class Chores extends Component {

    componentDidMount() {
        return fetch('http://localhost:3001/api/chores')
        .then(resp => resp.json())
        .then(choresData => {
            return choresData
        })
        .catch(error => console.log(error))
    }
    
    render() {
        return (
            <div>
                <h2>Chores</h2>
            </div>
        )
    };
}

export default Chores;