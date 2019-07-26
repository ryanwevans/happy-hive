import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getChores } from '../actions/chores';
import { getRewards } from '../actions/rewards';
import { getAcheivers, setAcheiver, createAcheiver } from '../actions/acheivers';
import NavBar from '../components/Navbar';
import './App.css';

import Chores from './Chores';
import Chore from './Chore';
import ChoreNewForm from './ChoreNewForm';
import Rewards from './Rewards';
import Reward from './Reward';
import RewardForm from './RewardForm';

class App extends Component {

    componentDidMount() {
        this.props.getChores()
        this.props.getRewards()
        this.props.getAcheivers()
    }

    render() {
        console.log(this.props)
        return (
            <Router>
                <div className="grid App" id="App">
                    <div className="span-col-2">
                        <NavBar acheivers={this.props.acheivers} createAcheiver={this.props.createAcheiver} setAcheiver={this.props.setAcheiver} current_acheiver={this.props.current_acheiver}/>
                        <Switch>
                            
                            <Route exact path='/' render={ () => <div><br/><br/><br/><h1>~  Welcome to Happy Hive  ~</h1></div>} />

                            {/* Chores Routes */}
                            <Route exact path='/chores/new' render={ () => (<ChoreNewForm />) } />

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
        acheivers: state.acheivers,
        current_acheiver: state.acheivers.current_acheiver
    })
}

export default connect(mapStateToProps, { getChores, getRewards, getAcheivers,createAcheiver, setAcheiver })(App);