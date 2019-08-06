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
                            <br/>
                            <Form.Control className="PointsInput" size="sm" type="textarea" name="points_value" value={points_value} onChange={this.handleOnChange} />
                        </Form.Group>
                        </div>
                        <br/>
                        <Button size="xs" variant="outline-info" type="submit">
                            Add Chore
                        </Button>
                    </Form>
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
