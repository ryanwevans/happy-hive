import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { editAchiever } from '../../actions/achievers';
import { editChore } from '../../actions/chores';

/* May need to add location.choresProps to use for pulling the chore data using the match.params.id so that the forward/back buttons function correctly */

class Chore extends Component { 
    
    render() {
        // I pass 'achievers' as props through the Route in App, but it is 'undefined' here (why?), so I am passing 'achievers' as 'location' props.
        const { choreProps, achieversProps } = this.props.location;
        const chore = choreProps;
        const achievers = achieversProps;

        const { editAchiever, editChore, history } = this.props;

        const handleButtonClick = (event) => {
            event.preventDefault();
            completeChore();
        }

        const completeChore = () => {
            // comparison with '==' because current_user_id is a string, achiever.id is integer
            const choreCompleter = achievers.filter( achiever => achiever.id == sessionStorage.current_user_id)
            const updatedAchiever = choreCompleter[0]
            
            updatedAchiever.points_earned += chore.points_value
            editAchiever(updatedAchiever)

            // set the sessionStorage.current_user_points to match updated achiever.points
            sessionStorage.current_user_points = updatedAchiever.points_earned

            chore.complete = true
            editChore(chore)

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

const mapStateToProps = state => {
    return({
        achievers: state.achievers.achievers
    })
}

export default connect(mapStateToProps, { editAchiever, editChore })(withRouter(Chore));