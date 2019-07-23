import React, { Component } from 'react';
import { connect } from 'react-redux';

class Chore extends Component {
    
    render() {
        console.log(this.props)
        const { chore } = this.props
        return(
            <div>
                <h3>Chore Component</h3>
            </div>
        )
    }
}

export default Chore;