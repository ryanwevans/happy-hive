import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Chore from '../containers/Chore'
import './Chores.css'

class ChoreCard extends Component {
    
    render() {
        const { chore } = this.props;
        
        return (
            <div className="ChoreCard">
                
                {/* <Route path='/chores/:id' component={Chore} /> */}

                <h3><Link to={{
                    pathname: `/chores/${chore.id}`,
                    state: {
                        chore: {chore}
                    }
                    }}>{chore.name}</Link></h3>

                <p>{chore.description}</p>
                <p>Points: {chore.points_value}</p>
             </div> 
        )
    }
}

export default ChoreCard;