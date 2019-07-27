import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createChore } from '../../actions/chores'
import { withRouter } from 'react-router-dom';
import { updateChoreFormData } from '../../actions/choreForm'

class ChoreNewForm extends Component {

    handleOnChange = event => {
        const {name, value} = event.target;
        const currentChoreFormData = Object.assign({}, this.props.choreFormData, 
            {[name]: value});
        this.props.updateChoreFormData(currentChoreFormData);
    }
    
    handleOnSubmit = event => {
        event.preventDefault();
        this.props.createChore(this.props.choreFormData);
        this.props.history.push('/chores');
    } 
    
    render() {
        const { name, description, points_value, assigned_to, complete } = this.props.choreFormData 
        return (
            <div>
                <div className="ChoreForm">
                <br/>
                <h3>New Chore</h3>
                <br/>
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label htmlFor="name">Chore Name: 
                        <input type="text" name="name" value={name} onChange={this.handleOnChange} />
                        </label>
                    </div>
                    
                    <div>
                        <label htmlFor="description">Description: 
                        <input type="textarea" name="description" value={description} onChange={this.handleOnChange} />
                        </label>
                    </div>
                    
                    <div>
                        <label htmlFor="points_value">Points Value: 
                        <input type="text" name="points_value" value={points_value} onChange={this.handleOnChange} />
                        </label>
                    </div>
                    
                    <div>
                        <label htmlFor="assigned_to">Assigned To: 
                        <input type="text" name="assigned_to" value={assigned_to} onChange={this.handleOnChange} />
                        </label>
                    </div>
                    
                    <div>
                        <label htmlFor="complete">Complete? 
                        <input type="checkbox" name="complete" value={complete} onChange={this.handleOnChange} />
                        </label>
                    </div>
                    <br/>
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

export default connect(mapStateToProps, { createChore, updateChoreFormData })(withRouter(ChoreNewForm));
