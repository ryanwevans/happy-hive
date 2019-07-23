import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Chores.css'

class ChoreCard extends Component {
    
    render() {
        const {chore} = this.props;
        return (
            <div className="ChoreCard">
                <h3><Link to={`/chores/${chore.id}`} params={{ testvalue: "hello" }}>{chore.name}</Link></h3>
                <p>{chore.description}</p>
                <p>Points: {chore.points_value}</p>
             </div> 
        )
    }
}

export default ChoreCard;