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
            <div className="RewardCardContainer">
                <h2>Rewards</h2>
                {this.props.rewards.map(reward => 
                <RewardCard key={reward.id} reward={reward} />
                )}
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