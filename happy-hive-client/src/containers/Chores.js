import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getChores } from '../actions/Chores';

class Chores extends Component {

    componentDidMount() {
        this.props.getChores();
    }
    
    render() {
        return (
            <div>
                <h2>Chores</h2>
            </div>
        )
    };
}

export default connect(null, { getChores })(Chores);