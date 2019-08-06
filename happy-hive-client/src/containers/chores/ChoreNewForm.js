import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
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
        const { name, description, points_value } = this.props.choreFormData 
        return (
            <div>
                <div className="ChoreFormContainer">
                <br/>
                <h3>New Chore</h3>
                <br/>
                    <Form onSubmit={this.handleOnSubmit} className="ChoreForm">
                        <div>
                        <Form.Group controlId="formGroupChoreName">
                            <Form.Label className="FormLabels">Chore Name</Form.Label>
                            <Form.Control size="sm" type="text" name="name" value={name} onChange={this.handleOnChange} placeholder="Enter chore name" />
                        </Form.Group>
                        </div>
                        <div>
                        <Form.Group controlId="ControlTextareaDescription">
                            <Form.Label className="FormLabels">Description</Form.Label>
                            <Form.Control size="sm" as="textarea" rows="3" name="description" value={description} 
                                onChange={this.handleOnChange} placeholder="Enter description" />
                        </Form.Group>
                        </div>
                        <div>
                        <Form.Group controlId="formGroupPointsValue">
                            <Form.Label className="FormLabels">Points Value</Form.Label>
                            <Form.Control size="sm" type="textarea" rows="1" cols="11" name="points_value" value={points_value} onChange={this.handleOnChange} placeholder="Points value" />
                        </Form.Group>
                        </div>
                        <br/>
                        <Button size="xs" variant="outline-info" type="submit">
                            Add Chore
                        </Button>

                    </Form>
                {/* <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <label htmlFor="name">Chore Name: 
                        <textarea rows="1" cols="100%" name="name" value={name} onChange={this.handleOnChange} />
                        </label>
                    </div>
                    
                    <div>
                        <label htmlFor="description">Description: 
                        <textarea 
                            rows="3" 
                            cols="22"
                            name="description" 
                            value={description} 
                            onChange={this.handleOnChange} 
                        />
                        </label>
                    </div>
                    
                    <div>
                        <label htmlFor="points_value">Points Value: 
                        <input type="text" name="points_value" value={points_value} onChange={this.handleOnChange} />
                        </label>
                    </div>
                    <br/>
                    <Button size="xs" variant="outline-info" type="submit">
                        Add Chore
                    </Button>
                </form> */}
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
