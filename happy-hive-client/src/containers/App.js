import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getChores } from '../actions/chores';
import { getRewards } from '../actions/rewards'
import NavBar from '../components/Navbar';
import './App.css';

import Chores from './Chores';
import Chore from './Chore';
import ChoreForm from './ChoreForm';
import Rewards from './Rewards';
import Reward from './Reward';
import RewardForm from './RewardForm';

class App extends Component {

    componentDidMount() {
        this.props.getChores()
        this.props.getRewards()
    }

    render() {
        return (
            <Router>
                <div className="grid App" id="App">
                    <div className="span-col-2">
                        <NavBar />
                        <Switch>

                            <Route exact path='/' render={ () => <div><br/><h2>Welcome to Happy Hive</h2></div>} />

                            {/* Chores Routes */}
                            <Route exact path='/chores/new' render={ () => (<ChoreForm />) } />

                            <Route exact path='/chores/:id' 
                                render={ (routerProps) => (<Chore {...routerProps} chores={this.props.chores}/>) } />

                            <Route exact path='/chores' render={ routerProps => (<Chores {...routerProps} chores={this.props.chores} />) } />

                            {/* Rewards Routes */}
                            <Route exact path='/rewards/new' render={ () => (<RewardForm />) } />

                            <Route exact path='/rewards/:id' 
                                render={ (routerProps) => (<Reward {...routerProps} rewards={this.props.rewards}/>) } />

                            <Route exact path='/rewards' render={ routerProps => (<Rewards {...routerProps} rewards={this.props.rewards} />) } />

                        </Switch>
                    </div>
                        <div className="span-col-2">Claimed Rewards</div>
                </div>
            </Router>
        )
    }
}

const mapStateToProps = state => {
    return ({
        chores: state.chores,
        rewards: state.rewards
    })
}

export default connect(mapStateToProps, { getChores, getRewards })(App);