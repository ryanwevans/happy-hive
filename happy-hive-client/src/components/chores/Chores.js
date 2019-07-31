import React from 'react';
import ChoreCard from './ChoreCard';

const Chores = ({ chores }) => {
    const renderChoreCards = chores.map( chore => 
        <div key={chore.id}>
            <ChoreCard chore={chore}/>
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