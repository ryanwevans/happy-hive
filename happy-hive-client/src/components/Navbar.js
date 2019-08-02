import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { withRouter } from 'react-router-dom';


const NavBar = (props) => {
    console.log(props)
    const checkForAchiever = (name) => {
        const isAchiever = props.achievers.find( achiever => achiever.name === name)
        return isAchiever && isAchiever.name.length > 0
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const achieverFormData = {name: name, points_earned: 0};

        if (checkForAchiever(name)) {
            console.log(checkForAchiever(name))
            props.setAchiever(name)
        } else {
            props.createAchiever(achieverFormData)
        }
    }

    const handleOnLogout = event => {
        event.preventDefault();
        sessionStorage.clear();
        props.setAchiever('')
        props.history.push('/')
    }

    // const signInGreeting = () => {
    //     console.log(props.current_achiever)
        // <Navbar bg="dark" variant="dark">
        //     <Navbar.Collapse className="justify-content-end">
        //         <Navbar.Text>
        //         Signed in as: {props.current_achiever.name}
        //         </Navbar.Text>
        //     </Navbar.Collapse>
        // </Navbar>
    // }

    console.log(props.current_achiever)
    return (
        <Navbar bg="dark" variant="dark">

            <Navbar.Brand href="/">Happy Hive</Navbar.Brand>

            <Navbar className="mr-auto">
                <NavLink style={{ marginRight: '20px' }} to='/chores'>Chores</NavLink>
                <NavLink style={{ marginRight: '20px' }} to='/chores/new'>Add Chore</NavLink>
                <NavLink style={{ marginRight: '20px' }} to='/rewards'>Rewards</NavLink>
                <NavLink style={{ marginRight: '20px' }} to='/rewards/new'>Add Reward</NavLink>
            </Navbar>
             
            { props.current_achiever.length > 0
            ? <React.Fragment>
                <Navbar bg="dark" variant="dark">
                <Form inline onSubmit={handleOnLogout}>
                    <InputGroup size="sm" variant="dark">
                        <Button size="sm" variant="outline-info" type="submit">Logout</Button>
                        <Navbar className="justify-content">
                            <React.Fragment>
                                <Navbar.Text>
                                <div>
                                    Welcome, {props.current_achiever}
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