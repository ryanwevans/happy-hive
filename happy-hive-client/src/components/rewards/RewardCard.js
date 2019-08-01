import React from 'react';
import { Link } from 'react-router-dom';
import './Rewards.css';

const RewardCard = ({ reward, rewards }) => {
    
    return (
        <div className="RewardCard">
            <Link to={{
                pathname:`/rewards/${reward.id}`,
                rewardProps: reward,
                rewardsProps: rewards
                }}>
                    <h4>{reward.name}</h4>
                    <p>{reward.description}</p>
                    <p><em>Value: {reward.value}</em></p>
            </Link>
        </div>
    )
}

export default RewardCard;