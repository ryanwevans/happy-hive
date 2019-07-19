import React, { Component } from 'react';
import './App.css'

import Chores from '../containers/Chores'
import Rewards from '../containers/Rewards'

class App extends Component {
    render() {
        return (
            <div className="grid App">
                <div className="span-col-2">Navigation Div</div>
                <div><Chores /></div>
                <div><Rewards /></div>
                <div className="span-col-2">Claimed Rewards</div>
            </div>
        )
    }
}

export default App;