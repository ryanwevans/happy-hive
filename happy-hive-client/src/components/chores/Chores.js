import React, { Component } from 'react';
import ChoreCard from './ChoreCard';

class Chores extends Component {

    render() {
        console.log(this.props.chores)
        
        const renderChoreCards = this.props.chores.map( chore => {
            if (!chore.complete) {
                return (<div key={chore.id}>
                    <ChoreCard chore={chore} chores={this.props.chores}/>
                </div>)
            } return null;
        })

        return (
            <div className="ChoreCardContainer">
                <h3>Chores</h3>
                <br/>
                {renderChoreCards}
            </div>
        )
    }
}

export default Chores;