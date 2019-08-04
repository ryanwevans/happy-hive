import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { editAchiever } from '../../actions/achievers';
import { editReward } from '../../actions/rewards';

/* May need to add location.rewardsProps to use for pulling the reward data using the match.params.id so that the forward/back buttons function correctly */

class Reward extends Component {

    render() {
        const { location, history } = this.props;
        
        const reward = location.rewardProps;

        const achievers = this.props.achievers;

        const handleButtonClick = (event) => {
            event.preventDefault();
            claimReward();
        }

        const claimReward = () => {
             // comparison with '==' because current_user_id is a string, achiever.id is integer
            const rewardClaimer = achievers.filter( achiever => achiever.id == sessionStorage.current_user_id)
            rewardClaimer[0].points_earned -= reward.value

            const updatedAchiever = rewardClaimer[0]
            this.props.editAchiever(updatedAchiever)

            // set the sessionStorage.current_user_points to match updated achiever.points
            sessionStorage.current_user_points = updatedAchiever.points_earned

            reward.claimed = true
            this.props.editReward(reward)

            history.push('/rewards')
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