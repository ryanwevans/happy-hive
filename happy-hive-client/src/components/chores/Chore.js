import React from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { editChore } from '../../actions/chores';

const Chore = ({ match, chores }) => { 
    
    const choreId = match.params.id - 1
    const chore = chores[choreId]

    const handleButtonClick = (event) => {
        event.preventDefault();
        chore.complete = true;
        editChore(chore) /* this executes */
        console.log(chore) /* this logs to the console  */
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

export default connect(null, {editChore})(Chore);