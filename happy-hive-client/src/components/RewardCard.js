import React from 'react';
import { Link } from 'react-router-dom';
import './Rewards.css';

const RewardCard = ({ reward }) => {
    return (
        <div className="ChoreCard">
            <Link to={`/rewards/${reward.id}`}>
                <h4>{reward.name}</h4>
                <textbox>{reward.description}</textbox>
                <br/>
                <p>Value: {reward.value}</p>
            </Link>
        </div>
    )
}

export default RewardCard;