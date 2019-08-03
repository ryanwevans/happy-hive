import React from 'react';
import { Link } from 'react-router-dom';
import './Chores.css'

const ChoreCard = ({ chore, chores, achievers }) => {

    return (
        <div className="ChoreCard">
            <Link to={{
                pathname:`/chores/${chore.id}`,
                choreProps: chore,
                choresProps: chores,
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

export default ChoreCard;