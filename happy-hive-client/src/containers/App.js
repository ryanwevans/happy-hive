import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getChores, editChore } from '../actions/chores';
import { getRewards, editReward } from '../actions/rewards';
import { getAchievers, createAchiever, editAchiever } from '../actions/achievers';
import NavBar from '../components/Navbar';
import './App.css';

import Chores from '../components/chores/Chores';
import Chore from './chores/Chore';
import ChoreNewForm from './chores/ChoreNewForm';
import Rewards from '../components/rewards/Rewards';
import Reward from './rewards/Reward';
import RewardNewForm from './rewards/RewardNewForm';
import Achievers from '../components/achievers/Achievers';
import ClaimedRewards from '../components/rewards/ClaimedRewards';

class App extends Component {

    componentDidMount() {
        this.props.getChores()
        this.props.getRewards()
        this.props.getAchievers()
    }

    render() {
        console.log(sessionStorage)
        return (
            <Router>
                <div className="grid App" id="App">
                    <div className="span-col-2">
                        <NavBar
                            achievers={this.props.achievers} 
                            createAchiever={this.props.createAchiever}
                            />

                        <Switch>
                            {/* index page 'hive' hexagons */}
                            <Route exact path='/' render={ () => 
                                <React.Fragment>
                                    <div>
                                    <div id="hex1" className="hexagon-wrapper">
                                        <div id="color1" className="hexagon"></div>
                                    </div>
                                    <div id="hex1" className="hexagon-wrapper">
                                        <div id="color1" className="hexagon"></div>
                                    </div>
                                    <div id="hex1" className="hexagon-wrapper">
                                        <div id="color1" className="hexagon"></div>
                                    </div>
                                    <div id="hex1" className="hexagon-wrapper">
                                        <div id="color1" className="hexagon"></div>
                                    </div>
                                    <h1 className="HappyHiveText">~  Happy Hive  ~</h1>
                                    </div>
                                    <div id="hex1" className="hexagon-wrapper">
                                        <div id="color1" className="hexagon"></div>
                                    </div>
                                    <div id="hex1" className="hexagon-wrapper">
                                        <div id="color1" className="hexagon"></div>
                                    </div>
                                    <div id="hex1" className="hexagon-wrapper">
                                        <div id="color1" className="hexagon"></div>
                                    </div>
                                    <div id="hex1" className="hexagon-wrapper">
                                        <div id="color1" className="hexagon"></div>
                                    </div>
                                    <br/>
                                    <div id="hex1" className="hexagon-wrapper">
                                        <div id="color1" className="hexagon"></div>
                                    </div>
                                    <div id="hex1" className="hexagon-wrapper">
                                        <div id="color1" className="hexagon"></div>
                                    </div>
                                    <div id="hex1" className="hexagon-wrapper">
                                        <div id="color1" className="hexagon"></div>
                                    </div>
                                    <div id="hex1" className="hexagon-wrapper">
                                        <div id="color1" className="hexagon"></div>
                                    </div>
                                </React.Fragment>
                            } />


                            {/* Chores Routes */}
                            <Route exact path='/chores/new' render={ () => (<ChoreNewForm />) } />

                            <Route exact path='/chores/:id' 
                            render={ (routerProps) => (<Chore {...routerProps} chores={this.props.chores} achievers={this.props.achievers} />) } />

                            <Route exact path='/chores' render={ routerProps => (<Chores {...routerProps} chores={this.props.chores} achievers={this.props.achievers} />) } />


                            {/* Rewards Routes */}
                            <Route exact path='/rewards/new' render={ () => (<RewardNewForm />) } />
                            
                            <Route exact path='/rewards/claimed' render={ () => (<ClaimedRewards rewards={this.props.rewards} />) } />

                            <Route exact path='/rewards/:id'
                                render={ (routerProps) => (
                                <Reward {...routerProps} 
                                    // reward={this.props.rewards.find(reward => reward.id === match.params.id)} 
                                    rewards={this.props.rewards} 
                                    achievers={this.props.achievers} />) } />

                            <Route exact path='/rewards' render={ routerProps => (<Rewards {...routerProps} rewards={this.props.rewards} achievers={this.props.achievers} />) } />
                            
                            {/* Achievers Route */}
                            <Route exact path='/achievers' render={ routerProps => (<Achievers {...routerProps} achievers={this.props.achievers} />) } />

                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}

const mapStateToProps = state => {
    return ({
        chores: state.chores,
        rewards: state.rewards,
        achievers: state.achievers
    })
}

export default connect(mapStateToProps, 
    { getChores, editChore, getRewards, editReward, getAchievers, createAchiever, editAchiever })(App);