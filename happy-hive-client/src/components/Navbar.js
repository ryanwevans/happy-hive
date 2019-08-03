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
        // const achieverFormData = {name: nameInput, points_earned: 0};

        if (!checkForAchiever(nameInput)===false) {
            const foundAchiever = checkForAchiever(nameInput)
            props.setAchiever(foundAchiever)
        } else {
            props.createAchiever({name: nameInput, points_earned: 0})
        }
        props.history.push('/chores')
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

    console.log(sessionStorage)
    return (
        <Navbar bg="dark" variant="dark">

            <Navbar.Brand href="/">Happy Hive</Navbar.Brand>

            <Navbar className="mr-auto">
                <NavLink style={{ marginRight: '20px' }} to='/chores'>Chores</NavLink>
                <NavLink style={{ marginRight: '20px' }} to='/chores/new'>Add Chore</NavLink>
                <NavLink style={{ marginRight: '20px' }} to='/rewards'>Rewards</NavLink>
                <NavLink style={{ marginRight: '20px' }} to='/rewards/new'>Add Reward</NavLink>
            </Navbar>
             
            { sessionStorage.current_user_name !== "undefined"
            ? <React.Fragment>
                <Navbar bg="dark" variant="dark">
                <Form inline onSubmit={handleOnLogout}>
                    <InputGroup size="xs" variant="dark">
                        <Button size="xs" variant="outline-info" type="submit">Logout</Button>
                        <Navbar className="justify-content">
                            <React.Fragment>
                                <Navbar.Text>
                                <div>
                                    Welcome, <strong>{sessionStorage.current_user_name}</strong><br/>
                                    {/* <em>points: {sessionStorage.current_user_points}</em> */}
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