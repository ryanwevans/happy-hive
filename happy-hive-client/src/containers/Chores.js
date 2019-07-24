import React from 'react';
import { Route } from 'react-router-dom';
import ChoreCard from '../components/ChoreCard';
import Chore from './Chore';

const Chores = ({ match, chores}) => (
    <div className="ChoreCardContainer">
        <Route exact path={match.url} render={() => (
            <h3>Chores</h3>
        )} />
        <ChoreCard chores={chores} />
        <Route path={`${match.url}/:choreId`} render={routerProps => 
            <Chore chores={chores} {...routerProps} /> } />
    </div>
)

export default Chores;
