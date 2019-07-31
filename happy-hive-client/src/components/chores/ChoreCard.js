import React from 'react';
import { Link } from 'react-router-dom';
import './Chores.css'

const ChoreCard = ({ chore }) => {
    console.log(chore.id)
    return (
        <div className="ChoreCard">
            <Link to={`/chores/${chore.id}`}>
                <h4>{chore.name}</h4>
                <p>{chore.description}</p>
                <br/>
                <p><em>Points: {chore.points_value}</em></p>
            </Link>
        </div>
    )
}

export default ChoreCard;