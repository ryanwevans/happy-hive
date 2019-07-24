import React from 'react';
import { Link } from 'react-router-dom';
import './Chores.css'

const ChoreCard = ({chores}) => {
    const renderChoreCards = Object.keys(chores).map( choreID => 
        <div key={choreID} className="ChoreCard">
            <Link to={`/chores/${choreID}`}>
                <h4>{chores[choreID].name}</h4>
                <p>Points: {chores[choreID].points_value}</p>
            </Link>
        </div>
        )

    return (
        <div>
            { renderChoreCards }
        </div> 
    )
}

export default ChoreCard;