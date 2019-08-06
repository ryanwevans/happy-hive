import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getChores, editChore } from '../actions/chores';
import { getRewards, editReward } from '../actions/rewards';
import { getAchievers, createAchiever, editAchiever } from '../actions/achievers';
import NavBar from '../components/Navbar';
import './App.css';

import Chores from '../components/chores/Chores';
import Chore from '../components/chores/Chore';
import ChoreNewForm from './chores/ChoreNewForm';
import Rewards from '../components/rewards/Rewards';
import Reward from '../components/rewards/Reward';
import RewardForm from './rewards/RewardForm';

class App extends Component {

    componentDidMount() {
        this.props.getChores()
        this.props.getRewards()
        this.props.getAchievers()
    }

    render() {
        console.log(this.props)
        return (
            <Router>
                <div className="grid App" id="App">
                    <div className="span-col-2">
                        <NavBar
                            achievers={this.props.achievers} 
                            createAchiever={this.props.createAchiever}
                            />

                        <Switch>
                            
                            <Route exact path='/' render={ () => <div><br/><br/><br/><h1>~  Welcome to Happy Hive  ~</h1></div>} />


                            {/* Chores Routes */}
                            <Route exact path='/chores/new' render={ () => (<ChoreNewForm />) } />

                            <Route exact path='/chores/:id' 
                                render={ (routerProps) => (<Chore {...routerProps} chores={this.props.chores} achievers={this.props.achievers} />) } />

                            <Route exact path='/chores' render={ routerProps => (<Chores {...routerProps} chores={this.props.chores} achievers={this.props.achievers} />) } />


                            {/* Rewards Routes */}
                                {/* ** Rename RewardForm to RewardNewForm ** */}
                            <Route exact path='/rewards/new' render={ () => (<RewardForm />) } />

                            <Route exact path='/rewards/:id' 
                                render={ (routerProps) => (<Reward {...routerProps} rewards={this.props.rewards} achievers={this.props.achievers} />) } />

                            <Route exact path='/rewards' render={ routerProps => (<Rewards {...routerProps} rewards={this.props.rewards} achievers={this.props.achievers} />) } />

                        </Switch>
                    </div>
                        {/* <div className="span-col-2">Claimed Rewards</div> */}
                </div>
            </Router>
        )
    }
}

// ** Remove references to 'current_achiever' if stay with using sessionStorage **
const mapStateToProps = state => {
    return ({
        chores: state.chores,
        rewards: state.rewards,
        achievers: state.achievers
    })
}

export default connect(mapStateToProps, 
    { getChores, editChore, getRewards, editReward, getAchievers, createAchiever, editAchiever })(App);