import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getChores } from '../actions/chores';
import NavBar from '../components/Navbar';
import './App.css';

import Chores from './Chores';
import Chore from './Chore';
import ChoreForm from './ChoreForm';
import Rewards from './Rewards';
import RewardForm from './RewardForm';

class App extends Component {

    componentDidMount() {
        this.props.getChores()
    }

    render() {
        return (
            <Router>
                <div className="grid App" id="App">
                    <div className="span-col-2">
                        <NavBar />
                        <Switch>
                            <Route exact path='/' render={ () => <div><br/><h2>Welcome to Happy Hive</h2></div>} />

                            <Route exact path='/chores/new' render={ () => (<ChoreForm />) } />

                            <Route exact path='/chores/:id' 
                                render={ (routerProps) => (<Chore {...routerProps} chores={this.props.chores}/>) } />

                            <Route exact path='/chores' render={ routerProps => (<Chores {...routerProps} chores={this.props.chores}/>) } />

                            <Route exact path='/rewards/new' render={ () => (<RewardForm />) } />

                            <Route exact path='/rewards' render={ () => (<Rewards />) } />
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
        chores: state.chores
    })
}

export default connect(mapStateToProps, { getChores })(App);