import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'
import { withRouter } from 'react-router-dom';


const NavBar = (props) => {

    // const handleOnSubmit = (event) => {
    //     debugger
    //     event.prevenDefault();
    //     const formNameValue = event.target.elements.name.value;
    //     const currentAcheiver = props.acheivers.find( acheiver => acheiver.name === formNameValue)
    //     console.log(currentAcheiver)
    // }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const nameValue = event.target.elements.name.value;
        const acheiverFormData = {name: nameValue, points_earned: 0};
        props.setAcheiver(nameValue);
        console.log(acheiverFormData)
        // props.createAcheiver(acheiverFormData)
    }


    return (
        <Navbar bg="dark" variant="dark">

            <Navbar.Brand href="/">Happy Hive</Navbar.Brand>
            <Navbar className="mr-auto">
                <NavLink style={{ marginRight: '20px' }} to='/chores'>Chores</NavLink>
                <NavLink style={{ marginRight: '20px' }} to='/chores/new'>Add Chore</NavLink>
                <NavLink style={{ marginRight: '20px' }} to='/rewards'>Rewards</NavLink>
                <NavLink style={{ marginRight: '20px' }} to='/rewards/new'>Add Reward</NavLink>
            </Navbar>
            
            <Navbar bg="dark" variant="dark">
                {/* <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                    Signed in as: {props.current_acheiver}
                    </Navbar.Text>
                </Navbar.Collapse> */}
                <Form inline onSubmit={handleOnSubmit}>
                    <InputGroup size="sm">
                        <InputGroup.Prepend size="sm">
                            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            type="text"
                            name="name"
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                        <Button size="sm" variant="outline-info" type="submit">Sign In</Button>
                    </InputGroup>
                </Form>

            </Navbar>

        </Navbar>
    )
}

export default withRouter(NavBar);