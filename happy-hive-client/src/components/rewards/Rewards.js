import React, { Component } from 'react';
import RewardCard from './RewardCard';

class Rewards extends Component {

    render() {
        
        return (
            <div className="RewardCardContainer">
                <h3>Rewards</h3>
                <br/>
                {this.props.rewards.map( reward => {
                    if (reward.claimed === false) {
                        return (
                            <div key={reward.id}>
                                <RewardCard reward={reward} rewards={this.props.rewards} achievers={this.props.achievers} />
                            </div>)
                        }
                    })
                }

            </div>
        )
    }
}

export default Rewards;