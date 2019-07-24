import React from 'react';
import RewardCard from '../components/RewardCard';

const Rewards = ({ rewards }) => {
    const renderRewardCards = Object.keys(rewards).map( rewardID => 
        <div key={rewardID}>
            <RewardCard reward={rewards[rewardID]}/>
        </div>)

    return (
        <div className="RewardCardContainer">
            <h3>Rewards</h3>
            <br/>
            {renderRewardCards}
        </div>
    )
    };

export default Rewards;