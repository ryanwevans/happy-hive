import React from 'react';
import './Rewards.css';

const RewardCard = ({ reward }) => (
    <div className="RewardCard">
        <h3>{reward.name}</h3>
        <p>{reward.description}</p>
        <p>Value: {reward.value}</p>
    </div>
)

export default RewardCard;