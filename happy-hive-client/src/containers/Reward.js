import React from 'react';

const Reward = ({ match, rewards }) => {
    const rewardId = match.params.id - 1
    const reward = rewards[rewardId]
    return (
        <div className="RewardItem">
            <h3>{ reward && reward.name }</h3>
            <br/>
            <p>{ reward && reward.description}</p>
            <br/>
            <p>Value: { reward && reward.value}</p>
        </div>
    )
}

export default Reward;