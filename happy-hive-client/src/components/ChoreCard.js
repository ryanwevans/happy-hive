import React from 'react';
import { Link } from 'react-router-dom';
import './Chores.css'

const ChoreCard = ({ chore }) => {
    return (
        <div className="ChoreCard">
            <Link to={`/chores/${chore.id}`}>
                <h4>{chore.name}</h4>
                <p>{chore.description}</p>
                <br/>
                <p>Points: {chore.points_value}</p>
            </Link>
        </div>
    )
}

export default ChoreCard;