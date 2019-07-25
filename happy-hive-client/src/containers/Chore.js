import React from 'react';

const Chore = ({ match, chores }) => {  
    const choreId = match.params.id - 1
    const chore = chores[choreId]
    return (
        <div className="ChoreItem">
            <h3>{ chore && chore.name }</h3>
            <br/>
            <p>{ chore && chore.description }</p>
            <br/>
            <p>Points: { chore && chore.points_value}</p>
            {/* Add button to 'complete' chore */}
        </div>
    )
}

export default Chore;