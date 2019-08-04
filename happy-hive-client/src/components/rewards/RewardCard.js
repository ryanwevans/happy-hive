import React from 'react';
import { Link } from 'react-router-dom';
import './Rewards.css';

const RewardCard = ({ reward, rewards, achievers }) => {
    
    return (
        <div className="RewardCard">
            <Link to={{
                pathname:`/rewards/${reward.id}`,
                rewardProps: reward,
                rewardsProps: rewards,
                achieversProps: achievers
                }}>
                <div>
                    <h4>{reward.name}</h4>
                    <p>{reward.description}</p>
                    <p><em>Value: {reward.value}</em></p>
                </div>
            </Link>
        </div>
    )
}

export default RewardCard;