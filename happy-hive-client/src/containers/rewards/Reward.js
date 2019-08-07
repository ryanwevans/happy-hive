import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { editAchiever } from '../../actions/achievers';
import { editReward } from '../../actions/rewards';

/* May need to add location.rewardsProps to use for pulling the reward data using the match.params.id so that the forward/back buttons function correctly */

class Reward extends Component {

    render() {
        // I pass 'achievers' as props through the Route in App, but it is 'undefined' here (why?), so I am passing 'achievers' as 'location' props.
        const { rewardProps, achieversProps } = this.props.location;
        const reward = rewardProps;
        const achievers = achieversProps;

        const { editAchiever, editReward, history } = this.props

        const handleButtonClick = (event) => {
            event.preventDefault();
            claimReward();
        }

        const claimReward = () => {
             // comparison with '==' because current_user_id is a string, achiever.id is integer
            const rewardClaimer = achievers.filter( achiever => achiever.id == sessionStorage.current_user_id)
            const updatedAchiever = rewardClaimer[0]

            if (updatedAchiever.points_earned >= reward.value)
                {updatedAchiever.points_earned -= reward.value
                editAchiever(updatedAchiever)

                // set the sessionStorage.current_user_points to match updated achiever.points
                sessionStorage.current_user_points = updatedAchiever.points_earned

                reward.claimed = true
                editReward(reward)

                history.push('/rewards')
            } 
                return(
                    window.alert("You haven't earned enough points to claim this reward!")
                )
            
        }

        return (
            <div className="RewardItem">
                <h3>{ reward && reward.name }</h3>
                <br/>
                <p>{ reward && reward.description}</p>
                <br/>
                <p>Value: { reward && reward.value}</p>
                <Button type="submit" onClick={handleButtonClick}>Claim Reward</Button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return({
        achievers: state.achievers.achievers
    })
}

export default connect(mapStateToProps, { editAchiever, editReward})(withRouter(Reward));