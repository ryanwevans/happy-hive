import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { editAchiever } from '../../actions/achievers';
import { editChore } from '../../actions/chores';

class Chore extends Component { 
    
    render() {
        const { choreProps, achieversProps } = this.props.location;
        const chore = choreProps;
        const achievers = achieversProps;

        const { editAchiever, editChore, history } = this.props;
        console.log(this.props)

        // Handle click of 'Complete' button
        const handleButtonClick = (event) => {
            event.preventDefault();
            // validate a user is signed in in order to complete a chore
            if (sessionStorage.current_user_id) {
                completeChore()
            } else {
                window.alert("You must sign in to complete a chore")
            }
        }

        // Execute steps of completing a chore: increase claimant's points earned, change 'complete' attribute of Chore to 'true'
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