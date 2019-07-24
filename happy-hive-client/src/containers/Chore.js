import React from 'react';

const Chore = ({ match, chores }) => {        
    return (
        <div>
            <h3>Chore</h3>
            {/* This next line returns a TypeError: Cannot read property 'name' of undefined */}
            <p>{ chores[match.params.choreId].name }</p>
        </div>
    )
}

export default Chore;