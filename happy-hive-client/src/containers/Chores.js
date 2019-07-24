import React from 'react';
import { Route, Link } from 'react-router-dom';
import ChoreCard from '../components/ChoreCard';
import Chore from './Chore';

const Chores = ({ match, chores }) => {
    const renderChoreCards = Object.keys(chores).map( chore => 
        <div key={chore}>
            <ChoreCard chore={chores[chore]}/>
        </div>)

    return (
        <div className="ChoreCardContainer">
            {renderChoreCards}
        </div>
    )
}
    
// const Chores = ({ match, chores }) => (
//     <div className="ChoreCardContainer">
//         <Route exact path={match.url} render={() => (
//             <h3>Chores</h3>
//         )} />
//         <ChoreCard chores={chores} />
//         <Route path={`chores/:choreId`} render={routerProps => 
//             <Chore chores={chores} {...routerProps} /> } />
//     </div>
// )

export default Chores;
