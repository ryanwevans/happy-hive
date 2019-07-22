import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getChores } from '../actions/chores';
import ChoreCard from '../components/ChoreCard'
import ChoreForm from './ChoreForm';


class Chores extends Component {

    componentDidMount() {
        this.props.getChores()
    }
    
    render() {
        console.log(this.props.chores)
        return (
            <div>
                <div className="ChoreCardContainer">
                    <h2>Chores</h2>
                    <div className="span-col-2">
                    { this.props.chores.map(chore => 
                        <ChoreCard chore={chore}/>)}
                    </div>
                </div>
                <span>
                    <ChoreForm />
                </span>
            </div>
        )
    };
}

const mapStateToProps = state => {
    return ({
        chores: state.chores
    })
}

export default connect(mapStateToProps, { getChores })(Chores);