import React from 'react';
import Button from 'react-bootstrap/Button';

const Chore = ({ match, chores }, props) => { 
    
    const choreId = match.params.id - 1
    const chore = chores[choreId]
    chore && console.log(chore.complete)

    const handleButtonClick = () => {
        chore.complete = true;
        console.log(chore)
        // props.completeChore(chore);
    }
    
    return (
        <div className="ChoreItem">
            <h3>{ chore && chore.name }</h3>
            <br/>
            <p>{ chore && chore.description }</p>
            <br/>
            <p>Points: { chore && chore.points_value}</p>
            <Button type="submit" onClick={handleButtonClick}>Complete</Button>
        </div>
    )
}

export default Chore;