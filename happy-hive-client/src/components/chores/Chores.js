import React, { Component } from 'react';
import ChoreCard from './ChoreCard';

class Chores extends Component {

    render() {
        return (
            <div className="ChoreCardContainer">
                <h3>Chores</h3>
                <br/>
                { this.props.chores.filter( chore => chore.complete === false )
                    .map( chore => {
                        return (
                            <div key={chore.id}>
                                <ChoreCard chore={chore} chores={this.props.chores} achievers={this.props.achievers} />
                            </div>
                        )
                }) }
            </div>
        )
    }
}

export default Chores;