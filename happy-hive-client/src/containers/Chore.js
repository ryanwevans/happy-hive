import React, { Component } from 'react';
import { connect } from 'react-redux';

class Chore extends Component {
    
    render() {
        console.log(this.props)
        const { chore } = this.props
        return(
            <div>
                <h3>{chore.name}</h3>
                <p>{chore.description}</p>
            </div>
        )
    }
}

export default Chore;