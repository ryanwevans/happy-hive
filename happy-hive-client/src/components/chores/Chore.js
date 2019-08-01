import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';

class Chore extends Component { 
    
    render() {
        console.log(this.props)
        const { location, history, completeChore } = this.props;
        
        const chore = location.choreProps
        
        const handleButtonClick = (event) => {
            event.preventDefault();
            completeChore(chore);
            // history.push('/chores');
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
}

export default withRouter(Chore);