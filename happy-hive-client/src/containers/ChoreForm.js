import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createChore } from '../actions/chores'
import { updateChoreFormData } from '../actions/choreForm'

class ChoreForm extends Component {

    handleOnChange = event => {
        const {name, value} = event.target;
        const currentChoreFormData = Object.assign({}, this.props.choreFormData, 
            {[name]: value});
        this.props.updateChoreFormData(currentChoreFormData);
    }
    
    handleOnSubmit = event => {
        event.preventDefault();
        this.props.createChore(this.props.choreFormData);
    } 
    
    render() {
        const { name, description, points_value, assigned_to, complete } = this.props.choreFormData 
        return (
            <div>
                <div className="ChoreFormContainer">
                <br/>
                <h2>Add a New Chore</h2>
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label htmlFor="name">Chore Name: </label>
                        <input type="text" name="name" value={name} onChange={this.handleOnChange} />
                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <input type="textarea" name="description" value={description} onChange={this.handleOnChange} />
                    </div>
                    <div>
                        <label htmlFor="points_value">Points Value: </label>
                        <input type="text" name="points_value" value={points_value} onChange={this.handleOnChange} />
                    </div>
                    <div>
                        <label htmlFor="assigned_to">Assigned To: </label>
                        <input type="text" name="assigned_to" value={assigned_to} onChange={this.handleOnChange} />
                    </div>
                    <div>
                        <label htmlFor="complete">Complete? </label>
                        <input type="checkbox" name="complete" value={complete} onChange={this.handleOnChange} />
                    </div>
                    <button type="submit">Add Chore</button>
                </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        choreFormData: state.choreFormData
    }
}

export default connect(mapStateToProps, { createChore, updateChoreFormData })(ChoreForm);