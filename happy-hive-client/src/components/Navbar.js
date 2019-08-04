import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';


const NavBar = (props) => {
    
    const checkForAchiever = (name) => {
        const isAchiever = props.achievers.find( achiever => achiever.name === name)
        if (isAchiever && isAchiever.name.length > 0) {
            return isAchiever
        } return false
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const nameInput = event.target.elements.name.value;

        if (checkForAchiever(nameInput) !== false) {
            const foundAchiever = checkForAchiever(nameInput)
            sessionStorage.setItem('current_user_name', foundAchiever.name)
            sessionStorage.setItem('current_user_id', foundAchiever.id)
            sessionStorage.setItem('current_user_points', foundAchiever.points_earned)
        } else {
            props.createAchiever({name: nameInput, points_earned: 0})
        }
        // props.history.push('/chores')
    }

    const handleOnLogout = event => {
        event.preventDefault();
        sessionStorage.clear();
        props.history.push('/')
    }

    return (
        <Navbar bg="dark" variant="dark" size="sm">

            <Navbar.Brand href="/">Happy Hive</Navbar.Brand>

            <Navbar className="mr-auto">
                <NavLink style={{ marginRight: '20px' }} to='/chores'>Chores</NavLink>
                <NavLink style={{ marginRight: '20px' }} to='/chores/new'>Add Chore</NavLink>
                <NavLink style={{ marginRight: '20px' }} to='/rewards'>Rewards</NavLink>
                <NavLink style={{ marginRight: '20px' }} to='/rewards/new'>Add Reward</NavLink>
            </Navbar>
             
            {/* Load 'sign in' form or display signed in user and 'log out' button */}
            { sessionStorage.current_user_name
            ? <React.Fragment>
                <Navbar bg="dark" variant="dark">
                <Form inline onSubmit={handleOnLogout}>
                    <InputGroup size="xs" variant="dark">
                        <Button size="xs" variant="outline-info" type="submit">Logout</Button>
                        <Navbar className="justify-content">
                            <React.Fragment>
                                <Navbar.Text>
                                <div className="welcome">
                                    Welcome, <strong>{sessionStorage.current_user_name}</strong><br/>
                                    <em className="points">points: {sessionStorage.current_user_points}</em>
                                </div>
                                </Navbar.Text>
                            </React.Fragment>
                        </Navbar>
                    </InputGroup>
                </Form>
                </Navbar>
             </React.Fragment>
            : <Navbar bg="dark" variant="dark">
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
            }

        </Navbar>
    )
}

export default withRouter(NavBar);