import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getChores, editChore } from '../actions/chores';
import { getRewards } from '../actions/rewards';
import { getAchievers, setAchiever, createAchiever } from '../actions/achievers';
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

    completeChore = (chore) => {
        console.log(chore)
        // this.props.editChore(chore)
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
                            setAchiever={this.props.setAchiever} 
                            current_achiever={this.props.current_achiever}/>

                        <Switch>
                            
                            <Route exact path='/' render={ () => <div><br/><br/><br/><h1>~  Welcome to Happy Hive  ~</h1></div>} />

                            {/* Chores Routes */}
                            <Route exact path='/chores/new' render={ () => (<ChoreNewForm />) } />

                            <Route exact path='/chores/:id' 
                                render={ (routerProps) => (<Chore {...routerProps} chores={this.props.chores} completeChore={this.completeChore} />) } />

                            <Route exact path='/chores' render={ routerProps => (<Chores {...routerProps} chores={this.props.chores} />) } />

                            {/* Rewards Routes */}
                            <Route exact path='/rewards/new' render={ () => (<RewardForm />) } />

                            <Route exact path='/rewards/:id' 
                                render={ (routerProps) => (<Reward {...routerProps} rewards={this.props.rewards}/>) } />

                            <Route exact path='/rewards' render={ routerProps => (<Rewards {...routerProps} rewards={this.props.rewards} />) } />

                        </Switch>
                    </div>
                        {/* <div className="span-col-2">Claimed Rewards</div> */}
                </div>
            </Router>
        )
    }
}

const mapStateToProps = state => {
    return ({
        chores: state.chores,
        rewards: state.rewards,
        achievers: state.achievers.achievers,
        current_achiever: state.achievers.current_achiever
    })
}

export default connect(mapStateToProps, 
    { getChores, editChore, getRewards, getAchievers, createAchiever, setAchiever })(App);