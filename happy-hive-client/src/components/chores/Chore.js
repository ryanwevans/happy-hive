import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { editAchiever } from '../../actions/achievers'
import { editChore } from '../../actions/chores'

class Chore extends Component { 
    
    render() {
        console.log(this.props)
        const { location, history } = this.props;
        
        const chore = location.choreProps;
        // const achievers = location.achieversProps;
        const achievers = this.props.achievers;
        /* May need to add location.choresProps to use for pulling the chore data using the match.params.id so that the forward/back buttons function correctly */

        const handleButtonClick = (event) => {
            event.preventDefault();
            completeChore();
        }

        const completeChore = () => {

            // comparison with '==' because current_user_id is a string, achiever.id is integer
            const choreCompleter = achievers.filter( achiever => achiever.id == sessionStorage.current_user_id)
            choreCompleter[0].points_earned += chore.points_value

            const updatedAchiever = choreCompleter[0]
            this.props.editAchiever(updatedAchiever)
            console.log(updatedAchiever)

            // set the sessionStorage.current_user_points to match achiever.points
            sessionStorage.current_user_points = updatedAchiever.points_earned
            console.log(sessionStorage.current_user_points)

            chore.complete = true
            this.props.editChore(chore)

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