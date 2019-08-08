import React, { Component } from 'react';
import './Achievers.css';

class AchieverCard extends Component {

    render() {
        const { achiever } = this.props;
    
        return (
            <div className="AchieverCard">

                <div>
                    <br/>
                    <h4><em>{achiever.name}</em></h4>
                    <br/>
                    <p>Points: {achiever.points_earned}</p>
                </div>
                
            </div>
        )
    }
}

export default AchieverCard;