import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from  'react-router-dom';
import { createReward } from '../actions/rewards';
import { updateRewardFormData } from '../actions/rewardForm';

class RewardForm extends Component {

    handleOnChange = event => {
        const {name, value} = event.target;
        const currentRewardFormData = Object.assign({}, this.props.rewardFormData, 
            {[name]: value});
        this.props.updateRewardFormData(currentRewardFormData);
    }
    
    handleOnSubmit = event => {
        event.preventDefault();
        this.props.createReward(this.props.rewardFormData);
        this.props.history.push('/rewards')
    } 
    
    render() {
        const { name, description, value, claimed, claimed_by } = this.props.rewardFormData 
        return (
            <div>
                <div className="RewardForm">
                <br/>
                <h3>New Reward</h3>
                <br/>
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label htmlFor="name">Reward Name: 
                        <input type="text" name="name" value={name} onChange={this.handleOnChange} />
                        </label>
                    </div>
                    
                    <div>
                        <label htmlFor="description">Description: 
                        <input type="textarea" name="description" value={description} onChange={this.handleOnChange} />
                        </label>
                    </div>
                    
                    <div>
                        <label htmlFor="value">Value: 
                        <input type="text" name="value" value={value} onChange={this.handleOnChange} />
                        </label>
                    </div>
                    
                    <div>
                        <input type="hidden" name="claimed" value={claimed} />
                    </div>
                    <div>
                        <label htmlFor="claimed_by">Claimed By: 
                        <input type="text" name="claimed_by" value={claimed_by} onChange={this.handleOnChange} />
                        </label>
                    </div>
                    <br/>
                    <button type="submit">Add Reward</button>
                </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        rewardFormData: state.rewardFormData
    }
}

export default connect(mapStateToProps, { createReward, updateRewardFormData })
(withRouter(RewardForm));