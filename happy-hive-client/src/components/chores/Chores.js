import React, { Component } from 'react';
import ChoreCard from './ChoreCard';

class Chores extends Component {

    render() {

        return (
            <div className="ChoreCardContainer">
                <h3>Chores</h3>
                <br/>
                {/* Next line returns error 'this.props.chores.map is not a function' when clicking 'complete chore' and editChore(chore) is executed. It doesn't error if editChore(chore) is commented out... */}
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