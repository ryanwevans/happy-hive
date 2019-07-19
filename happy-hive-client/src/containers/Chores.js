import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getChores } from '../actions/chores';
import ChoreCard from '../components/ChoreCard'
class Chores extends Component {

    componentDidMount() {
        this.props.getChores();
    }

    // listChores = () => {
    //     return this.props.chores
    // }
    
    render() {
        return (
            <div>
                <h2>Chores</h2>
                { this.props.chores.map(chore => 
                    <ChoreCard key={chore.id} chore={chore}/>
                    ) }
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