import React from 'react';
import ChoreCard from './ChoreCard';

const Chores = ({ chores }) => {
    const renderChoreCards = Object.keys(chores).map( chore => 
        <div key={chore}>
            <ChoreCard chore={chores[chore]}/>
        </div>)

    return (
        <div className="ChoreCardContainer">
            <h3>Chores</h3>
            <br/>
            {renderChoreCards}
        </div>
    )
}

export default Chores;