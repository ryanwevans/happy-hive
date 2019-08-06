import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Chores.css';

class ChoreCard extends Component {

    render() {
        const { chore, achievers } = this.props;
        console.log(achievers)

        return (
            <div className="ChoreCard">
                
                <Link to={{
                    pathname:`/chores/${chore.id}`,
                    choreProps: chore,
                    achieversProps: achievers
                    }} >
                    <div>
                        <h4>{chore.name}</h4>
                        <p>{chore.description}</p>
                        <p><em>Points: {chore.points_value}</em></p>
                    </div>
                </Link>

            </div>
        )
    }
}

export default ChoreCard;