import { resetChoreFormData } from "./choreForm";

const API_URL = process.env.REACT_APP_API_URL

//  ** Action Creators **
const fetchChores = chores => {
    return {
        type: 'FETCH_CHORES', 
        chores
    }
}

const addChore = chore => {
    return {
        type: 'ADD_CHORE',
        chore
    }
}

const updateChore = chore => {
    return {
        type: 'UPDATE_CHORE',
        chore
    }
}

// ** Async Actions **
export const getChores = () => {
    return dispatch => {
        return fetch(`${API_URL}/chores`)
            .then(response => response.json())
            .then(chores => dispatch(fetchChores(chores)))
            .catch(error => console.log(error))
    }
}

export const createChore = chore => {
    return dispatch => {
        return fetch(`${API_URL}/chores`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify( {chore} )
        })
        .then(response => response.json())
        .then(chore => {
            dispatch(addChore(chore))
            dispatch(resetChoreFormData())
        })
        .catch(error => console.log(error))
    }
}

export const editChore = chore => {
    return dispatch => {
        return fetch(`${API_URL}/chores/${chore.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify( {chore} )
        })
        .then(response => response.json())
        .then(chore => {
            console.log(chore) /* this does not log to the console */
            dispatch(updateChore(chore))
        })
        .catch(error => console.log(error))
    }
}
