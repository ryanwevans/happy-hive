import React from 'react';
import { Link } from 'react-router-dom';
import './Chores.css'

const ChoreCard = ({ chore }) => {
    console.log(chore)
    return (
        <div className="ChoreCard">
            <Link to={`/chores/${chore.id}`}>
                <h4>{chore.name}</h4>
                <p>Points: {chore.points_value}</p>
            </Link>
        </div>
    )
}

// const ChoreCard = ({chores}) => {
//     console.log(Object.keys(chores))
//     console.log(chores)
//     const renderChoreCards = Object.keys(chores).map( choreID => 
//         <div key={choreID} className="ChoreCard">
//             <Link to={`/chores/${choreID}`}>
//                 <h4>{chores[choreID].name}</h4>
//                 <p>Points: {chores[choreID].points_value}</p>
//             </Link>
//         </div>
//         )

//     return (
//         <div>
//             { renderChoreCards }
//         </div> 
//     )
// }

export default ChoreCard;