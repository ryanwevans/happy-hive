import React, { Component } from 'react';
import { connect } from 'react-redux';

class Chore extends Component {
    
    render() {
        const chore = this.props.chores.find( chore => chore.id === this.props.match.params.id)
        console.log(this.props.match.params.id)
        console.log(this.props.chores)
        return(
            <div>Chore {chore}</div>
        )
    }
}

const mapStateToProps = state => {
    return ({
        chores: state.chores
    })
}

export default connect(mapStateToProps)(Chore);