import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';
import { editChore } from '../../actions/chores';

// const Chore = ({ match, chores, editChore, history }) => { 
class Chore extends Component { 
    
    render() {
        console.log(this.props)
        const { match, chores, history, editChore } = this.props;
        const choreId = match.params.id
        const chore = chores.find( chore => chore[chore.id] === choreId)
        console.log(chore)

        const handleButtonClick = (event) => {
            event.preventDefault();
            chore.complete = true;
            editChore(chore);
            history.push('/chores');
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

export default connect(null, {editChore, withRouter})(withRouter(Chore));