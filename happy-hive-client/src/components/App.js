import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './Navbar'
import './App.css'

import Chores from '../containers/Chores'
import ChoreForm from '../containers/ChoreForm'
import Rewards from '../containers/Rewards'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="grid App" id="App">
                    <div className="span-col-2">
                        <NavBar />
                        <Route exact path='/' render={() => <div><h2>Welcome to Happy Hive</h2></div>} />
                        <Route path='/chores' render={() => <Chores />} />
                        <Route path='/chores/new' render={() => <ChoreForm />} />
                        <Route path='/rewards' render={() => <Rewards />} />
                    </div>
                    <div className="span-col-2"><p></p></div>
                    <div className="span-col-2">Claimed Rewards</div>
                </div>
            </Router>
        )
    }
}

export default App;