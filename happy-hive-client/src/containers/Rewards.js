import React, { Component } from 'react';

class Rewards extends Component {

    componentDidMount() {
        return fetch('http://localhost:3001/api/rewards')
        .then(resp => resp.json())
        .then(rewardsData => {
            console.log(rewardsData)
        })
        .catch(error => console.log(error))
    }
    
    render() {
        return (
            <div>
                <h2>Rewards</h2>
            </div>
        )
    };
}

export default Rewards;