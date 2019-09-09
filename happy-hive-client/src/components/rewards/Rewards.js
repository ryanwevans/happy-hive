import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import RewardCard from './RewardCard';

class Rewards extends Component {

    render() {
        const { rewards, achievers } = this.props
        return (
            <div className="RewardCardContainer">
                <h3 className="RewardsPageTitle">Rewards</h3>
                <Button variant="outline-info" size="sm" href="/rewards/new">New Reward</Button>
                <br/><br/>
                <Button variant="outline-info" size="sm" href="/rewards/claimed">View Claimed Rewards</Button>
                <br/>
                <br/>
                { rewards.filter( reward => reward.claimed === false )
                    .map( reward => {
                        return (
                            <div key={reward.id}>
                                <RewardCard reward={reward} rewards={rewards} achievers={achievers} />
                            </div>
                        )
                }) }
            </div>
        )
    }
}

export default Rewards;