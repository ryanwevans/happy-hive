import React, { Component } from 'react';
import ChoreCard from './ChoreCard';

class Chores extends Component {

    render() {
        console.log(this.props.chores)
        return (
            <div className="ChoreCardContainer">
                <h3>Chores</h3>
                <br/>
                {this.props && this.props.chores.map( chore => {
                    if (chore.complete === false) {
                        return (
                            <div key={chore.id}>
                                <ChoreCard chore={chore} chores={this.props.chores} achievers={this.props.achievers} />
                            </div>)
                        }
                    })  
                }
            </div>
        )
    }
}

export default Chores;