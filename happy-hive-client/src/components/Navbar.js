import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button'


const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Happy Hive</Navbar.Brand>
            <Navbar className="mr-auto">
                {/* <NavLink style={{ marginRight: '10px' }} to='/'>Home</NavLink> */}
                <NavLink style={{ marginRight: '20px' }} to='/chores'>Chores</NavLink>
                <NavLink style={{ marginRight: '20px' }} to='/chores/new'>Add Chore</NavLink>
                <NavLink style={{ marginRight: '20px' }} to='/rewards'>Rewards</NavLink>
                <NavLink style={{ marginRight: '20px' }} to='/rewards/new'>Add Reward</NavLink>
            </Navbar>
            <Navbar bg="dark" variant="dark">
            <Form inline>
                <InputGroup>
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <Button variant="outline-info" type="submit">Submit</Button>
            </Form>
            </Navbar>
        </Navbar>
    )
}

export default NavBar;