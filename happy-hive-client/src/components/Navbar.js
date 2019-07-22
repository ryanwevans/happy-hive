import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Happy Hive</Navbar.Brand>
            <Navbar className="mr-auto">
                {/* <NavLink style={{ marginRight: '10px' }} to='/'>Home</NavLink> */}
                <NavLink style={{ marginRight: '10px' }} to='/chores'>Chores</NavLink>
                {/* <NavLink style={{ marginRight: '10px' }} to='/chores/new'>Add Chore</NavLink> */}
                <NavLink style={{ marginRight: '10px' }} to='/rewards'>Rewards</NavLink>
            </Navbar>
        </Navbar>
    )
}

export default NavBar;


        // <div className="Navbar">
        //     <NavLink style={{ marginRight: '10px' }} to='/'>
        //         Happy Hive
        //     </NavLink>
        //     <NavLink style={{ marginRight: '10px' }} to='/chores'>
        //         Chores
        //     </NavLink>
        //     <NavLink style={{ marginRight: '10px' }} to='/rewards'>
        //         rewards
        //     </NavLink>
        // </div>