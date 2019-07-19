import React from 'react';
import './Chores.css'

const ChoreCard = ({chore}) => (
    <div className="ChoreCard">
        <h3>{chore.name}</h3>
        <p>{chore.description}</p>
        <p>Points: {chore.points_value}</p>
    </div>
)

export default ChoreCard;