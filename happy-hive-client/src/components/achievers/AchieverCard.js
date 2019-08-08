import React, { Component } from 'react';
import './Achievers.css';

class AchieverCard extends Component {

    render() {
        const { achiever } = this.props;
    
        return (
            <div className="AchieverCard">

                <div>
                    <br/>
                    <h4>{achiever.name}</h4>
                    <br/>
                    <p><em>Points: {achiever.points_earned}</em></p>
                </div>
                
            </div>
        )
    }
}

export default AchieverCard;