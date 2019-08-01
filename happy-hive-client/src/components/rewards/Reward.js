import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';

class Reward extends Component {
    render() {
        const { location, history, claimReward } = this.props;
        
        const reward = location.rewardProps

        const handleButtonClick = (event) => {
            event.preventDefault();
            claimReward(reward);
            // history.push('/rewards');
        }

        return (
            <div className="RewardItem">
                <h3>{ reward && reward.name }</h3>
                <br/>
                <p>{ reward && reward.description}</p>
                <br/>
                <p>Value: { reward && reward.value}</p>
                <Button type="submit" onClick={handleButtonClick}>Redeem</Button>
            </div>
        )
    }
}

export default (withRouter(Reward));