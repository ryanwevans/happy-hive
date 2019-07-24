import React from 'react';

const Reward = ({ match, rewards }) => {
    const rewardId = match.params.id - 1
    const reward = rewards[rewardId]
    return (
        <div>
            <h3>{ reward && reward.name }</h3>
            <p>{ reward && reward.description}</p>
            
        </div>
    )
}

export default Reward;