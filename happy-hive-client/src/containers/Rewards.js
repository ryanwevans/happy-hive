import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getRewards } from '../actions/rewards';
import RewardCard from '../components/RewardCard';


class Rewards extends Component {

    componentDidMount() {
        this.props.getRewards()
    };
    
    render() {
        return (
            <div>
                <div className="RewardCardContainer">
                    <h2>Rewards</h2>
                    <div className="span-col-2">
                    { this.props.rewards.map(reward => 
                        !reward.claimed ?
                        <RewardCard key={reward.id} reward={reward} /> :
                        null
                        )}
                    </div>
                </div>
            </div>
        )
    };
}

const mapStateToProps = state => {
    return ({
        rewards: state.rewards
    })
}

export default connect(mapStateToProps, { getRewards })(Rewards);