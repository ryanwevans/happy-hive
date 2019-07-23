import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './Navbar'
import './App.css'

import Chores from '../containers/Chores'
import Chore from '../containers/Chore'
import ChoreForm from '../containers/ChoreForm'
import Rewards from '../containers/Rewards'
import RewardForm from '../containers/RewardForm'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="grid App" id="App">
                    <div className="span-col-2">
                        <NavBar />
                        <Switch>
                            <Route exact path='/' render={() => <div><br/><h2>Welcome to Happy Hive</h2></div>} />
                            <Route path='/chores/:id' component={Chore} />
                            <Route path='/chores/new' component={ChoreForm} />
                            <Route path='/chores' component={Chores} />
                            <Route path='/rewards/new' component ={RewardForm} />
                            <Route path='/rewards' component={Rewards} />
                        </Switch>
                    </div>
                    <div className="span-col-2">Claimed Rewards</div>
                </div>
            </Router>
        )
    }
}

export default App;