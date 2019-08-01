import React, { Component } from 'react';
import RewardCard from './RewardCard';

class Rewards extends Component {

    render() {
        console.log(this.props.rewards)

        const renderRewardCards = this.props.rewards.map( reward => {
            if (!reward.claimed) {
                return (<div key={reward.id}>
                    <RewardCard reward={reward} rewards={this.props.rewards}/>
                </div>)
            } return null;
        });

        return (
            <div className="RewardCardContainer">
                <h3>Rewards</h3>
                <br/>
                {renderRewardCards}
            </div>
        );
    }
};

export default Rewards;