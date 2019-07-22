import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createReward } from '../actions/rewards'
import { updateRewardFormData } from '../actions/rewardForm'

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
    } 
    
    render() {
        const { name, description, value, claimed_by, claimed } = this.props.rewardFormData 
        return (
            <div>
                Add a New Reward
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label htmlFor="name">Reward Name: </label>
                        <input type="text" name="name" value={name} onChange={this.handleOnChange} />
                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <input type="textarea" name="description" value={description} onChange={this.handleOnChange} />
                    </div>
                    <div>
                        <label htmlFor="value">Value: </label>
                        <input type="text" name="value" value={value} onChange={this.handleOnChange} />
                    </div>
                    <div>
                        <label htmlFor="claimed_by">Claimed By: </label>
                        <input type="text" name="claimed_by" value={claimed_by} onChange={this.handleOnChange} />
                    </div>
                    <div>
                        <input type="hidden" name="claimed" value={claimed} />
                    </div>
                    <button type="submit">Add Reward</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        rewardFormData: state.rewardFormData
    }
}

export default connect(mapStateToProps, { createReward, updateRewardFormData })(RewardForm);