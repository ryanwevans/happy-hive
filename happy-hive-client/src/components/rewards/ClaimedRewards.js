import React, { Component } from 'react';
import ClaimedRewardCard from './ClaimedRewardCard';

class Rewards extends Component {

    render() {
        return (
            <div className="RewardCardContainer">
                <h3 className="RewardsPageTitle">Claimed Rewards</h3>
                <br/>
                <br/>
                { this.props.rewards.filter( reward => reward.claimed === true )
                    .map( reward => {
                        return (
                            <div key={reward.id}>
                                <ClaimedRewardCard reward={reward} achievers={this.props.achievers} />
                            </div>
                        )
                }) }
            </div>
        )
    }
}

export default Rewards;